import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div>
  {/* header */}
  <div className="top-header-area" id="sticker">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-sm-12 text-center">
          <div className="main-menu-wrap">
            {/* logo */}
            <div className="site-logo">
              <a href="index.html">
                <img src="assets/img/logo.png" alt />
              </a>
            </div>
            {/* logo */}
            {/* menu start */}
            <nav className="main-menu">
              <ul>
                <li className="current-list-item"><NavLink to="/">Home</NavLink>
                  {/* <ul className="sub-menu">
                    <li><a href="index.html">Static Home</a></li>
                    <li><a href="index_2.html">Slider Home</a></li>
                  </ul> */}
                </li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li><NavLink to="/error">404 page</NavLink></li>
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/check-out">Check Out</NavLink></li>
                    <li><NavLink to="/single-product">Single Product</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                  </ul>
                </li>
                <li><a href="news.html">News</a>
                  <ul className="sub-menu">
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/single-news">Single News</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink>
                  <ul className="sub-menu">
                    <li><NavLink to="/shop">Shop</NavLink></li>
                    <li><NavLink to="/check-out">Check Out</NavLink></li>
                    <li><NavLink to="/single-product">Single Product</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                  </ul>
                </li>
                <li>
                  <div className="header-icons">
                    <NavLink className="shopping-cart" to="/cart"><i className="fas fa-shopping-cart" /></NavLink>
                    <a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search" /></a>
                  </div>
                </li>
              </ul>
            </nav>
            <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search" /></a>
            <div className="mobile-menu" />
            {/* menu end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end header */}
  {/* search area */}
  <div className="search-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="close-btn"><i className="fas fa-window-close" /></span>
          <div className="search-bar">
            <div className="search-bar-tablecell">
              <h3>Search For:</h3>
              <input type="text" placeholder="Keywords" />
              <button type="submit">Search <i className="fas fa-search" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end search area */}
</div>

    </>
  )
}

export default Header