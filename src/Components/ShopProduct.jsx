import React from 'react'
import { Link } from 'react-router-dom'

const ShopProduct = () => {
  return (
    <>
        {/* products */}
<div className="product-section mt-150 mb-150">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="product-filters">
          <ul>
            <li className="active" data-filter="*">All</li>
            <li data-filter=".strawberry">Strawberry</li>
            <li data-filter=".berry">Berry</li>
            <li data-filter=".lemon">Lemon</li>
            <li data-filter=".Mango">Mango</li>
            <li data-filter=".Papaya">Papaya</li>
            <li data-filter=".Raspberry">Raspberry</li>
            <li data-filter=".Pineapple">Pineapple</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row product-lists">
      <div className="col-lg-4 col-md-6 text-center strawberry">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/product-img-1.jpg" alt /></Link>
          </div>
          <h3>Strawberry</h3>
          <p className="product-price"><span>Per Kg</span> 85$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 text-center berry">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/product-img-2.jpg" alt /></Link>
          </div>
          <h3>Berry</h3>
          <p className="product-price"><span>Per Kg</span> 70$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 text-center lemon">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/product-img-3.jpg" alt /></Link>
          </div>
          <h3>Lemon</h3>
          <p className="product-price"><span>Per Kg</span> 35$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 text-center">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/product-img-4.jpg" alt /></Link>
          </div>
          <h3>Avocado</h3>
          <p className="product-price"><span>Per Kg</span> 50$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 text-center">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/product-img-5.jpg" alt /></Link>
          </div>
          <h3>Green Apple</h3>
          <p className="product-price"><span>Per Kg</span> 45$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 text-center strawberry">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/product-img-6.jpg" alt /></Link>
          </div>
          <h3>Strawberry</h3>
          <p className="product-price"><span>Per Kg</span> 80$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 text-center strawberry">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/Mango.jpg" alt /></Link>
          </div>
          <h3>Mango</h3>
          <p className="product-price"><span>Per Kg</span> 95$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 text-center strawberry">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/papaya.jpg" alt /></Link>
          </div>
          <h3>Papaya</h3>
          <p className="product-price"><span>Per Kg</span> 60$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 text-center strawberry">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/Raspberry.jpg" alt /></Link>
          </div>
          <h3>Raspberry</h3>
          <p className="product-price"><span>Per Kg</span> 100$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 text-center strawberry">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src="assets/img/products/pineapple.jpeg" alt /></Link>
          </div>
          <h3>Pineapple</h3>
          <p className="product-price"><span>Per Kg</span> 85$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 text-center">
        <div className="pagination-wrap">
          <ul>
            <li><a href="#">Prev</a></li>
            <li><a href="#">1</a></li>
            <li><a className="active" href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">Next</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* end products */}

    </>
  )
}

export default ShopProduct