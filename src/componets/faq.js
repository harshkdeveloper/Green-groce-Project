import React from "react";
import google from "./img/google.png";
import apple from "./img/apple.png";
export default function faq() {
  return (
    <div>
      <section className="faq-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="card card-body">
                    <div className="accordion" id="accordionExample">
                      <div className="card mb-0">
                        <div className="card-header" id="headingOne">
                          <h6 className="mb-0">
                            <a
                              href="#"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <i className="icofont icofont-question-square"></i>{" "}
                              Where can I get access to Capital IQ?
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil helvetica, craf.
                          </div>
                        </div>
                      </div>
                      <div className="card mb-2 mt-2">
                        <div className="card-header" id="headingTwo">
                          <h6 className="mb-0">
                            <a
                              href="#"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="true"
                              aria-controls="collapseTwo"
                            >
                              <i className="icofont icofont-question-square"></i>{" "}
                              How do I get access to case studies?
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil helvetica, craf.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h6 className="mb-0">
                            <a
                              href="#"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="true"
                              aria-controls="collapseThree"
                            >
                              <i className="icofont icofont-question-square"></i>{" "}
                              How much should I capitalize?
                            </a>
                          </h6>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil helvetica, craf.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="card card-body">
                    <div className="section-header">
                      <h5 className="heading-design-h5">Ask us question</h5>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label className="control-label">
                              Your Name <span className="required">*</span>
                            </label>
                            <input
                              className="form-control border-form-control"
                              value=""
                              placeholder="Enter Name"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="control-label">
                              Email Address <span className="required">*</span>
                            </label>
                            <input
                              className="form-control border-form-control "
                              value=""
                              placeholder="ex@gmail.com"
                              type="email"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="control-label">
                              Phone <span className="required">*</span>
                            </label>
                            <input
                              className="form-control border-form-control"
                              value=""
                              placeholder="Enter Phone"
                              type="number"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label className="control-label">
                              Your Message <span className="required">*</span>
                            </label>
                            <textarea className="form-control border-form-control"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 text-right">
                          <button
                            type="button"
                            className="btn btn-danger btn-lg"
                          >
                            {" "}
                            Cencel{" "}
                          </button>
                          <button
                            type="button"
                            className="btn btn-success btn-lg"
                          >
                            {" "}
                            Send Message{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
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
                <a className="logo" href="index.html">
                  <img src="img/logo-footer2.png" alt="Groci" />
                </a>
              </h4>
              <p className="mb-0">
                <a className="text-dark" href="#">
                  <i className="mdi mdi-phone"></i> +61 525 240 310
                </a>
              </p>
              <p className="mb-0">
                <a className="text-dark" href="#">
                  <i className="mdi mdi-cellphone-iphone"></i> 12345 67890,
                  56847-98562
                </a>
              </p>
              <p className="mb-0">
                <a className="text-success" href="#">
                  <i className="mdi mdi-email"></i>{" "}
                  <span
                    className="__cf_email__"
                    data-cfemail="b4ddd5d9dbc7d5dcd5daf4d3d9d5ddd89ad7dbd9"
                  >
                    [email&#160;protected]
                  </span>
                </a>
              </p>
              <p className="mb-0">
                <a className="text-primary" href="#">
                  <i className="mdi mdi-web"></i> www.askbootstrap.com
                </a>
              </p>
            </div>
            <div className="col-lg-2 col-md-2">
              <h6 className="mb-4">TOP CITIES </h6>
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
            <div className="col-lg-2 col-md-2">
              <h6 className="mb-4">CATEGORIES</h6>
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
            <div className="col-lg-2 col-md-2">
              <h6 className="mb-4">ABOUT US</h6>
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
            <div className="col-lg-3 col-md-3">
              <h6 className="mb-4">Download App</h6>
              <div className="app">
                <a href="#">
                  <img src={google} alt="" />
                </a>
                <a href="#">
                  <img src={apple} alt="" />
                </a>
              </div>
              <h6 className="mb-3 mt-4">GET IN TOUCH</h6>
              <div className="footer-social">
                <a className="btn-facebook" href="#">
                  <i className="mdi mdi-facebook"></i>
                </a>
                <a className="btn-twitter" href="#">
                  <i className="mdi mdi-twitter"></i>
                </a>
                <a className="btn-instagram" href="#">
                  <i className="mdi mdi-instagram"></i>
                </a>
                <a className="btn-whatsapp" href="#">
                  <i className="mdi mdi-whatsapp"></i>
                </a>
                <a className="btn-messenger" href="#">
                  <i className="mdi mdi-facebook-messenger"></i>
                </a>
                <a className="btn-google" href="#">
                  <i className="mdi mdi-google"></i>
                </a>
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
                <strong className="text-dark">Groci</strong>. All Rights
                Reserved
                <br />
                <small className="mt-0 mb-0">
                  Made with <i className="mdi mdi-heart text-danger"></i> by{" "}
                  <a
                    href="https://askbootstrap.com/"
                    target="_blank"
                    className="text-primary"
                  >
                    Ask Bootstrap
                  </a>
                </small>
              </p>
            </div>
            <div className="col-lg-6 col-sm-6 text-right">
              <img alt="osahan logo" src="img/payment_methods.png" />
            </div>
          </div>
        </div>
      </section>

      <div className="cart-sidebar">
        <div className="cart-sidebar-header">
          <h5>
            My Cart <span className="text-success">(5 item)</span>{" "}
            <a data-toggle="offcanvas" className="float-right" href="#">
              <i className="mdi mdi-close"></i>
            </a>
          </h5>
        </div>
        <div className="cart-sidebar-body">
          <div className="cart-list-product">
            <a className="float-right remove-cart" href="#">
              <i className="mdi mdi-close"></i>
            </a>
            <img className="img-fluid" src="img/item/11.jpg" alt="" />
            <span className="badge badge-success">50% OFF</span>
            <h5>
              <a href="#">Product Title Here</a>
            </h5>
            <h6>
              <strong>
                <span className="mdi mdi-approval"></span> Available in
              </strong>{" "}
              - 500 gm
            </h6>
            <p className="offer-price mb-0">
              $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
              <span className="regular-price">$800.99</span>
            </p>
          </div>
          <div className="cart-list-product">
            <a className="float-right remove-cart" href="#">
              <i className="mdi mdi-close"></i>
            </a>
            <img className="img-fluid" src="img/item/7.jpg" alt="" />
            <span className="badge badge-success">50% OFF</span>
            <h5>
              <a href="#">Product Title Here</a>
            </h5>
            <h6>
              <strong>
                <span className="mdi mdi-approval"></span> Available in
              </strong>{" "}
              - 500 gm
            </h6>
            <p className="offer-price mb-0">
              $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
              <span className="regular-price">$800.99</span>
            </p>
          </div>
          <div className="cart-list-product">
            <a className="float-right remove-cart" href="#">
              <i className="mdi mdi-close"></i>
            </a>
            <img className="img-fluid" src="img/item/9.jpg" alt="" />
            <span className="badge badge-success">50% OFF</span>
            <h5>
              <a href="#">Product Title Here</a>
            </h5>
            <h6>
              <strong>
                <span className="mdi mdi-approval"></span> Available in
              </strong>{" "}
              - 500 gm
            </h6>
            <p className="offer-price mb-0">
              $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
              <span className="regular-price">$800.99</span>
            </p>
          </div>
          <div className="cart-list-product">
            <a className="float-right remove-cart" href="#">
              <i className="mdi mdi-close"></i>
            </a>
            <img className="img-fluid" src="img/item/1.jpg" alt="" />
            <span className="badge badge-success">50% OFF</span>
            <h5>
              <a href="#">Product Title Here</a>
            </h5>
            <h6>
              <strong>
                <span className="mdi mdi-approval"></span> Available in
              </strong>{" "}
              - 500 gm
            </h6>
            <p className="offer-price mb-0">
              $450.99 <i className="mdi mdi-tag-outline"></i>{" "}
              <span className="regular-price">$800.99</span>
            </p>
          </div>
          <div className="cart-list-product">
            <a className="float-right remove-cart" href="#">
              <i className="mdi mdi-close"></i>
            </a>
            <img className="img-fluid" src="img/item/2.jpg" alt="" />
            <span className="badge badge-success">50% OFF</span>
            <h5>
              <a href="#">Product Title Here</a>
            </h5>
            <h6>
              <strong>
                <span className="mdi mdi-approval"></span> Available in
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
              Sub Total <strong className="float-right">$900.69</strong>
            </p>
            <p>
              Delivery Charges{" "}
              <strong className="float-right text-danger">+ $29.69</strong>
            </p>
            <h6>
              Your total savings{" "}
              <strong className="float-right text-danger">$55 (42.31%)</strong>
            </h6>
          </div>
          <a href="checkout.html">
            <button
              className="btn btn-secondary btn-lg btn-block text-left"
              type="button"
            >
              <span className="float-left">
                <i className="mdi mdi-cart-outline"></i> Proceed to Checkout{" "}
              </span>
              <span className="float-right">
                <strong>$1200.69</strong>{" "}
                <span className="mdi mdi-chevron-right"></span>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
