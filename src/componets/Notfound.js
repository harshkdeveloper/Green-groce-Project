import React from "react";
import error from "./img/error.png";
export default function Notfound() {
  return (
    <div>
      <section class="not-found-page section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mx-auto text-center  pt-4 pb-5">
              <h1>
                <img class="img-fluid" src={error} alt="404" />
              </h1>
              <h1>Sorry! Page not found.</h1>
              <p class="land">
                Unfortunately the page you are looking for has been moved or
                deleted.
              </p>
              <div class="mt-5">
                <a href="index.html" class="btn btn-success btn-lg">
                  <i class="mdi mdi-home"></i> GO TO HOME PAGE
                </a>
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
                  <img src="img/logo-footer2.png" alt="Groci" />
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
                    data-cfemail="c4ada5a9abb7a5aca5aa84a3a9a5ada8eaa7aba9"
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
                  <img src="img/google.png" alt="" />
                </a>
                <a href="#">
                  <img src="img/apple.png" alt="" />
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
              <img alt="osahan logo" src="img/payment_methods.png" />
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
            <img class="img-fluid" src="img/item/11.jpg" alt="" />
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
            <img class="img-fluid" src="img/item/7.jpg" alt="" />
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
            <img class="img-fluid" src="img/item/9.jpg" alt="" />
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
          <div class="cart-list-product" />
          <a class="float-right remove-cart" href="#">
            <i class="mdi mdi-close"></i>
          </a>
          <img class="img-fluid" src="img/item/1.jpg" alt="" />
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
          <img class="img-fluid" src="img/item/2.jpg" alt="" />
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
  );
}
