import React, {Component} from 'react';

import Search from "../../ui-components/Search/Search";
import styles from "./style.module.scss"
import {Context} from "../../context/Search/context";

class Header extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  static contextType = Context;

  handleChange(e) {
    this.context.change(e.target.value);
  }

  render() {
    return (
      <header className={styles.Header}>
        <Search handleChange={this.handleChange} value={this.context.value}/>
        <div className={styles.Header__wrapper}>
          <a href="#" className={styles.Header__link}>
            <svg className={styles.Header__icon} width="21" height="20" viewBox="0 0 21 20" fill="#323232"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C20.25 2.82 19.77 2 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" />
            </svg>
        </a>
        <a href="#" className={styles.Header__link}>
          <svg className={styles.Header__icon} width="20" height="20" viewBox="0 0 20 20" fill="#323232"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.07 16.28C5.5 15.38 8.12 14.5 10 14.5C11.88 14.5 14.51 15.38 14.93 16.28C13.57 17.36 11.86 18 10 18C8.14 18 6.43 17.36 5.07 16.28ZM16.36 14.83C14.93 13.09 11.46 12.5 10 12.5C8.54 12.5 5.07 13.09 3.64 14.83C2.62 13.49 2 11.82 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 11.82 17.38 13.49 16.36 14.83ZM10 4C8.06 4 6.5 5.56 6.5 7.5C6.5 9.44 8.06 11 10 11C11.94 11 13.5 9.44 13.5 7.5C13.5 5.56 11.94 4 10 4ZM10 9C9.17 9 8.5 8.33 8.5 7.5C8.5 6.67 9.17 6 10 6C10.83 6 11.5 6.67 11.5 7.5C11.5 8.33 10.83 9 10 9Z"/>
          </svg>
        </a>
      </div>
  </header>
  )
    ;
  }
}

export default Header;