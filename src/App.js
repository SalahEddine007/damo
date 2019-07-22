import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';



import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';



function App() {
  return (
    
      <Router><div className="app">
        <Navbar />
        <Route exact path="/" component={Landing} />

        <Footer />
      </div></Router>
      
    
  );
}

export default App;
