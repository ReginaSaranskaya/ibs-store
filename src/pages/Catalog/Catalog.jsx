import React, { useContext, useEffect, useMemo, useState } from "react";

import ErrorModal from "../../components/ErrorModal/ErrorModal";
import { getItemsList } from "../../api";
import Card from "../../components/Card/Card";
import styles from "./style.module.scss";
import Context from "../../context/Search/context";

const Catalog = () => {
  const [list, setList] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    getItemsList().then((response) => setList(response));
  }, []);

  const filteredList = useMemo(
    () =>
      list?.filter(({ name }) => name.toLowerCase().includes(context.value)),
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
