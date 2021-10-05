import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Error from './components/Error/Error';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Journal from './components/Journal/Journal';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/details">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/journal">
            <Journal></Journal>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
