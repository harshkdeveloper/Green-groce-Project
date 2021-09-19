import logo from './logo.svg';
import './App.css';


import React from "react";
import { ReactDOM } from "react";

import logo2 from "./img/logo2.png";
import a from "./img/small/a.jpg";
import About from "./componets/About";
import Navbar from "./componets/Navbar";
import FruitsnVegetable from "./componets/FruitsnVegetable";
import Grocery from "./componets/Grocery";
import Single from "./componets/Single";
import Cart from "./componets/Cart";
import Checkout from "./componets/Checkout";
import Profile from "./componets/Profile";
// import "./owlcarousel.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./componets/Home";
import Address from "./componets/Address";
import Wishlist from "./componets/Wishlist";
import Blog from "./componets/Blog";
import Blogd from "./componets/Blogd";
import Contact from "./componets/Contact";
import faq from "./componets/faq";
import Notfound from "./componets/Notfound";
import { NavLink } from "react-router-dom";
function App() {
    return (
      <>
        <BrowserRouter>
            <div className="modal fade login-modal-main" id="bd-example-modal">
                <div
                    className="modal-dialog modal-lg modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="login-modal">
                                <div className="row">
                                    <div className="col-lg-6 pad-right-0">
                                        <div className="login-modal-left"></div>
                                    </div>
                                    <div className="col-lg-6 pad-left-0">
                                        <button
                                            type="button"
                                            className="close close-top-right"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">
                                                <i className="mdi mdi-close"></i>
                                            </span>
                                            <span className="sr-only">
                                                Close
                                            </span>
                                        </button>
                                        <form>
                                            <div className="login-modal-right">
                                                <div className="tab-content">
                                                    <div
                                                        className="tab-pane active"
                                                        id="login"
                                                        role="tabpanel"
                                                    >
                                                        <h5 className="heading-design-h5">
                                                            Login to your
                                                            account
                                                        </h5>
                                                        <fieldset className="form-group">
                                                            <label>
                                                                Enter
                                                                Email/Mobile
                                                                number
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="+91 123 456 7890"
                                                            />
                                                        </fieldset>
                                                        <fieldset className="form-group">
                                                            <label>
                                                                Enter Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="********"
                                                            />
                                                        </fieldset>
                                                        <fieldset className="form-group">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-lg btn-secondary btn-block"
                                                            >
                                                                Enter to your
                                                                account
                                                            </button>
                                                        </fieldset>
                                                        <div className="login-with-sites text-center">
                                                            <p>
                                                                or Login with
                                                                your social
                                                                profile:
                                                            </p>
                                                            <button className="btn-facebook login-icons btn-lg">
                                                                <i className="mdi mdi-facebook"></i>{" "}
                                                                Facebook
                                                            </button>
                                                            <button className="btn-google login-icons btn-lg">
                                                                <i className="mdi mdi-google"></i>{" "}
                                                                Google
                                                            </button>
                                                            <button className="btn-twitter login-icons btn-lg">
                                                                <i className="mdi mdi-twitter"></i>{" "}
                                                                Twitter
                                                            </button>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customCheck1"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                for="customCheck1"
                                                            >
                                                                Remember me
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="tab-pane"
                                                        id="register"
                                                        role="tabpanel"
                                                    >
                                                        <h5 className="heading-design-h5">
                                                            Register Now!
                                                        </h5>
                                                        <fieldset className="form-group">
                                                            <label>
                                                                Enter
                                                                Email/Mobile
                                                                number
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="+91 123 456 7890"
                                                            />
                                                        </fieldset>
                                                        <fieldset className="form-group">
                                                            <label>
                                                                Enter Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="********"
                                                            />
                                                        </fieldset>
                                                        <fieldset className="form-group">
                                                            <label>
                                                                Enter Confirm
                                                                Password{" "}
                                                            </label>
                                                            <input
                                                                type="password"
                                                                className="form-control"
                                                                placeholder="********"
                                                            />
                                                        </fieldset>
                                                        <fieldset className="form-group">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-lg btn-secondary btn-block"
                                                            >
                                                                Create Your
                                                                Account
                                                            </button>
                                                        </fieldset>
                                                        <div className="custom-control custom-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="customCheck2"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                for="customCheck2"
                                                            >
                                                                I Agree with
                                                                <NavLink to="#">
                                                                    Term and
                                                                    Conditions
                                                                </NavLink>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="text-center login-footer-tab">
                                                    <ul
                                                        className="nav nav-tabs"
                                                        role="tablist"
                                                    >
                                                        <li className="nav-item">
                                                            <NavLink
                                                                className="nav-link active"
                                                                data-toggle="tab"
                                                                to="#login"
                                                                role="tab"
                                                            >
                                                                <i className="mdi mdi-lock"></i>
                                                                LOGIN
                                                            </NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink
                                                                className="nav-link"
                                                                data-toggle="tab"
                                                                to="#register"
                                                                role="tab"
                                                            >
                                                                <i className="mdi mdi-pencil"></i>
                                                                REGISTER
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-top bg-success pt-2 pb-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <NavLink
                                to="FruitsnVegetable"
                                className="mb-0 text-white"
                            >
                                20% cashback for new users | Code:{" "}
                                <strong>
                                    <span className="text-light">
                                        OGOFERS13{" "}
                                        <span className="mdi mdi-tag-faces"></span>
                                    </span>{" "}
                                </strong>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo2} alt="logo" />
                    </NavLink>
                    <NavLink className="location-top" to="#">
                        <i
                            className="mdi mdi-map-marker-circle"
                            aria-hidden="true"
                        ></i>
                        New York
                    </NavLink>
                    <button
                        className="navbar-toggler navbar-toggler-white"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" id="navbarNavDropdown">
                        <div className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                            <div className="top-categories-search">
                                <div className="input-group">
                                    <span className="input-group-btn categories-dropdown">
                                        <select className="form-control-select">
                                            <option selected="selected">
                                                Your City
                                            </option>
                                            <option value="0">New Delhi</option>
                                            <option value="2">Bengaluru</option>
                                            <option value="3">Hyderabad</option>
                                            <option value="4">Kolkata</option>
                                        </select>
                                    </span>
                                    <input
                                        className="form-control"
                                        placeholder="Search products in Your City"
                                        aria-label="Search products in Your City"
                                        type="text"
                                    />
                                    <span className="input-group-btn">
                                        <button
                                            className="btn btn-secondary"
                                            type="button"
                                        >
                                            <i className="mdi mdi-file-find"></i>
                                            Search
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="my-2 my-lg-0">
                            <ul className="list-inline main-nav-right">
                                <li className="list-inline-item">
                                    <NavLink
                                        to="#"
                                        data-target="#bd-example-modal"
                                        data-toggle="modal"
                                        className="btn btn-link"
                                    >
                                        <i className="mdi mdi-account-circle"></i>
                                        Login/Sign Up
                                    </NavLink>
                                </li>
                                <li className="list-inline-item cart-btn">
                                    <NavLink
                                        to="#"
                                        data-toggle="offcanvas"
                                        className="btn btn-link border-none"
                                    >
                                        <i className="mdi mdi-cart"></i> My Cart
                                        <small className="cart-value">5</small>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Navbar />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route
                    exact
                    path="/FruitsnVegetable"
                    component={FruitsnVegetable}
                />
                <Route exact path="/Grocery" component={Grocery} />
                <Route exact path="/Single" component={Single} />
                <Route exact path="/Cart" component={Cart} />
                <Route exact path="/Checkout" component={Checkout} />
                <Route exact path="/Profile" component={Profile} />
                <Route exact path="/Address" component={Address} />
                <Route exact path="/Wishlist" component={Wishlist} />
                <Route exact path="/Blog" component={Blog} />
                <Route exact path="/Blogd" component={Blogd} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Faq" component={faq} />
                <Route exact path="/Notfound" component={Notfound} />
                <Route exact path="" component={Home} />
            </Switch>
        </BrowserRouter></>

    );



}

export default App;
