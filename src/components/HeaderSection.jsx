import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/images/logo.jpg";

export default function HeaderSection() {
  const [wishlist, setWishlist] = useState(0); // Corrected typo
  const [cart, setCart] = useState(0);

  return (
    <header>
      {/* Top Header */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="header-top-content-left">
              <h4>Express shipping free for orders over $999.</h4>
            </div>
            <div className="header-top-content-right">
              <ul>
                <li>
                  English <i className="fas fa-angle-down"></i>
                </li>
                <li>
                  USD <i className="fas fa-angle-down"></i>
                </li>
                <li>
                  Setting <i className="fas fa-angle-down"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-12">
              <div className="header-logo">
                <img src={logo} alt="sale24/7" />
              </div>
            </div>
            <div className="col-sm-6 col-12">
              <div className="header-search">
                <form className="header-search-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-border-right"
                      placeholder="Search for Products"
                    />
                    <select className="form-control">
                      <option value="">Select Category</option>
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion</option>
                      <option value="beauty">Beauty</option>
                    </select>
                    <button className="btn btn-primary">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-3 col-12">
              <div className="header-carts">
                <div className="header-login">
                  <i className="fa fa-user"></i>
                  <span>Sign In</span>
                </div>
                <div className="header-carts-info">
                  <Link to="/wishlist">
                    <i className="fa fa-heart"></i>
                    <span>{wishlist}</span>
                  </Link>
                  <Link to="/carts">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>{cart}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="header-bottom">
  <div className="container">
    <div className="header-bottom-content">
      <div className="header-bottom-nav-category">
        <h4>
          <i className="fa-solid fa-list"></i> All Categories
        </h4>
        <ul className="category-main-menu-list">
          <li>
            <Link to="#">Headphones <i className="fa fa-angle-right"></i></Link>
            <ul className="category-sub-menu-list">
              <li><Link to="#">Headphones 1 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Headphones 2 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Smart Watch 3 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Bluetooth 4 <i className="fa fa-angle-right"></i></Link></li>
            </ul>
          </li>
          <li>
            <Link to="#">Mobile <i className="fa fa-angle-right"></i></Link>
            <ul className="category-sub-menu-list">
              <li><Link to="#">Headphones 1 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Headphones 2 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Smart Watch 3 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Bluetooth 4 <i className="fa fa-angle-right"></i></Link></li>
            </ul>
          </li>
          <li>
            <Link to="#">Ipad <i className="fa fa-angle-right"></i></Link>
            <ul className="category-sub-menu-list">
              <li><Link to="#">Headphones 1 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Headphones 2 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Smart Watch 3 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Bluetooth 4 <i className="fa fa-angle-right"></i></Link></li>
            </ul>
          </li>
          <li>
            <Link to="#">SmartWatch <i className="fa fa-angle-right"></i></Link>
            <ul className="category-sub-menu-list">
              <li><Link to="#">Headphones 1 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Headphones 2 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Smart Watch 3 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Bluetooth 4 <i className="fa fa-angle-right"></i></Link></li>
            </ul>
          </li>
          <li>
            <Link to="#">Fan <i className="fa fa-angle-right"></i></Link>
            <ul className="category-sub-menu-list">
              <li><Link to="#">Headphones 1 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Headphones 2 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Smart Watch 3 <i className="fa fa-angle-right"></i></Link></li>
              <li><Link to="#">Bluetooth 4 <i className="fa fa-angle-right"></i></Link></li>
            </ul>
          </li>
        </ul>
      </div>
            <div className="header-bottom-nav-menu">
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/coupons">Coupons</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="header-bottom-hotline">
               <h5>
               <i className="fa fa-phone"></i>
               <span>Hotline: +977-9813629126</span>
               </h5>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
