import React from "react";
import "./Single.css";
import ll from "./img/item/ll.jpg";
import jj from "./img/item/jj.jpg";
import kk from "./img/item/kk.jpg";
import aa from "./img/item/aa.jpg";
import ii from "./img/item/ii.jpg";
import cc from "./img/item/cc.jpg";
import bb from "./img/item/bb.jpg";
import ee from "./img/item/ee.jpg";
import gg from "./img/item/gg.jpg";

import google from "./img/google.png";
import apple from "./img/apple.png";
import { NavLink } from "react-router-dom";
import Checkout from "./Checkout";
import "./owl.carousel.css";

import FruitsnVegetable from "./FruitsnVegetable";

export default function Single() {
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
                            <NavLink to="#">Fruits & Vegetables</NavLink>{" "}
                            <span className="mdi mdi-chevron-right"></span>{" "}
                            <NavLink to="#">Fruits</NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shop-single section-padding pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="shop-detail-right">
                                <span className="badge badge-success">
                                    50% OFF
                                </span>
                                <h2>SaveMore Corn Flakes (Pouch)</h2>
                                <h6>
                                    <strong>
                                        <span className="mdi mdi-approval"></span>{" "}
                                        Available in
                                    </strong>{" "}
                                    - 500 gm
                                </h6>
                                <p className="regular-price">
                                    <i className="mdi mdi-tag-outline"></i> MRP
                                    : $800.99
                                </p>
                                <p className="offer-price mb-0">
                                    Discounted price :{" "}
                                    <span className="text-success">
                                        $450.99
                                    </span>
                                </p>
                                <NavLink to="/Checkout">
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-lg"
                                    >
                                        <i className="mdi mdi-cart-outline"></i>{" "}
                                        Add To Cart
                                    </button>{" "}
                                </NavLink>
                                <div className="short-description">
                                    <h5>
                                        Quick Overview
                                        <p className="float-right">
                                            Availability:{" "}
                                            <span className="badge badge-success">
                                                In Stock
                                            </span>
                                        </p>
                                    </h5>
                                    <p>
                                        <b>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                        </b>{" "}
                                        Nam fringilla augue nec est tristique
                                        auctor. Donec non est at libero
                                        vulputate rutrum.
                                    </p>
                                    <p className="mb-0">
                                        {" "}
                                        Vivamus adipiscing nisl ut dolor
                                        dignissim semper. Nulla luctus malesuada
                                        tincidunt. className aptent taciti
                                        sociosqu ad litora torquent per conubia
                                        nostra, per inceptos hiMenaeos. Integer
                                        enim purus, posuere at ultricies eu,
                                        placerat a felis. Suspendisse aliquet
                                        urna pretium eros convallis interdum.
                                    </p>
                                </div>
                                <h6 className="mb-3 mt-4">
                                    Why shop from Groci?
                                </h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="feature-box">
                                            <i className="mdi mdi-truck-fast"></i>
                                            <h6 className="text-info">
                                                Free Delivery
                                            </h6>
                                            <p>Lorem ipsum dolor...</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="feature-box">
                                            <i className="mdi mdi-basket"></i>
                                            <h6 className="text-info">
                                                100% Guarantee
                                            </h6>
                                            <p>Rorem Ipsum Dolor sit...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={ll}
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
                                <NavLink to="FruitsnVegetable">
                                    <div className="product-header">
                                        <span className="badge badge-success">
                                            50% OFF
                                        </span>
                                        <img
                                            className="img-fluid"
                                            src={jj}
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
                                <NavLink to="FruitsnVegetable">
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
                                <NavLink to="FruitsnVegetable">
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
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
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
                        <div className="item">
                            <div className="product">
                                <NavLink to="FruitsnVegetable">
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
                                <NavLink className="logo" to="/home">
                                    <img src={google} alt="Groci" />
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
                                        data-cfemail="1f767e72706c7e777e715f78727e7673317c7072"
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
                                        to="#"
                                        target="_blank"
                                        className="text-primary"
                                    >
                                        Ask Bootstrap
                                    </NavLink>
                                </small>
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-6 text-right">
                            <img alt="osahan logo" src={google} />
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
                        <img className="img-fluid" src={bb} alt="" />
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
                        <img className="img-fluid" src={ee} alt="" />
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
                        <img className="img-fluid" src={gg} alt="" />
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
                        <img className="img-fluid" src={aa} alt="" />
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
                        <img className="img-fluid" src={bb} alt="" />
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
