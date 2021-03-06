import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainNav from "./common/MainNav";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import TermsPage from "./terms/TermsPage";
import { PageNotFound } from "./PageNotFound";
import ManageTermsPage from "./terms/Term";

function App() {
  return (
    <div className="ms-Fabric" style={{ display: "inline-flex" }}>
      <MainNav />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/term/:slug" component={ManageTermsPage} />
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer autoClose={3000} />
      </div>
    </div>
  );
}

export default App;
