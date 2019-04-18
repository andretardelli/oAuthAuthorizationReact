import React, { Component } from "react";

class Callback extends Component {
  componentDidMount = () => {
    //Autentica se os valores esperados estão na URL
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("URL Inválida!");
    }
  };
  render() {
    return <h1>Carregando</h1>;
  }
}

export default Callback;
