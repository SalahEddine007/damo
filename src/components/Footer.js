import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white mt-5 p-2 text-center">
        Copyright &copy; {new Date().getFullYear()} ILO
      </footer>
    );
  }
}

export default Footer;