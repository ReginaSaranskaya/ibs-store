import React, { useContext, useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
import Card from "../../components/Card/Card";
import styles from "./style.module.scss";
import Context from "../../context/Search/context";
import { fetchItemsList } from "../../state/catalogSlice/catalogActions";

const Catalog = () => {
  const list = useSelector((state) => state.catalog.items);
  const context = useContext(Context);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemsList());
  }, [dispatch]);

  const filteredList = useMemo(
    () => list.filter(({ name }) => name.toLowerCase().includes(context.value)),
    [list, context.value]
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
