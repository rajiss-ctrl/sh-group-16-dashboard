import React from 'react'
import {useState, useEffect } from 'react';
import Button from '../components/button/Button'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
// import Drean from '../assets/productImg/dreamcar 1.png'
// import Cardiac from '../assets/productImg/cardiallac 1.png'
// import Cardiac from '../assets/productImg/cardiallac 1.png'
// import Cardiac from '../assets/productImg/cardiallac 1.png'
import './css/Product.css'

const Products = () => {
  const [product, setProduct] = useState([])


useEffect(() => {

  const fetchData = async () => {
    const response = await fetch(`https://fakerapi.it/api/v1/products?_quantity=10`);
    const productData = await response.json();
    console.log(productData.data)
     setProduct(productData.data)
  };

  fetchData();
}, [])
  return (
    <div className='product-container'>
    <Sidebar/>

     <main>
        <div className="separator">
              <Navbar props="Search Team Products"/>
              <Button props="Add Products"/>
        </div>

        <div className="product-info">
          <div className="title">
          <h5> Products</h5>
          </div>

          <div className="products">
           <p>Click on <strong>View</strong> to edit product details  </p>

           <div key={product.id} className="product-cards-container">
            {product.map((product)=>{
              return (
             <div key={product.id} className="card">
               <img src={product.image} alt="cardiac car" />
               <div className="card-info">
                 <div className='name-tax'>
                    <h4>{product.name}</h4>
                    <span>Tax: {product.taxes}%</span>
                 </div>
                 <p>{product.net_price}</p>
                 <button>View</button>
               </div>
             </div>
              )
            })}
            </div>
          </div> 
        
        </div>
      </main>

    </div>
  )
}

export default Products