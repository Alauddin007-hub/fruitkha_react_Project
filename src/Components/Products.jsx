import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
        {/* product section */}
<div className="product-section mt-150 mb-150">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 text-center">
        <div className="section-title">	
          <h3><span className="orange-text">Our</span> Products</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6 text-center">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/product-img-1.jpg" alt /></Link>
          </div>
          <h3>Strawberry</h3>
          <p className="product-price"><span>Per Kg</span> 85$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 text-center">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/product-img-2.jpg" alt /></Link>
          </div>
          <h3>Berry</h3>
          <p className="product-price"><span>Per Kg</span> 70$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/product-img-3.jpg" alt /></Link>
          </div>
          <h3>Lemon</h3>
          <p className="product-price"><span>Per Kg</span> 35$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
    </div>
  </div>
</div>
{/* end product section */}

    </>
  )
}

export default Products