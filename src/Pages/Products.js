import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/product.css';
import Logocarousel from '../components/Logocarousel';
import productsData  from '../data/products.json'

function Products() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const products = productsData["Products"];

    useEffect(() => {
        AOS.init();
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };


    const buy = () => {
        window.open('/OrderPage', '_blank');
    };

    return (
        <>
            <div className="header">
                <img src="assets/homepage_top.jpg" alt="" data-aos="slide-left" data-aos-duration="1000" />
                <div className="text-container" data-aos="slide-right" data-aos-duration="2000">
                    <h1>Some Heading</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur molestiae laborum totam optio atque saepe earum, nulla fuga nostrum aliquid voluptatibus debitis magni consequuntur placeat, possimus laudantium cupiditate expedita.</p>
                </div>
            </div>
            
            <div className="product-heading">
                <h1>Our Products</h1>
            </div>

            <div className="category-products">
                <button className="sidebar-toggle" onClick={toggleSidebar}></button>
                <div className={`sidebar-${isSidebarOpen ? 'open' : ''}`}>
                    <h2 className="sidebar-title">CATEGORIES</h2>
                    <ul className="sidebar-list">
                        <li className="sidebar-item" >Chemistry <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item" >Hematology <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item" >Immunology <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item" >MicroBiology <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item" >Urinalysis <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item" >HBA1C <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item" >Coagulation <span className="arrow">{'>'}</span></li>
                    </ul>
                </div>
                <div className="products">
                    {products.map((product, index) => (
                        <div key={index} className="category-product">
                            <div className="card__corner"></div>
                            <div className="card__img">
                                <img src={product.url} alt={product.name} />
                            </div>
                            <div className="card-int">
                                <span className="card__span">{product.category}</span>
                                <p className="card-int__title">{product.name}</p>
                                <p className="excerpt">{product.description}</p>
                                {/* <p className="card-int__price">${product.price}</p> */}
                                <button className="card-int__button" onClick={buy}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Logocarousel/>
        </>
    )
}

export default Products;
