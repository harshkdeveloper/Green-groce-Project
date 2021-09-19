import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import "./owl.carousel.css";
import "./Wishlist";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light osahan-menu-2 pad-none-mobile">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link shop" to="/">
                                    <span className="mdi mdi-store"></span>{" "}
                                    Super Store
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="menu_active"
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li classname="nav-item">
                                <NavLink
                                    activeClassName="menu_active"
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="menu_active"
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/FruitsnVegetable"
                                >
                                    Fruits & Vegetables
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="menu_active"
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/Grocery"
                                >
                                    Grocery & Staples
                                </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink
                                    class="nav-link dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    to="#"
                                >
                                    Pages
                                </NavLink>
                                <div class="dropdown-menu">
                                    <NavLink
                                        className="dropdown-item"
                                        to="/FruitsnVegetable"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Shop Grid
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/Single"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Single Product
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/Cart"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Shopping cart
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/Checkout"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Checkout
                                    </NavLink>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <NavLink
                                    className="nav-link dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    to="#"
                                >
                                    My Account
                                </NavLink>
                                <div className="dropdown-menu">
                                    <NavLink
                                        className="dropdown-item"
                                        to="/Profile"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Profile
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/Address"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Address
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/Wishlist"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Wishlist
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item"
                                        to="Wishlist"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Order List
                                    </NavLink>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <NavLink
                                    className="nav-link dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    to="#"
                                >
                                    Blog Page
                                </NavLink>
                                <div className="dropdown-menu">
                                    <NavLink
                                        className="dropdown-item"
                                        to="/Blog"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Blog
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/Blogd"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Blog detail
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    to="#"
                                >
                                    More Pages
                                </NavLink>
                                <div className="dropdown-menu">
                                    <NavLink
                                        className="dropdown-item"
                                        to="/About"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        About us
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/Contact"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Contact us
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/faq"
                                    >
                                        <i
                                            class="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>{" "}
                                        Faq
                                    </NavLink>
                                    <NavLink
                                        className="dropdown-item"
                                        to="/Notfound"
                                    >
                                        <i
                                            className="mdi mdi-chevron-right"
                                            aria-hidden="true"
                                        ></i>
                                        Error
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeClassName="menu_active"
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/Contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
