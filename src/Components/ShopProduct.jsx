import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const ShopProduct = () => {
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
}

export default ShopProduct