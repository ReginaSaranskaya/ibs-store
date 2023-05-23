import React, {Component} from 'react';
import PropTypes from "prop-types";

import { ReactComponent as Like } from './like.svg';
import { ReactComponent as Unlike } from './unlike.svg';
import styles from "./style.module.scss";


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
          <a href="#" id={this.props.id} className={styles.Card}>

              <div className={styles.Card__like}>
                {this.props.like ? <Like /> : <Unlike />}
              </div>
              <div className={styles.Card__imageWrapper}>
                <img className={styles.Card__image} src={this.props.picture} alt={this.props.alt}/>
              </div>
              <h3 className={styles.Card__title}>{this.props.name}</h3>
              <div className={styles.Card__price}>&#36; {this.props.price}</div>
          </a>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  like: PropTypes.bool,
  price: PropTypes.number,
  picture: PropTypes.string,
  alt: PropTypes.string,
};

export default Card;