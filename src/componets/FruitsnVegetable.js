import React from "react";
import shop2 from "./img/shop2.jpg";
import aa from "./img/item/aa.jpg";
import bb from "./img/item/bb.jpg";
import cc from "./img/item/cc.jpg";
import dd from "./img/item/dd.jpg";
import ee from "./img/item/ee.jpg";
import ff from "./img/item/ff.jpg";
import gg from "./img/item/gg.jpg";
import hh from "./img/item/hh.jpg";
import ii from "./img/item/ii.jpg";
import jj from "./img/item/jj.jpg";
import kk from "./img/item/kk.jpg";
import ll from "./img/item/ll.jpg";
import logofooter2 from "./img/logofooter2.png";
import apple from "./img/apple.png";
import google from "./img/google.png";
import paymentmethods from "./img/paymentmethods.png";
import { NavLink } from "react-router-dom";
import "./owl.carousel.css";

//components
import Single from "./Single";
import Checkout from "./Checkout";
export default function FruitsnVegetable() {
    return (
        <div>
            <section className="pt-3 pb-3 page-info section-padding border-bottom bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <NavLink to="#">
                                <strong>
                                    <span className="mdi mdi-home"></span> Home
                                </strong>
                            </NavLink>{" "}
                            <span className="mdi mdi-chevron-right"></span>{" "}
                            <NavLink to="#">Shop</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shop-list section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="shop-filters">
                                <div id="accordion">
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="headingOne"
                                        >
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link"
                                                    data-toggle="collapse"
                                                    data-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Category{" "}
                                                    <span className="mdi mdi-chevron-down float-right"></span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            className="collapse show"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body card-shop-filters">
                                                <form className="form-inline mb-3">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Search By Category"
                                                        />
                                                        <button
                                                            type="submit"
                                                            className="pl-2 pr-2 btn btn-secondary btn-lg"
                                                        >
                                                            <i className="mdi mdi-file-find"></i>
                                                        </button>
                                                    </div>
                                                </form>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="cb1"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="cb1"
                                                    >
                                                        All Fruits{" "}
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="cb8"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="cb8"
                                                    >
                                                        Fresh & Herbs{" "}
                                                        <span className="badge badge-primary">
                                                            5% OFF
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="cb2"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="cb2"
                                                    >
                                                        Seasonal Fruits{" "}
                                                        <span className="badge badge-secondary">
                                                            NEW
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="cb3"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="cb3"
                                                    >
                                                        Imported Fruits{" "}
                                                        <span className="badge badge-danger">
                                                            10% OFF
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="cb4"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="cb4"
                                                    >
                                                        Citrus{" "}
                                                        <span className="badge badge-info">
                                                            50% OFF
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="cb5"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="cb5"
                                                    >
                                                        Cut Fresh & Herbs
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="cb6"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="cb6"
                                                    >
                                                        Seasonal Fruits{" "}
                                                        <span className="badge badge-success">
                                                            25% OFF
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="cb7"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="cb7"
                                                    >
                                                        Fresh & Herbs{" "}
                                                        <span className="badge badge-primary">
                                                            5% OFF
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="headingTwo"
                                        >
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    Price{" "}
                                                    <span className="mdi mdi-chevron-down float-right"></span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="collapse"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body card-shop-filters">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="1"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="1"
                                                    >
                                                        $68 to $659{" "}
                                                        <span className="badge badge-warning">
                                                            50% OFF
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="2"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="2"
                                                    >
                                                        $660 to $1014
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="3"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="3"
                                                    >
                                                        $1015 to $1679
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="4"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="4"
                                                    >
                                                        $1680 to $1856
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="headingThree"
                                        >
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Brand{" "}
                                                    <span className="mdi mdi-chevron-down float-right"></span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            className="collapse"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body card-shop-filters">
                                                <form className="form-inline mb-3">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Search By Brand"
                                                        />
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-secondary ml-2"
                                                    >
                                                        GO
                                                    </button>
                                                </form>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="b1"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="b1"
                                                    >
                                                        Imported Fruits{" "}
                                                        <span className="badge badge-warning">
                                                            50% OFF
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="b2"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="b2"
                                                    >
                                                        Seasonal Fruits{" "}
                                                        <span className="badge badge-secondary">
                                                            NEW
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="b3"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="b3"
                                                    >
                                                        Imported Fruits{" "}
                                                        <span className="badge badge-danger">
                                                            10% OFF
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="b4"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="b4"
                                                    >
                                                        Citrus
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="headingThree"
                                        >
                                            <h5 className="mb-0">
                                                <button
                                                    className="btn btn-link collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapsefour"
                                                    aria-expanded="false"
                                                    aria-controls="collapsefour"
                                                >
                                                    Imported Fruits{" "}
                                                    <span className="mdi mdi-chevron-down float-right"></span>
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapsefour"
                                            className="collapse"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordion"
                                        >
                                            <div className="card-body">
                                                <div className="list-group">
                                                    <NavLink
                                                        to="#"
                                                        className="list-group-item list-group-item-action"
                                                    >
                                                        All Fruits
                                                    </NavLink>
                                                    <NavLink
                                                        to="#"
                                                        className="list-group-item list-group-item-action"
                                                    >
                                                        Imported Fruits
                                                    </NavLink>
                                                    <NavLink
                                                        to="#"
                                                        className="list-group-item list-group-item-action"
                                                    >
                                                        Seasonal Fruits
                                                    </NavLink>
                                                    <NavLink
                                                        to="#"
                                                        className="list-group-item list-group-item-action"
                                                    >
                                                        Citrus
                                                    </NavLink>
                                                    <NavLink
                                                        to="#"
                                                        className="list-group-item list-group-item-action disabled"
                                                    >
                                                        Cut Fresh & Herbs
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="left-ad mt-4">
                                <img
                                    className="img-fluid"
                                    src="http://via.placeholder.com/254x557"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <NavLink to="#">
                                <img
                                    className="img-fluid mb-3"
                                    src={shop2}
                                    alt=""
                                />
                            </NavLink>
                            <div className="shop-head">
                                <NavLink to="#">
                                    <span className="mdi mdi-home"></span> Home
                                </NavLink>{" "}
                                <span className="mdi mdi-chevron-right"></span>{" "}
                                <NavLink to="#">Fruits & Vegetables</NavLink>{" "}
                                <span className="mdi mdi-chevron-right"></span>{" "}
                                <NavLink to="#">Fruits</NavLink>
                                <div className="btn-group float-right mt-2">
                                    <button
                                        type="button"
                                        className="btn btn-dark dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Sort by Products
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <NavLink
                                            className="dropdown-item"
                                            to="#"
                                        >
                                            Relevance
                                        </NavLink>
                                        <NavLink
                                            className="dropdown-item"
                                            to="#"
                                        >
                                            Price (Low to High)
                                        </NavLink>
                                        <NavLink
                                            className="dropdown-item"
                                            to="#"
                                        >
                                            Price (High to Low)
                                        </NavLink>
                                        <NavLink
                                            className="dropdown-item"
                                            to="#"
                                        >
                                            Discount (High to Low)
                                        </NavLink>
                                        <NavLink
                                            className="dropdown-item"
                                            to="#"
                                        >
                                            Name (A to Z)
                                        </NavLink>
                                    </div>
                                </div>
                                <h5 className="mb-3">Fruits</h5>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <div className="product">
                                        <NavLink to="Single">
                                            <div className="product-header">
                                                <span className="badge badge-success">
                                                    50% OFF
                                                </span>
                                                <img
                                                    className="img-fluid"
                                                    src={aa}
                                                    alt=""
                                                />
                                                <span className="veg text-success mdi mdi-circle"></span>
                                            </div>
                                            <div className="product-body">
                                                <h5>Product Title Here</h5>
                                                <h6>
                                                    <strong>
                                                        <span className="mdi mdi-approval"></span>{" "}
                                                        Available in
                                                    </strong>{" "}
                                                    - 500 gm
                                                </h6>
                                            </div>
                                            <div className="product-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm float-right"
                                                >
                                                    <i className="mdi mdi-cart-outline"></i>{" "}
                                                    Add To Cart
                                                </button>
                                                <p className="offer-price mb-0">
                                                    $450.99{" "}
                                                    <i className="mdi mdi-tag-outline"></i>
                                                    <br />
                                                    <span className="regular-price">
                                                        $800.99
                                                    </span>
                                                </p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product">
                                        <NavLink to="Single">
                                            <div className="product-header">
                                                <span className="badge badge-success">
                                                    50% OFF
                                                </span>
                                                <img
                                                    className="img-fluid"
                                                    src={bb}
                                                    alt=""
                                                />
                                                <span className="veg text-success mdi mdi-circle"></span>
                                            </div>
                                            <div className="product-body">
                                                <h5>Product Title Here</h5>
                                                <h6>
                                                    <strong>
                                                        <span className="mdi mdi-approval"></span>{" "}
                                                        Available in
                                                    </strong>{" "}
                                                    - 500 gm
                                                </h6>
                                            </div>
                                            <div className="product-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm float-right"
                                                >
                                                    <i className="mdi mdi-cart-outline"></i>{" "}
                                                    Add To Cart
                                                </button>
                                                <p className="offer-price mb-0">
                                                    $450.99{" "}
                                                    <i className="mdi mdi-tag-outline"></i>
                                                    <br />
                                                    <span className="regular-price">
                                                        $800.99
                                                    </span>
                                                </p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product">
                                        <NavLink to="Single">
                                            <div className="product-header">
                                                <span className="badge badge-success">
                                                    50% OFF
                                                </span>
                                                <img
                                                    className="img-fluid"
                                                    src={cc}
                                                    alt=""
                                                />
                                                <span className="veg text-success mdi mdi-circle"></span>
                                            </div>
                                            <div className="product-body">
                                                <h5>Product Title Here</h5>
                                                <h6>
                                                    <strong>
                                                        <span className="mdi mdi-approval"></span>{" "}
                                                        Available in
                                                    </strong>{" "}
                                                    - 500 gm
                                                </h6>
                                            </div>
                                            <div className="product-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm float-right"
                                                >
                                                    <i className="mdi mdi-cart-outline"></i>{" "}
                                                    Add To Cart
                                                </button>
                                                <p className="offer-price mb-0">
                                                    $450.99{" "}
                                                    <i className="mdi mdi-tag-outline"></i>
                                                    <br />
                                                    <span className="regular-price">
                                                        $800.99
                                                    </span>
                                                </p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <div className="product">
                                        <NavLink to="Single">
                                            <div className="product-header">
                                                <span className="badge badge-success">
                                                    50% OFF
                                                </span>
                                                <img
                                                    className="img-fluid"
                                                    src={dd}
                                                    alt=""
                                                />
                                                <span className="veg text-success mdi mdi-circle"></span>
                                            </div>
                                            <div className="product-body">
                                                <h5>Product Title Here</h5>
                                                <h6>
                                                    <strong>
                                                        <span className="mdi mdi-approval"></span>{" "}
                                                        Available in
                                                    </strong>{" "}
                                                    - 500 gm
                                                </h6>
                                            </div>
                                            <div className="product-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm float-right"
                                                >
                                                    <i className="mdi mdi-cart-outline"></i>{" "}
                                                    Add To Cart
                                                </button>
                                                <p className="offer-price mb-0">
                                                    $450.99{" "}
                                                    <i className="mdi mdi-tag-outline"></i>
                                                    <br />
                                                    <span className="regular-price">
                                                        $800.99
                                                    </span>
                                                </p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product">
                                        <NavLink to="Single">
                                            <div className="product-header">
                                                <span className="badge badge-success">
                                                    50% OFF
                                                </span>
                                                <img
                                                    className="img-fluid"
                                                    src={ee}
                                                    alt=""
                                                />
                                                <span className="veg text-success mdi mdi-circle"></span>
                                            </div>
                                            <div className="product-body">
                                                <h5>Product Title Here</h5>
                                                <h6>
                                                    <strong>
                                                        <span className="mdi mdi-approval"></span>{" "}
                                                        Available in
                                                    </strong>{" "}
                                                    - 500 gm
                                                </h6>
                                            </div>
                                            <div className="product-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm float-right"
                                                >
                                                    <i className="mdi mdi-cart-outline"></i>{" "}
                                                    Add To Cart
                                                </button>
                                                <p className="offer-price mb-0">
                                                    $450.99{" "}
                                                    <i className="mdi mdi-tag-outline"></i>
                                                    <br />
                                                    <span className="regular-price">
                                                        $800.99
                                                    </span>
                                                </p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product">
                                        <NavLink to="Single">
                                            <div className="product-header">
                                                <span className="badge badge-success">
                                                    50% OFF
                                                </span>
                                                <img
                                                    className="img-fluid"
                                                    src={ff}
                                                    alt=""
                                                />
                                                <span className="veg text-success mdi mdi-circle"></span>
                                            </div>
                                            <div className="product-body">
                                                <h5>Product Title Here</h5>
                                                <h6>
                                                    <strong>
                                                        <span className="mdi mdi-approval"></span>{" "}
                                                        Available in
                                                    </strong>{" "}
                                                    - 500 gm
                                                </h6>
                                            </div>
                                            <div className="product-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm float-right"
                                                >
                                                    <i className="mdi mdi-cart-outline"></i>{" "}
                                                    Add To Cart
                                                </button>
                                                <p className="offer-price mb-0">
                                                    $450.99{" "}
                                                    <i className="mdi mdi-tag-outline"></i>
                                                    <br />
                                                    <span className="regular-price">
                                                        $800.99
                                                    </span>
                                                </p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <div className="product">
                                        <NavLink to="Single">
                                            <div className="product-header">
                                                <span className="badge badge-success">
                                                    50% OFF
                                                </span>
                                                <img
                                                    className="img-fluid"
                                                    src={gg}
                                                    alt=""
                                                />
                                                <span className="veg text-success mdi mdi-circle"></span>
                                            </div>
                                            <div className="product-body">
                                                <h5>Product Title Here</h5>
                                                <h6>
                                                    <strong>
                                                        <span className="mdi mdi-approval"></span>{" "}
                                                        Available in
                                                    </strong>{" "}
                                                    - 500 gm
                                                </h6>
                                            </div>
                                            <div className="product-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm float-right"
                                                >
                                                    <i className="mdi mdi-cart-outline"></i>{" "}
                                                    Add To Cart
                                                </button>
                                                <p className="offer-price mb-0">
                                                    $450.99{" "}
                                                    <i className="mdi mdi-tag-outline"></i>
                                                    <br />
                                                    <span className="regular-price">
                                                        $800.99
                                                    </span>
                                                </p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product">
                                        <NavLink to="Single">
                                            <div className="product-header">
                                                <span className="badge badge-success">
                                                    50% OFF
                                                </span>
                                                <img
                                                    className="img-fluid"
                                                    src={hh}
                                                    alt=""
                                                />
                                                <span className="veg text-success mdi mdi-circle"></span>
                                            </div>
                                            <div className="product-body">
                                                <h5>Product Title Here</h5>
                                                <h6>
                                                    <strong>
                                                        <span className="mdi mdi-approval"></span>{" "}
                                                        Available in
                                                    </strong>{" "}
                                                    - 500 gm
                                                </h6>
                                            </div>
                                            <div className="product-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm float-right"
                                                >
                                                    <i className="mdi mdi-cart-outline"></i>{" "}
                                                    Add To Cart
                                                </button>
                                                <p className="offer-price mb-0">
                                                    $450.99{" "}
                                                    <i className="mdi mdi-tag-outline"></i>
                                                    <br />
                                                    <span className="regular-price">
                                                        $800.99
                                                    </span>
                                                </p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product">
                                        <NavLink to="Single">
                                            <div className="product-header">
                                                <span className="badge badge-success">
                                                    50% OFF
                                                </span>
                                                <img
                                                    className="img-fluid"
                                                    src={ii}
                                                    alt=""
                                                />
                                                <span className="veg text-success mdi mdi-circle"></span>
                                            </div>
                                            <div className="product-body">
                                                <h5>Product Title Here</h5>
                                                <h6>
                                                    <strong>
                                                        <span className="mdi mdi-approval"></span>{" "}
                                                        Available in
                                                    </strong>{" "}
                                                    - 500 gm
                                                </h6>
                                            </div>
                                            <div className="product-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm float-right"
                                                >
                                                    <i className="mdi mdi-cart-outline"></i>{" "}
                                                    Add To Cart
                                                </button>
                                                <p className="offer-price mb-0">
                                                    $450.99{" "}
                                                    <i className="mdi mdi-tag-outline"></i>
                                                    <br />
                                                    <span className="regular-price">
                                                        $800.99
                                                    </span>
                                                </p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <nav>
                                <ul className="pagination justify-content-center mt-4">
                                    <li className="page-item disabled">
                                        <span className="page-link">
                                            Previous
                                        </span>
                                    </li>
                                    <li className="page-item">
                                        <NavLink className="page-link" to="#">
                                            1
                                        </NavLink>
                                    </li>
                                    <li className="page-item active">
                                        <span className="page-link">
                                            2
                                            <span className="sr-only">
                                                (current)
                                            </span>
                                        </span>
                                    </li>
                                    <li className="page-item">
                                        <NavLink className="page-link" to="#">
                                            3
                                        </NavLink>
                                    </li>
                                    <li className="page-item">
                                        <NavLink className="page-link" to="#">
                                            Next
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product-items-slider section-padding bg-white border-top">
                <div className="container">
                    <div className="section-header">
                        <h5 className="heading-design-h5">
                            Best Offers View{" "}
                            <span className="badge badge-primary">20% OFF</span>
                            <NavLink
                                className="float-right text-secondary"
                                to="FruitsnVegetable"
                            >
                                View All
                            </NavLink>
                        </h5>
                    </div>
                    <div className="owl-carousel owl-carousel-featured">
                        <div className="item">
                            <div className="product">
                                <NavLink to="Single">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={jj}
                                            alt=""
                                        />
                                        <span className="veg text-success mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="Single">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={kk}
                                            alt=""
                                        />
                                        <span className="non-veg text-danger mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="Single">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={ll}
                                            alt=""
                                        />
                                        <span className="non-veg text-danger mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="Single">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={dd}
                                            alt=""
                                        />
                                        <span className="veg text-success mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="Single">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={ee}
                                            alt=""
                                        />
                                        <span className="veg text-success mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="item">
                            <div className="product">
                                <NavLink to="Single">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={dd}
                                            alt=""
                                        />
                                        <span className="veg text-success mdi mdi-circle"></span>
                                    </div>
                                    <div className="product-body">
                                        <h5>Product Title Here</h5>
                                        <h6>
                                            <strong>
                                                <span className="mdi mdi-approval"></span>{" "}
                                                Available in
                                            </strong>{" "}
                                            - 500 gm
                                        </h6>
                                    </div>
                                    <div className="product-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm float-right"
                                        >
                                            <i className="mdi mdi-cart-outline"></i>{" "}
                                            Add To Cart
                                        </button>
                                        <p className="offer-price mb-0">
                                            $450.99{" "}
                                            <i className="mdi mdi-tag-outline"></i>
                                            <br />
                                            <span className="regular-price">
                                                $800.99
                                            </span>
                                        </p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-padding bg-white border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature-box">
                                <i className="mdi mdi-truck-fast"></i>
                                <h6>Free & Next Day Delivery</h6>
                                <p>Lorem ipsum dolor sit amet, cons...</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature-box">
                                <i className="mdi mdi-basket"></i>
                                <h6>100% Satisfaction Guarantee</h6>
                                <p>Rorem Ipsum Dolor sit amet, cons...</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature-box">
                                <i className="mdi mdi-tag-heart"></i>
                                <h6>Great Daily Deals Discount</h6>
                                <p>Sorem Ipsum Dolor sit amet, Cons...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding footer bg-white border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <h4 className="mb-5 mt-0">
                                <NavLink className="logo" to="/">
                                    <img src={logofooter2} alt="Groci" />
                                </NavLink>
                            </h4>
                            <p className="mb-0">
                                <NavLink className="text-dark" to="#">
                                    <i className="mdi mdi-phone"></i> +61 525
                                    240 310
                                </NavLink>
                            </p>
                            <p className="mb-0">
                                <NavLink className="text-dark" to="#">
                                    <i className="mdi mdi-cellphone-iphone"></i>{" "}
                                    12345 67890, 56847-98562
                                </NavLink>
                            </p>
                            <p className="mb-0">
                                <NavLink className="text-success" to="#">
                                    <i className="mdi mdi-email"></i>{" "}
                                    <span
                                        className="__cf_email__"
                                        data-cfemail="b7ded6dad8c4d6dfd6d9f7d0dad6dedb99d4d8da"
                                    >
                                        [email&#160;protected]
                                    </span>
                                </NavLink>
                            </p>
                            <p className="mb-0">
                                <NavLink className="text-primary" to="#">
                                    <i className="mdi mdi-web"></i>{" "}
                                    www.askbootstrap.com
                                </NavLink>
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-2">
                            <h6 className="mb-4">TOP CITIES </h6>
                            <ul>
                                <li>
                                    <NavLink to="#">New Delhi</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Bengaluru</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Hyderabad</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Kolkata</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Gurugram</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-2">
                            <h6 className="mb-4">CATEGORIES</h6>
                            <ul>
                                <li>
                                    <NavLink to="#">Vegetables</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Grocery & Staples</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Breakfast & Dairy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Soft Drinks</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Biscuits & Cookies</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-2">
                            <h6 className="mb-4">ABOUT US</h6>
                            <ul>
                                <li>
                                    <NavLink to="#">
                                        Company Information
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Careers</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Store Location</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Affillate Program</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Copyright</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <h6 className="mb-4">Download App</h6>
                            <div className="app">
                                <NavLink to="#">
                                    <img src={google} alt="" />
                                </NavLink>
                                <NavLink to="#">
                                    <img src={apple} alt="" />
                                </NavLink>
                            </div>
                            <h6 className="mb-3 mt-4">GET IN TOUCH</h6>
                            <div className="footer-social">
                                <NavLink className="btn-facebook" to="#">
                                    <i className="mdi mdi-facebook"></i>
                                </NavLink>
                                <NavLink className="btn-twitter" to="#">
                                    <i className="mdi mdi-twitter"></i>
                                </NavLink>
                                <NavLink className="btn-instagram" to="#">
                                    <i className="mdi mdi-instagram"></i>
                                </NavLink>
                                <NavLink className="btn-whatsapp" to="#">
                                    <i className="mdi mdi-whatsapp"></i>
                                </NavLink>
                                <NavLink className="btn-messenger" to="#">
                                    <i className="mdi mdi-facebook-messenger"></i>
                                </NavLink>
                                <NavLink className="btn-google" to="#">
                                    <i className="mdi mdi-google"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-4 pb-4 footer-bottom">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-sm-6">
                            <p className="mt-1 mb-0">
                                &copy; Copyright 2020{" "}
                                <strong className="text-dark">Groci</strong>.
                                All Rights Reserved
                                <br />
                                <small className="mt-0 mb-0">
                                    Made with{" "}
                                    <i className="mdi mdi-heart text-danger"></i>{" "}
                                    by{" "}
                                    <NavLink
                                        to="https://askbootstrap.com/"
                                        target="_blank"
                                        className="text-primary"
                                    >
                                        Ask Bootstrap
                                    </NavLink>
                                </small>
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-6 text-right">
                            <img alt="osahan logo" src={paymentmethods} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="cart-sidebar">
                <div className="cart-sidebar-header">
                    <h5>
                        My Cart <span className="text-success">(5 item)</span>{" "}
                        <NavLink
                            data-toggle="offcanvas"
                            className="float-right"
                            to="#"
                        >
                            <i className="mdi mdi-close"></i>
                        </NavLink>
                    </h5>
                </div>
                <div className="cart-sidebar-body">
                    <div className="cart-list-product">
                        <NavLink className="float-right remove-cart" to="#">
                            <i className="mdi mdi-close"></i>
                        </NavLink>
                        <img className="img-fluid" src={ll} alt="" />
                        <span className="badge badge-success">50% OFF</span>
                        <h5>
                            <NavLink to="#">Product Title Here</NavLink>
                        </h5>
                        <h6>
                            <strong>
                                <span className="mdi mdi-approval"></span>{" "}
                                Available in
                            </strong>{" "}
                            - 500 gm
                        </h6>
                        <p className="offer-price mb-0">
                            $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                            <span className="regular-price">$800.99</span>
                        </p>
                    </div>
                    <div className="cart-list-product">
                        <NavLink className="float-right remove-cart" to="#">
                            <i className="mdi mdi-close"></i>
                        </NavLink>
                        <img
                            className="img-fluid"
                            src="img/item/7.jpg"
                            alt=""
                        />
                        <span className="badge badge-success">50% OFF</span>
                        <h5>
                            <NavLink to="#">Product Title Here</NavLink>
                        </h5>
                        <h6>
                            <strong>
                                <span className="mdi mdi-approval"></span>{" "}
                                Available in
                            </strong>{" "}
                            - 500 gm
                        </h6>
                        <p className="offer-price mb-0">
                            $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                            <span className="regular-price">$800.99</span>
                        </p>
                    </div>
                    <div className="cart-list-product">
                        <NavLink className="float-right remove-cart" to="#">
                            <i className="mdi mdi-close"></i>
                        </NavLink>
                        <img
                            className="img-fluid"
                            src="img/item/9.jpg"
                            alt=""
                        />
                        <span className="badge badge-success">50% OFF</span>
                        <h5>
                            <NavLink to="#">Product Title Here</NavLink>
                        </h5>
                        <h6>
                            <strong>
                                <span className="mdi mdi-approval"></span>{" "}
                                Available in
                            </strong>{" "}
                            - 500 gm
                        </h6>
                        <p className="offer-price mb-0">
                            $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                            <span className="regular-price">$800.99</span>
                        </p>
                    </div>
                    <div className="cart-list-product">
                        <NavLink className="float-right remove-cart" to="#">
                            <i className="mdi mdi-close"></i>
                        </NavLink>
                        <img
                            className="img-fluid"
                            src="img/item/1.jpg"
                            alt=""
                        />
                        <span className="badge badge-success">50% OFF</span>
                        <h5>
                            <NavLink to="#">Product Title Here</NavLink>
                        </h5>
                        <h6>
                            <strong>
                                <span className="mdi mdi-approval"></span>{" "}
                                Available in
                            </strong>{" "}
                            - 500 gm
                        </h6>
                        <p className="offer-price mb-0">
                            $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                            <span className="regular-price">$800.99</span>
                        </p>
                    </div>
                    <div className="cart-list-product">
                        <NavLink className="float-right remove-cart" to="#">
                            <i className="mdi mdi-close"></i>
                        </NavLink>
                        <img
                            className="img-fluid"
                            src="img/item/2.jpg"
                            alt=""
                        />
                        <span className="badge badge-success">50% OFF</span>
                        <h5>
                            <NavLink to="#">Product Title Here</NavLink>
                        </h5>
                        <h6>
                            <strong>
                                <span className="mdi mdi-approval"></span>{" "}
                                Available in
                            </strong>{" "}
                            - 500 gm
                        </h6>
                        <p className="offer-price mb-0">
                            $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
                            <span className="regular-price">$800.99</span>
                        </p>
                    </div>
                </div>
                <div className="cart-sidebar-footer">
                    <div className="cart-store-details">
                        <p>
                            Sub Total{" "}
                            <strong className="float-right">$900.69</strong>
                        </p>
                        <p>
                            Delivery Charges{" "}
                            <strong className="float-right text-danger">
                                + $29.69
                            </strong>
                        </p>
                        <h6>
                            Your total savings{" "}
                            <strong className="float-right text-danger">
                                $55 (42.31%)
                            </strong>
                        </h6>
                    </div>
                    <NavLink to="Checkout">
                        <button
                            className="btn btn-secondary btn-lg btn-block text-left"
                            type="button"
                        >
                            <span className="float-left">
                                <i className="mdi mdi-cart-outline"></i> Proceed
                                to Checkout{" "}
                            </span>
                            <span className="float-right">
                                <strong>$1200.69</strong>{" "}
                                <span className="mdi mdi-chevron-right"></span>
                            </span>
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
