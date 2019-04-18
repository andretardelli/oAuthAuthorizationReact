import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div>
        <h1>Home - Portal CO Digital</h1>
        {isAuthenticated() ? (
          <Link to="/profile">Ver Perfil</Link>
        ) : (
          <button onClick={login}>Entrar</button>
        )}
      </div>
    );
  }
}

export default Home;
