import React, { Component } from "react";

const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null,
    };

    componenDidMount() {
      importComponent.then((cmp) => {
        this.setState({
          component: cmp,
        });
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
