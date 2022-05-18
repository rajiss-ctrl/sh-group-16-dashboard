import React from 'react'
import Button from '../components/button/Button'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Cardiac from '../assets/productImg/cardiallac 1.png'
import './css/Product.css'

const Products = () => {
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

           <div className="product-cards-container">
             <div className="card">
               <img src={Cardiac} alt="cardiac car" />
               <div className="card-info">
                 <div className='name-tax'>
                    <h4>Ford</h4>
                    <span>Tax: 2%</span>
                 </div>
                 <button>View</button>
               </div>
             </div>
             <div className="card">
               <img src={Cardiac} alt="cardiac car" />
               <div className="card-info">
                 <div className='name-tax'>
                    <h4>Ford</h4>
                    <span>Tax: 2%</span>
                 </div>
                 <button>View</button>
               </div>
             </div>
             <div className="card">
               <img src={Cardiac} alt="cardiac car" />
               <div className="card-info">
                 <div className='name-tax'>
                    <h4>Ford</h4>
                    <span>Tax: 2%</span>
                 </div>
                 <button>View</button>
               </div>
             </div>
             <div className="card">
               <img src={Cardiac} alt="cardiac car" />
               <div className="card-info">
                 <div className='name-tax'>
                    <h4>Ford</h4>
                    <span>Tax: 2%</span>
                 </div>
                 <button>View</button>
               </div>
             </div>
             <div className="card">
               <img src={Cardiac} alt="cardiac car" />
               <div className="card-info">
                 <div className='name-tax'>
                    <h4>Ford</h4>
                    <span>Tax: 2%</span>
                 </div>
                 <button>View</button>
               </div>
             </div>


             <div className="card">
               <img src={Cardiac} alt="cardiac car" />
               <div className="card-info">
                 <div className='name-tax'>
                    <h4>Ford</h4>
                    <span>Tax: 2%</span>
                 </div>
                 <button>View</button>
               </div>
             </div>
             <div className="card">
               <img src={Cardiac} alt="cardiac car" />
               <div className="card-info">
                 <div className='name-tax'>
                    <h4>Ford</h4>
                    <span>Tax: 2%</span>
                 </div>
                 <button>View</button>
               </div>
             </div>
             <div className="card">
               <img src={Cardiac} alt="cardiac car" />
               <div className="card-info">
                 <div className='name-tax'>
                    <h4>Ford</h4>
                    <span>Tax: 2%</span>
                 </div>
                 <button>View</button>
               </div>
             </div>
             <div className="card">
               <img src={Cardiac} alt="cardiac car" />
               <div className="card-info">
                 <div className='name-tax'>
                    <h4>Ford</h4>
                    <span>Tax: 2%</span>
                 </div>
                 <button>View</button>
               </div>
             </div>
             <div className="card">
               <img src={Cardiac} alt="cardiac car" />
               <div className="card-info">
                 <div className='name-tax'>
                    <h4>Ford</h4>
                    <span>Tax: 2%</span>
                 </div>
                 <button>View</button>
               </div>
             </div>
             
           </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Products