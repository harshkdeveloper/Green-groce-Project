import React from "react";
import ll from "./img/item/ll.jpg";
import jj from "./img/item/jj.jpg";
import kk from "./img/item/kk.jpg";
import aa from "./img/item/aa.jpg";
import ii from "./img/item/ii.jpg";
import cc from "./img/item/cc.jpg";
import bb from "./img/item/bb.jpg";
import ee from "./img/item/ee.jpg";
import gg from "./img/item/gg.jpg";
import ff from "./img/item/ff.jpg";
import dd from "./img/item/dd.jpg";
import hh from "./img/item/dd.jpg";

import google from "./img/google.png";
import paymentmethods from "./img/paymentmethods.png";
import apple from "./img/apple.png";
import logofooter2 from "./img/logofooter2.png";
export default function cart() {
  return (
    <div>
      <section class="pt-3 pb-3 page-info section-padding border-bottom bg-white">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <a href="#">
                <strong>
                  <span class="mdi mdi-home"></span> Home
                </strong>
              </a>{" "}
              <span class="mdi mdi-chevron-right"></span> <a href="#">Cart</a>
            </div>
          </div>
        </div>
      </section>
      <section class="cart-page section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card card-body cart-table">
                <div class="table-responsive">
                  <table class="table cart_summary">
                    <thead>
                      <tr>
                        <th class="cart_product">Product</th>
                        <th>Description</th>
                        <th>Avail.</th>
                        <th>Unit price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th class="action">
                          <i class="mdi mdi-delete-forever"></i>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="cart_product">
                          <a href="#">
                            <img class="img-fluid" src={ff} alt="" />
                          </a>
                        </td>
                        <td class="cart_description">
                          <h5 class="product-name">
                            <a href="#">Ipsums Dolors Untra </a>
                          </h5>
                          <h6>
                            <strong>
                              <span class="mdi mdi-approval"></span> Available
                              in
                            </strong>{" "}
                            - 500 gm
                          </h6>
                        </td>
                        <td class="availability in-stock">
                          <span class="badge badge-success">In stock</span>
                        </td>
                        <td class="price">
                          <span>$49.88</span>
                        </td>
                        <td class="qty">
                          <div class="input-group">
                            <span class="input-group-btn">
                              <button
                                disabled="disabled"
                                class="btn btn-theme-round btn-number"
                                type="button"
                              >
                                -
                              </button>
                            </span>
                            <input
                              type="text"
                              max="10"
                              min="1"
                              value="1"
                              class="form-control border-form-control form-control-sm input-number"
                              name="quant[1]"
                            />
                            <span class="input-group-btn">
                              <button
                                class="btn btn-theme-round btn-number"
                                type="button"
                              >
                                +
                              </button>
                            </span>
                          </div>
                        </td>
                        <td class="price">
                          <span>$49.88</span>
                        </td>
                        <td class="action">
                          <a
                            class="btn btn-sm btn-danger"
                            data-original-title="Remove"
                            href="#"
                            title=""
                            data-placement="top"
                            data-toggle="tooltip"
                          >
                            <i class="mdi mdi-close-circle-outline"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="cart_product">
                          <a href="#">
                            <img alt="Product" src={ee} class="img-fluid" />
                          </a>
                        </td>
                        <td class="cart_description">
                          <h5 class="product-name">
                            <a href="#">Ipsums Dolors Untra </a>
                          </h5>
                          <h6>
                            <strong>
                              <span class="mdi mdi-approval"></span> Available
                              in
                            </strong>{" "}
                            - 500 gm
                          </h6>
                        </td>
                        <td class="availability out-of-stock">
                          <span class="badge badge-primary">No stock</span>
                        </td>
                        <td class="price">
                          <span>$00.00</span>
                        </td>
                        <td class="qty">
                          <div class="input-group">
                            <span class="input-group-btn">
                              <button
                                disabled="disabled"
                                class="btn btn-theme-round btn-number"
                                type="button"
                              >
                                -
                              </button>
                            </span>
                            <input
                              type="text"
                              max="10"
                              min="1"
                              value="1"
                              class="form-control border-form-control form-control-sm input-number"
                              name="quant[1]"
                            />
                            <span class="input-group-btn">
                              <button
                                class="btn btn-theme-round btn-number"
                                type="button"
                              >
                                +
                              </button>
                            </span>
                          </div>
                        </td>
                        <td class="price">
                          <span>00.00</span>
                        </td>
                        <td class="action">
                          <a
                            class="btn btn-sm btn-danger"
                            data-original-title="Remove"
                            href="#"
                            title=""
                            data-placement="top"
                            data-toggle="tooltip"
                          >
                            <i class="mdi mdi-close-circle-outline"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="cart_product">
                          <a href="#">
                            <img alt="Product" src={ff} class="img-fluid" />
                          </a>
                        </td>
                        <td class="cart_description">
                          <h5 class="product-name">
                            <a href="#">Ipsums Dolors Untra </a>
                          </h5>
                          <h6>
                            <strong>
                              <span class="mdi mdi-approval"></span> Available
                              in
                            </strong>{" "}
                            - 500 gm
                          </h6>
                        </td>
                        <td class="availability in-stock">
                          <span class="badge badge-warning">In stock</span>
                        </td>
                        <td class="price">
                          <span>$99.00</span>
                        </td>
                        <td class="qty">
                          <div class="input-group">
                            <span class="input-group-btn">
                              <button
                                disabled="disabled"
                                class="btn btn-theme-round btn-number"
                                type="button"
                              >
                                -
                              </button>
                            </span>
                            <input
                              type="text"
                              max="10"
                              min="1"
                              value="1"
                              class="form-control border-form-control form-control-sm input-number"
                              name="quant[1]"
                            />
                            <span class="input-group-btn">
                              <button
                                class="btn btn-theme-round btn-number"
                                type="button"
                              >
                                +
                              </button>
                            </span>
                          </div>
                        </td>
                        <td class="price">
                          <span>$188.00</span>
                        </td>
                        <td class="action">
                          <a
                            class="btn btn-sm btn-danger"
                            data-original-title="Remove"
                            href="#"
                            title=""
                            data-placement="top"
                            data-toggle="tooltip"
                          >
                            <i class="mdi mdi-close-circle-outline"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colspan="1"></td>
                        <td colspan="4">
                          <form class="form-inline float-right">
                            <div class="form-group">
                              <input
                                type="text"
                                placeholder="Enter discount code"
                                class="form-control border-form-control form-control-sm"
                              />
                            </div>
                            &nbsp;
                            <button
                              class="btn btn-success float-left btn-sm"
                              type="submit"
                            >
                              Apply
                            </button>
                          </form>
                        </td>
                        <td colspan="2">Discount : $237.88 </td>
                      </tr>
                      <tr>
                        <td colspan="2"></td>
                        <td class="text-right" colspan="3">
                          Total products (tax incl.)
                        </td>
                        <td colspan="2">$437.88 </td>
                      </tr>
                      <tr>
                        <td class="text-right" colspan="5">
                          <strong>Total</strong>
                        </td>
                        <td class="text-danger" colspan="2">
                          <strong>$337.88 </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
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
              <div class="card mt-2">
                <h5 class="card-header">
                  My Cart (Design Two)
                  <span class="text-secondary float-right">(5 item)</span>
                </h5>
                <div class="card-body pt-0 pr-0 pl-0 pb-0">
                  <div class="cart-list-product">
                    <a class="float-right remove-cart" href="#">
                      <i class="mdi mdi-close"></i>
                    </a>
                    <img class="img-fluid" src={kk} alt="" />
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
                    <img class="img-fluid" src={dd} alt="" />
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
                <div class="card-footer cart-sidebar-footer">
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
                      <strong class="float-right text-danger">
                        $55 (42.31%)
                      </strong>
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
          </div>
        </div>
      </section>
      <section class="section-padding bg-white border-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="feature-box">
                <i class="mdi mdi-truck-fast"></i>
                <h6>Free & Next Day Delivery</h6>
                <p>Lorem ipsum dolor sit amet, cons...</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="feature-box">
                <i class="mdi mdi-basket"></i>
                <h6>100% Satisfaction Guarantee</h6>
                <p>Rorem Ipsum Dolor sit amet, cons...</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="feature-box">
                <i class="mdi mdi-tag-heart"></i>
                <h6>Great Daily Deals Discount</h6>
                <p>Sorem Ipsum Dolor sit amet, Cons...</p>
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
                    data-cfemail="5138303c3e223039303f11363c30383d7f323e3c"
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
                  <img src={apple} alt="" />
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
            <img class="img-fluid" src={hh} alt="" />
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
