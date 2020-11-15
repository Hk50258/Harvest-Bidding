import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router , Route  } from 'react-router-dom'
import ProductPage from "../pages/ProductPage/ProductPage"
import AboutUs from "../pages/AboutUs"
import {createBrowserHistory as history } from 'history';

function App() {
  
  return (
    <div>
      <Header />
      <Router history={history}>
        <Route exact path='/' component={ProductPage}></Route>
        <Route exact path='/AboutUs' component={AboutUs}></Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
