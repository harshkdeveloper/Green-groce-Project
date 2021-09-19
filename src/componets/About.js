import React from "react";
import about from "./img/about.jpg";
import aaa from "./img/user/aaa.jpg";
import bbb from "./img/user/bbb.jpg";
import ccc from "./img/user/ccc.jpg";
import google from "./img/google.png";
import paymentmethods from "./img/paymentmethods.png";
import aa from "./img/item/aa.jpg";
import bb from "./img/item/bb.jpg";
import gg from "./img/item/gg.jpg";
import ff from "./img/item/ff.jpg";
import ll from "./img/item/ll.jpg";
import logofooter2 from "./img/logofooter2.png";
export default function About() {
  return (
    <div>
      <section className="pt-3 pb-3 page-info section-padding border-bottom bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <a href="#">
                <strong>
                  <span className="mdi mdi-home"></span> Home
                </strong>
              </a>{" "}
              <span className="mdi mdi-chevron-right"></span>{" "}
              <a href="#">Aboutus</a>
              <span className="text-success">About Us</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="container">
          <div class="row">
            <div class="pl-4 col-lg-5 col-md-5 pr-4">
              <img class="rounded img-fluid" src={about} alt="Card image cap" />
            </div>
            <div class="col-lg-6 col-md-6 pl-5 pr-5">
              <h2 class="mt-5 mb-5 text-secondary">
                Save more with GO! We give you the lowest prices on all your
                grocery needs.
              </h2>
              <h5 class="mt-2">Our Vision</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here,
              </p>
              <h5 class="mt-4">Our Goal</h5>
              <p>
                When looking at its layout. The point of using Lorem Ipsum is
                that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, Lorem Ipsum has been the
                industry's standard dummy text ever since.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding">
        <div class="section-title text-center mb-5">
          <h2>What We Provide?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="mt-4 mb-4">
                <i class="text-success mdi mdi-shopping mdi-48px"></i>
              </div>
              <h5 class="mt-3 mb-3 text-secondary">Best Prices & Offers</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="mt-4 mb-4">
                <i class="text-success mdi mdi-earth mdi-48px"></i>
              </div>
              <h5 class="mb-3 text-secondary">Wide Assortment</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text eve.
              </p>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="mt-4 mb-4">
                <i class="text-success mdi mdi-refresh mdi-48px"></i>
              </div>
              <h5 class="mt-3 mb-3 text-secondary">Easy Returns</h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="mt-4 mb-4">
                <i class="text-success mdi mdi-truck-fast mdi-48px"></i>
              </div>
              <h5 class="mb-3 text-secondary">Free & Next Day Delivery</h5>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="mt-4 mb-4">
                <i class="text-success mdi mdi-basket mdi-48px"></i>
              </div>
              <h5 class="mt-3 mb-3 text-secondary">
                100% Satisfaction Guarantee
              </h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="mt-4 mb-4">
                <i class="text-success mdi mdi mdi-tag-heart mdi-48px"></i>
              </div>
              <h5 class="mt-3 mb-3 text-secondary">
                Great Daily Deals Discount
              </h5>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding bg-white">
        <div class="section-title text-center mb-5">
          <h2>Our Team</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <div class="team-card text-center">
                <img class="img-fluid mb-4" src={aaa} alt="" />
                <p class="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </p>
                <h6 class="mb-0 text-success">- Stave Martin</h6>
                <small>Manager</small>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="team-card text-center">
                <img class="img-fluid mb-4" src={bbb} alt="" />
                <p class="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </p>
                <h6 class="mb-0 text-success">- Mark Smith</h6>
                <small>Designer</small>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="team-card text-center">
                <img class="img-fluid mb-4" src={ccc} alt="" />
                <p class="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </p>
                <h6 class="mb-0 text-success">- Ryan Printz</h6>
                <small>Marketing</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-padding footer bg-white border-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3">
              <h4 class="mb-5 mt-0">
                <a class="logo" href="index.html">
                  <img src={logofooter2} alt="Groci" />
                </a>
              </h4>
              <p class="mb-0">
                <a class="text-dark" href="#">
                  <i class="mdi mdi-phone"></i> +61 525 240 310
                </a>
              </p>
              <p class="mb-0">
                <a class="text-dark" href="#">
                  <i class="mdi mdi-cellphone-iphone"></i> 12345 67890,
                  56847-98562
                </a>
              </p>
              <p class="mb-0">
                <a class="text-success" href="#">
                  <i class="mdi mdi-email"></i>{" "}
                  <span
                    class="__cf_email__"
                    data-cfemail="147d75797b67757c757a547379757d783a777b79"
                  >
                    [email&#160;protected]
                  </span>
                </a>
              </p>
              <p class="mb-0">
                <a class="text-primary" href="#">
                  <i class="mdi mdi-web"></i> www.askbootstrap.com
                </a>
              </p>
            </div>
            <div class="col-lg-2 col-md-2">
              <h6 class="mb-4">TOP CITIES </h6>
              <ul>
                <li>
                  <a href="#">New Delhi</a>
                </li>
                <li>
                  <a href="#">Bengaluru</a>
                </li>
                <li>
                  <a href="#">Hyderabad</a>
                </li>
                <li>
                  <a href="#">Kolkata</a>
                </li>
                <li>
                  <a href="#">Gurugram</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-2">
              <h6 class="mb-4">CATEGORIES</h6>
              <ul>
                <li>
                  <a href="#">Vegetables</a>
                </li>
                <li>
                  <a href="#">Grocery & Staples</a>
                </li>
                <li>
                  <a href="#">Breakfast & Dairy</a>
                </li>
                <li>
                  <a href="#">Soft Drinks</a>
                </li>
                <li>
                  <a href="#">Biscuits & Cookies</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-2">
              <h6 class="mb-4">ABOUT US</h6>
              <ul>
                <li>
                  <a href="#">Company Information</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Store Location</a>
                </li>
                <li>
                  <a href="#">Affillate Program</a>
                </li>
                <li>
                  <a href="#">Copyright</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3">
              <h6 class="mb-4">Download App</h6>
              <div class="app">
                <a href="#">
                  <img src={google} alt="" />
                </a>
                <a href="#">
                  <img src={google} alt="" />
                </a>
              </div>
              <h6 class="mb-3 mt-4">GET IN TOUCH</h6>
              <div class="footer-social">
                <a class="btn-facebook" href="#">
                  <i class="mdi mdi-facebook"></i>
                </a>
                <a class="btn-twitter" href="#">
                  <i class="mdi mdi-twitter"></i>
                </a>
                <a class="btn-instagram" href="#">
                  <i class="mdi mdi-instagram"></i>
                </a>
                <a class="btn-whatsapp" href="#">
                  <i class="mdi mdi-whatsapp"></i>
                </a>
                <a class="btn-messenger" href="#">
                  <i class="mdi mdi-facebook-messenger"></i>
                </a>
                <a class="btn-google" href="#">
                  <i class="mdi mdi-google"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-4 pb-4 footer-bottom">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-lg-6 col-sm-6">
              <p class="mt-1 mb-0">
                &copy; Copyright 2020 <strong class="text-dark">Groci</strong>.
                All Rights Reserved
                <br />
                <small class="mt-0 mb-0">
                  Made with <i class="mdi mdi-heart text-danger"></i> by{" "}
                  <a
                    href="https://askbootstrap.com/"
                    target="_blank"
                    class="text-primary"
                  >
                    Ask Bootstrap
                  </a>
                </small>
              </p>
            </div>
            <div class="col-lg-6 col-sm-6 text-right">
              <img alt="osahan logo" src={paymentmethods} />
            </div>
          </div>
        </div>
      </section>

      <div class="cart-sidebar">
        <div class="cart-sidebar-header">
          <h5>
            My Cart <span class="text-success">(5 item)</span>{" "}
            <a data-toggle="offcanvas" class="float-right" href="#">
              <i class="mdi mdi-close"></i>
            </a>
          </h5>
        </div>
        <div class="cart-sidebar-body">
          <div class="cart-list-product">
            <a class="float-right remove-cart" href="#">
              <i class="mdi mdi-close"></i>
            </a>
            <img class="img-fluid" src={ll} alt="" />
            <span class="badge badge-success">50% OFF</span>
            <h5>
              <a href="#">Product Title Here</a>
            </h5>
            <h6>
              <strong>
                <span class="mdi mdi-approval"></span> Available in
              </strong>{" "}
              - 500 gm
            </h6>
            <p class="offer-price mb-0">
              $450.99 <i class="mdi mdi-tag-outline"></i>{" "}
              <span class="regular-price">$800.99</span>
            </p>
          </div>
          <div class="cart-list-product">
            <a class="float-right remove-cart" href="#">
              <i class="mdi mdi-close"></i>
            </a>
            <img class="img-fluid" src={ff} alt="" />
            <span class="badge badge-success">50% OFF</span>
            <h5>
              <a href="#">Product Title Here</a>
            </h5>
            <h6>
              <strong>
                <span class="mdi mdi-approval"></span> Available in
              </strong>{" "}
              - 500 gm
            </h6>
            <p class="offer-price mb-0">
              $450.99 <i class="mdi mdi-tag-outline"></i>{" "}
              <span class="regular-price">$800.99</span>
            </p>
          </div>
          <div class="cart-list-product">
            <a class="float-right remove-cart" href="#">
              <i class="mdi mdi-close"></i>
            </a>
            <img class="img-fluid" src={gg} alt="" />
            <span class="badge badge-success">50% OFF</span>
            <h5>
              <a href="#">Product Title Here</a>
            </h5>
            <h6>
              <strong>
                <span class="mdi mdi-approval"></span> Available in
              </strong>{" "}
              - 500 gm
            </h6>
            <p class="offer-price mb-0">
              $450.99 <i class="mdi mdi-tag-outline"></i>{" "}
              <span class="regular-price">$800.99</span>
            </p>
          </div>
          <div class="cart-list-product">
            <a class="float-right remove-cart" href="#">
              <i class="mdi mdi-close"></i>
            </a>
            <img class="img-fluid" src={aa} alt="" />
            <span class="badge badge-success">50% OFF</span>
            <h5>
              <a href="#">Product Title Here</a>
            </h5>
            <h6>
              <strong>
                <span class="mdi mdi-approval"></span> Available in
              </strong>{" "}
              - 500 gm
            </h6>
            <p class="offer-price mb-0">
              $450.99 <i class="mdi mdi-tag-outline"></i>{" "}
              <span class="regular-price">$800.99</span>
            </p>
          </div>
          <div class="cart-list-product">
            <a class="float-right remove-cart" href="#">
              <i class="mdi mdi-close"></i>
            </a>
            <img class="img-fluid" src={bb} alt="" />
            <span class="badge badge-success">50% OFF</span>
            <h5>
              <a href="#">Product Title Here</a>
            </h5>
            <h6>
              <strong>
                <span class="mdi mdi-approval"></span> Available in
              </strong>{" "}
              - 500 gm
            </h6>
            <p class="offer-price mb-0">
              $450.99 <i class="mdi mdi-tag-outline"></i>{" "}
              <span class="regular-price">$800.99</span>
            </p>
          </div>
        </div>
        <div class="cart-sidebar-footer">
          <div class="cart-store-details">
            <p>
              Sub Total <strong class="float-right">$900.69</strong>
            </p>
            <p>
              Delivery Charges{" "}
              <strong class="float-right text-danger">+ $29.69</strong>
            </p>
            <h6>
              Your total savings{" "}
              <strong class="float-right text-danger">$55 (42.31%)</strong>
            </h6>
          </div>
          <a href="checkout.html">
            <button
              class="btn btn-secondary btn-lg btn-block text-left"
              type="button"
            >
              <span class="float-left">
                <i class="mdi mdi-cart-outline"></i> Proceed to Checkout{" "}
              </span>
              <span class="float-right">
                <strong>$1200.69</strong>{" "}
                <span class="mdi mdi-chevron-right"></span>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
