import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Products = () => {
  useEffect(() => {
    allPackage();
}, []);

const [ispackage, setPackage] = useState([]);

const allPackage = async () => {
    axios.get(`http://localhost/react_project/fruitka_react_project/api/product.php`).then(result => {
        console.log(result.data.packagelist)
        setPackage(result.data.packagelist);
    })
}

if (ispackage) {
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

      {
        ispackage.map(item=>(
          <div className="col-lg-4 col-md-6 text-center">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/single-product"><img src={"assets/img/products/"+ item.product_image} alt /></Link>
          </div>
          <h3>{item.product_title}</h3>
          <p className="product-price"><span>Per Kg</span> {item.product_price}$ </p>
          <Link to="/cart" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</Link>
        </div>
      </div>
        ))
      }
      
    </div>
  </div>
</div>
{/* end product section */}

    </>
  )
}}

export default Products