import React, { useContext, useEffect, useMemo } from "react";

import Context from "@/context/Search/context";
import { useAppDispatch, useAppSelector } from "@/state/hooks/hooks";
import { fetchItemsList } from "@/state/catalogSlice/catalogActions";
import { IItem } from "@/api/types";
import ErrorModal from "@/components/ErrorModal/ErrorModal";
import Card from "@/components/Card/Card";

import styles from "./style.module.scss";

const Catalog: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const list = useAppSelector((state): IItem[] => state.catalog.items);
  const context = useContext(Context);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItemsList());
  }, [dispatch]);

  const filteredList = useMemo(
    () =>
      list.filter(({ name }) => name.toLowerCase().includes(context?.value)),
    [list, context?.value]
  );

  return (
    <>
      {filteredList && (
        <ul className={styles.Catalog}>
          {filteredList.map(({ id, name, like, picture, price }) => {
            return (
              <li className={styles.Catalog__item} key={id}>
                <Card
                  id={id}
                  name={name}
                  like={like}
                  picture={picture.path}
                  alt={picture.alt}
                  price={price.value}
                />
              </li>
            );
          })}
        </ul>
      )}
      <ErrorModal />
    </>
  );
};

export default Catalog;
