import React, {Component} from 'react';
import PropTypes from "prop-types";

import {Context} from "./context";

class Provider extends Component {
  constructor() {
    super();
    this.state = {
      changeSearch: "",
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(str) {
    this.setState ({
      changeSearch: str
    });
  }

  render() {
    return (
      <Context.Provider value={{ value: this.state.changeSearch, change: this.handleChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node
}

export default Provider;