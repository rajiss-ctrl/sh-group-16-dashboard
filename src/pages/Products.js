import React from 'react'
import {useState, useEffect } from 'react';
import Button from '../components/button/Button'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Cardiac from '../assets/productImg/cardiallac 1.png'
// import Drean from '../assets/productImg/dreamcar 1.png'
// import Cardiac from '../assets/productImg/cardiallac 1.png'
// import Cardiac from '../assets/productImg/cardiallac 1.png'
// import Cardiac from '../assets/productImg/cardiallac 1.png'
import './css/Product.css'

const Products = () => {
  const [product, setProduct] = useState([])


useEffect(() => {

  const fetchData = async () => {
    const response = await fetch(`https://fakerapi.it/api/v1/products?_quantity=1`);
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
              <Navbar/>
              <Button props="Add Members"/>
        </div>

        <div className="product-info">
          <div className="title">
          <h5> Products</h5>
          </div>

          <div className="products">
           <p>Click on <strong>View</strong> to edit product details  </p>

            {product.map((product)=>{
              return (
            <div key={product.id} className="product-cards-container">
             <div className="card">
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
               </div>
              )
            })}
          </div> 
        
        </div>
      </main>

    </div>
  )
}

export default Products