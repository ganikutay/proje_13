import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
//import Analytics from 'react-router-ga';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import NotFound from './components/not_found/NotFound';
import Main from './components/main/Main';
import Products from './components/products/Products';
import ProductDetails from './components/product_details/ProductDetails';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/products/" component={Products} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route component={NotFound} />   {/* <Redirect from='*' to='/' /> */}
        </Switch>
      </BrowserRouter>
      <Footer />
      </React.Fragment>
    );
  }
}
