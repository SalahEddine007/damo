import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../src/img/LogoOCP.png';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <img src={logo} className="App-logo" style={{ width: '60px', height: '60px' }} alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">

        </div>
      </nav>
    );
  }
}

export default Navbar;