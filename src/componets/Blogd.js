import React from "react";
import bloga from "./img/blog/bloga.png";
import blogb from "./img/blog/blogb.png";
import blogc from "./img/blog/blogc.png";
import aaa from "./img/user/aaa.jpg";
import bbb from "./img/user/bbb.jpg";
import ccc from "./img/user/ccc.jpg";
export default function Blogd() {
  return (
    <div>
      <section class="blog-page section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="card blog mb-4">
                <div class="blog-header">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src="img/blog/2.png"
                      alt="Card image cap"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="#">
                      Aliquam euismod libero eu enim. Nulla nec felis sed leo.
                    </a>
                  </h5>
                  <div class="entry-meta">
                    <ul class="tag-info list-inline">
                      <li class="list-inline-item">
                        <a href="#">
                          <i class="mdi mdi-calendar"></i> March 6, 2018
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-folder"></i>{" "}
                        <a rel="category tag" href="#">
                          Image
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-tag"></i>{" "}
                        <a rel="tag" href="#">
                          envato
                        </a>
                        ,{" "}
                        <a rel="tag" href="#">
                          sale
                        </a>
                        ,{" "}
                        <a rel="tag" href="#">
                          shop
                        </a>{" "}
                      </li>
                      <li class="list-inline-item">
                        <i class="mdi mdi-comment-account-outline"></i>{" "}
                        <a href="#">4 Comments</a>
                      </li>
                    </ul>
                  </div>
                  <p>
                    Aliquam convallis sollicitudin purus. Praesent aliquam, enim
                    at fermentum mollis, ligula massa adipiscing nisl, ac
                    euismod nibh nisl eu lectus. Fusce vulputate sem at sapien.
                    Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis
                    sed leo placerat imperdiet. Aenean suscipit nulla in justo.
                    Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt
                    mi.
                  </p>
                  <blockquote class="blockquote">
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer class="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                  <p>
                    Praesent aliquam, enim at fermentum mollis, ligula massa
                    adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce
                    vulputate sem at sapien. Vivamus leo. Aliquam euismod libero
                    eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean
                    suscipit nulla in justo.
                  </p>
                  <h5 class="mb-4">Lorem ipsum dolor sit amet, consectetur.</h5>
                  <div class="gallery mb-4">
                    <div class="row">
                      <div class="col-sm-4">
                        <img class="rounded" alt="" src={bloga} />
                      </div>
                      <div class="col-sm-4">
                        <img class="rounded" alt="" src={blogb} />
                      </div>
                      <div class="col-sm-4">
                        <img class="rounded" alt="" src={blogc} />
                      </div>
                    </div>
                  </div>
                  <p>
                    Praesent aliquam, enim at fermentum mollis, ligula massa
                    adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce
                    vulputate sem at sapien. Vivamus leo. Aliquam euismod libero
                    eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean
                    suscipit nulla in justo.
                  </p>
                  <h5 class="mb-2">Qui cumque numquam ?</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus a nobis, vero in corrupti nostrum. Magni
                    reprehenderit tempora tempore maiores, repellat in
                    laboriosam aliquid ex error, iusto quae, et similique.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis sunt a quam, exercitationem, provident numquam
                    quia eius optio quos vitae odio impedit ipsum voluptatem
                    earum neque architecto enim quisquam, ea.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non, ipsum facilis, eaque aliquid porro deleniti architecto
                    eum perferendis quidem modi quo reiciendis dolor deserunt
                    beatae repellat, nostrum aut fuga. Rem?
                  </p>
                  <div class="gallery mt-4 mb-4">
                    <div class="row">
                      <div class="col-sm-6">
                        <img alt="" class="rounded" src={blogb} />
                      </div>
                      <div class="col-sm-6">
                        <img alt="" class="rounded" src={blogc} />
                      </div>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Non, ipsum facilis, eaque aliquid porro deleniti architecto
                    eum perferendis quidem modi quo reiciendis dolor deserunt
                    beatae repellat, nostrum aut fuga. Rem?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis sunt a quam, exercitationem, provident numquam
                    quia eius optio quos vitae odio impedit ipsum voluptatem
                    earum neque architecto enim quisquam, ea.
                  </p>
                  <footer class="entry-footer">
                    <div class="blog-post-tags">
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <i class="mdi mdi-tag"></i> Tags:{" "}
                        </li>
                        <li class="list-inline-item">
                          <a rel="tag" href="#">
                            envato
                          </a>{" "}
                        </li>
                        <li class="list-inline-item">
                          <a rel="tag" href="#">
                            sale
                          </a>{" "}
                        </li>
                        <li class="list-inline-item">
                          <a rel="tag" href="#">
                            shop
                          </a>{" "}
                        </li>
                      </ul>
                    </div>
                  </footer>
                </div>
              </div>
              <div class="card padding-card reviews-card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-4">3 Reviews</h5>
                  <div class="media mb-4">
                    <img alt="" src={aaa} class="d-flex mr-3 rounded" />
                    <div class="media-body">
                      <h5 class="mt-0">
                        Stave Martin <small>Feb 12, 2018</small>
                        <span class="star-rating float-right">
                          <i class="mdi mdi-star text-warning"></i>
                          <i class="mdi mdi-star text-warning"></i>
                          <i class="mdi mdi-star text-warning"></i>
                          <i class="mdi mdi-star-half text-warning"></i>
                          <i class="mdi mdi-star-half text-warning"></i>
                          <small class="text-success">5/2</small>
                        </span>
                      </h5>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                  <div class="media">
                    <img alt="" src={bbb} class="d-flex mr-3 rounded" />
                    <div class="media-body">
                      <h5 class="mt-0">
                        Mark Smith <small>Feb 09, 2018</small>{" "}
                        <span class="star-rating float-right">
                          <i class="mdi mdi-star text-warning"></i>
                          <i class="mdi mdi-star-half text-warning"></i>
                          <i class="mdi mdi-star-half text-warning"></i>
                          <i class="mdi mdi-star-half text-warning"></i>
                          <i class="mdi mdi-star-half text-warning"></i>
                          <small class="text-success">5/1</small>
                        </span>
                      </h5>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </p>
                      <div class="media mt-4">
                        <img alt="" src={ccc} class="d-flex mr-3 rounded" />
                        <div class="media-body">
                          <h5 class="mt-0">
                            Ryan Printz <small>Nov 13, 2018</small>{" "}
                            <span class="star-rating float-right">
                              <i class="mdi mdi-star text-warning"></i>
                              <i class="mdi mdi-star text-warning"></i>
                              <i class="mdi mdi-star-half text-warning"></i>
                              <i class="mdi mdi-star-half text-warning"></i>
                              <i class="mdi mdi-star-half text-warning"></i>
                              <small class="text-success">5/5</small>
                            </span>
                          </h5>
                          <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin. Cras purus
                            odio, vestibulum in vulputate at, tempus viverra
                            turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="media mt-4">
                    <img alt="" src={ccc} class="d-flex mr-3 rounded" />
                    <div class="media-body">
                      <h5 class="mt-0">
                        Stave Mark <small>Feb 12, 2018</small>
                        <span class="star-rating float-right">
                          <i class="mdi mdi-star text-warning"></i>
                          <i class="mdi mdi-star text-warning"></i>
                          <i class="mdi mdi-star text-warning"></i>
                          <i class="mdi mdi-star-half text-warning"></i>
                          <i class="mdi mdi-star-half text-warning"></i>
                          <small class="text-success">5/2</small>
                        </span>
                      </h5>
                      <p class="mb-0">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card blog">
                <div class="card-body">
                  <h5 class="card-title mb-4">Leave a Comment</h5>
                  <form name="sentMessage">
                    <div class="row">
                      <div class="control-group form-group col-lg-6 col-md-6">
                        <div class="controls">
                          <label>
                            Your Name <span class="text-danger">*</span>
                          </label>
                          <input type="text" required="" class="form-control" />
                        </div>
                      </div>
                      <div class="control-group form-group col-lg-6 col-md-6">
                        <div class="controls">
                          <label>
                            Your Email <span class="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            required=""
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="control-group form-group">
                      <div class="controls">
                        <label>
                          Review <span class="text-danger">*</span>
                        </label>
                        <textarea
                          class="form-control"
                          cols="100"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                    <button class="btn btn-success" type="submit">
                      Post Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card sidebar-card mb-4">
                <div class="card-body">
                  <div class="input-group">
                    <input
                      type="text"
                      placeholder="Search For"
                      class="form-control"
                    />
                    <div class="input-group-append">
                      <button type="button" class="btn btn-secondary">
                        Search <i class="mdi mdi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card sidebar-card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-3">Categories</h5>
                  <ul class="sidebar-card-list">
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chevron-right"></i> Audio
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chevron-right"></i> Gallery
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chevron-right"></i> Image
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chevron-right"></i> Uncategorized
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chevron-right"></i> Video
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card sidebar-card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-3">Archives</h5>
                  <ul class="sidebar-card-list">
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chevron-right"></i> December, 2017
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chevron-right"></i> November, 2017
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chevron-right"></i> October, 2017
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card sidebar-card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-3">Tags</h5>
                  <div class="tagcloud">
                    <a class="tag-cloud-link" href="#">
                      coupon
                    </a>
                    <a class="tag-cloud-link" href="#">
                      deals
                    </a>
                    <a class="tag-cloud-link" href="#">
                      discount
                    </a>
                    <a class="tag-cloud-link" href="#">
                      envato
                    </a>
                    <a class="tag-cloud-link" href="#">
                      gallery
                    </a>
                    <a class="tag-cloud-link" href="#">
                      sale
                    </a>
                    <a class="tag-cloud-link" href="#">
                      shop
                    </a>
                    <a class="tag-cloud-link" href="#">
                      stores
                    </a>
                    <a class="tag-cloud-link" href="#">
                      video
                    </a>
                    <a class="tag-cloud-link" href="#">
                      vimeo
                    </a>
                    <a class="tag-cloud-link" href="#">
                      youtube
                    </a>
                  </div>
                </div>
              </div>
              <div class="card sidebar-card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-4">Popular Posts</h5>
                  <a href="#">
                    <h6>Possimus aut mollitia eum ipsum</h6>
                  </a>
                  <p class="mb-0">
                    <i class="mdi mdi-calendar-text"></i> April 05, 2018
                  </p>
                  <hr />
                  <a href="#">
                    <h6>
                      Nulla malesuada mauris non nulla imperdiet ullamcorper
                    </h6>
                  </a>
                  <p class="mb-0">
                    <i class="mdi mdi-calendar-text"></i> June 20, 2018
                  </p>
                  <hr />
                  <a href="#">
                    <h6 class="text-success">
                      Focus on creating and growing your projects and websites
                    </h6>
                  </a>
                  <p class="mb-0">
                    <i class="mdi mdi-calendar-text"></i> June 29, 2018
                  </p>
                  <hr />
                  <a href="#">
                    <h6>
                      Vestibulum lobortis urna eu mauris viverra porttitor. Cras
                      consequat{" "}
                    </h6>
                  </a>
                  <p class="mb-0">
                    <i class="mdi mdi-calendar-text"></i> October 10, 2018
                  </p>
                  <hr />
                  <a href="#">
                    <h6>Sed lacinia varius nisi et euismod.</h6>
                  </a>
                  <p class="mb-0">
                    <i class="mdi mdi-calendar-text"></i> April 05, 2018
                  </p>
                </div>
              </div>
              <div class="card sidebar-card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-4">Newsletter</h5>
                  <div class="input-group">
                    <input
                      type="text"
                      placeholder="Your email address"
                      class="form-control"
                    />
                    <div class="input-group-append">
                      <button type="button" class="btn btn-secondary">
                        Sign up <i class="mdi mdi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card sidebar-card mb-4">
                <div class="card-body">
                  <h5 class="card-title mb-3">Meta</h5>
                  <ul class="sidebar-card-list">
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chevron-right"></i> Log in
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chevron-right"></i> Entries RSS
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chevron-right"></i> Comments RSS
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-chevron-right"></i> WordPress.org
                      </a>
                    </li>
                  </ul>
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
                  <img src="img/logo-footer.png" alt="Groci" />
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
                    data-cfemail="e188808c8e928089808fa1868c80888dcf828e8c"
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
          <div class="cart-list-product">
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
    </div>
  );
}
