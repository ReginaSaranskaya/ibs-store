import React, { Component } from "react";

import { getItemsList } from "../../api/api";
import Card from "../Card/Card";
import styles from "./style.module.scss";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      renderList: [],
    };
  }

  componentDidMount() {
    getItemsList().then((list) => {
      this.setState({ renderList: list });
    });
  }

  render() {
    const renderList = this.state.renderList;

    return (
      <ul className={styles.Catalog}>
        {renderList.map(({ id, name, like, picture, price }) => {
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
    );
  }
}

export default Catalog;
