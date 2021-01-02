import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Router, Redirect, Switch } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/save";
import NotFound from "./pages/notFound";
import NavBar from "./components/NavBar/navBar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <section className="hero-is-fullheight">
          <div className="head-head">
            <NavBar />
          </div>
          <div className="head-body">
            <Router>
              <Switch>
                <Route path="/search" component={Search} />
                <Route path="/saved" component={Saved} />
                <Route path="/not-found" component={NotFound} />
                <Redirect from="/" exact to="/search" />
                <Redirect to="/not-found" />
              </Switch>
            </Router>
          </div>
          <div className="head-foot">
            <Footer />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
