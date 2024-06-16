import React, { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/product.css';
import Logocarousel from '../components/Logocarousel';

function Products() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div className="header">
                <img src="assets/homepage_top.jpg" alt="" data-aos="slide-left" data-aos-duration="1000" />
                <div className="text-container" data-aos="slide-right" data-aos-duration="2200">
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
                        <li className="sidebar-item">Baby & Child Care <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item">Cosmetics <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item">Diet & Nutrition <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item">Gifts & Specialty <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item">Household Items <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item">Medicine Cabinet <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item">Natural Products <span className="arrow">{'>'}</span></li>
                        <li className="sidebar-item">Exclusives <span className="arrow">{'>'}</span></li>
                        
                    </ul>
                </div>
                <div className="products">
                    
                <div class="category-product">
                    <div class="card__corner"></div>
                    <div class="card__img">
                        <span class="card__span">Category</span>
                    </div>
                    <div class="card-int">
                        <p class="card-int__title">This is the Product title</p>
                        <p class="excerpt">Lorem ipsum dolor sit amet consectetur adipiscing elit, donec suspendisse vulputate dictumst enim per mus imperdiet, platea non massa dictum tempus sapien.</p>
                        <button class="card-int__button">Buy Now</button>
                    </div>
                </div>
                <div class="category-product">
                    <div class="card__corner"></div>
                    <div class="card__img">
                        <span class="card__span">Category</span>
                    </div>
                    <div class="card-int">
                        <p class="card-int__title">This is the Product title</p>
                        <p class="excerpt">Lorem ipsum dolor sit amet consectetur adipiscing elit, donec suspendisse vulputate dictumst enim per mus imperdiet, platea non massa dictum tempus sapien.</p>
                        <button class="card-int__button">Buy Now</button>
                    </div>
                </div>
                <div class="category-product">
                    <div class="card__corner"></div>
                    <div class="card__img">
                        <span class="card__span">Category</span>
                    </div>
                    <div class="card-int">
                        <p class="card-int__title">This is the Product title</p>
                        <p class="excerpt">Lorem ipsum dolor sit amet consectetur adipiscing elit, donec suspendisse vulputate dictumst enim per mus imperdiet, platea non massa dictum tempus sapien.</p>
                        <button class="card-int__button">Buy Now</button>
                    </div>
                </div>
                <div class="category-product">
                    <div class="card__corner"></div>
                    <div class="card__img">
                        <span class="card__span">Category</span>
                    </div>
                    <div class="card-int">
                        <p class="card-int__title">This is the Product title</p>
                        <p class="excerpt">Lorem ipsum dolor sit amet consectetur adipiscing elit, donec suspendisse vulputate dictumst enim per mus imperdiet, platea non massa dictum tempus sapien.</p>
                        <button class="card-int__button">Buy Now</button>
                    </div>
                </div>
                <div class="category-product">
                    <div class="card__corner"></div>
                    <div class="card__img">
                        <span class="card__span">Category</span>
                    </div>
                    <div class="card-int">
                        <p class="card-int__title">This is the Product title</p>
                        <p class="excerpt">Lorem ipsum dolor sit amet consectetur adipiscing elit, donec suspendisse vulputate dictumst enim per mus imperdiet, platea non massa dictum tempus sapien.</p>
                        <button class="card-int__button">Buy Now</button>
                    </div>
                </div>
                <div class="category-product">
                    <div class="card__corner"></div>
                    <div class="card__img">
                        <span class="card__span">Category</span>
                    </div>
                    <div class="card-int">
                        <p class="card-int__title">This is the Product title</p>
                        <p class="excerpt">Lorem ipsum dolor sit amet consectetur adipiscing elit, donec suspendisse vulputate dictumst enim per mus imperdiet, platea non massa dictum tempus sapien.</p>
                        <button class="card-int__button">Buy Now</button>
                    </div>
                </div>
                <div class="category-product">
                    <div class="card__corner"></div>
                    <div class="card__img">
                        <span class="card__span">Category</span>
                    </div>
                    <div class="card-int">
                        <p class="card-int__title">This is the Product title</p>
                        <p class="excerpt">Lorem ipsum dolor sit amet consectetur adipiscing elit, donec suspendisse vulputate dictumst enim per mus imperdiet, platea non massa dictum tempus sapien.</p>
                        <button class="card-int__button">Buy Now</button>
                    </div>
                </div>
                <div class="category-product">
                    <div class="card__corner"></div>
                    <div class="card__img">
                        <span class="card__span">Category</span>
                    </div>
                    <div class="card-int">
                        <p class="card-int__title">This is the Product title</p>
                        <p class="excerpt">Lorem ipsum dolor sit amet consectetur adipiscing elit, donec suspendisse vulputate dictumst enim per mus imperdiet, platea non massa dictum tempus sapien.</p>
                        <button class="card-int__button">Buy Now</button>
                    </div>
                </div>
                <div class="category-product">
                    <div class="card__corner"></div>
                    <div class="card__img">
                        <span class="card__span">Category</span>
                    </div>
                    <div class="card-int">
                        <p class="card-int__title">This is the Product title</p>
                        <p class="excerpt">Lorem ipsum dolor sit amet consectetur adipiscing elit, donec suspendisse vulputate dictumst enim per mus imperdiet, platea non massa dictum tempus sapien.</p>
                        <button class="card-int__button">Buy Now</button>
                    </div>
                </div>
                </div>

            </div>

            <div className="services">

                <div className="cust-tag">
                    <p className="cust-tag-p">OUR SERVICES</p>
                    <h3 className="cust-tag-h3">We Provide Various Directions</h3>
                </div>

                <div className="services-card">
                    <div className="card">
                        <div className="card-content">
                            <img src="assets/medical-doctor.png" alt="" />
                            <h1>Angioplasty</h1>
                            <p>There are many variations of pas of Lorem Ipsum availab.</p>
                            <a href=''>
                                READ MORE +
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <img src="assets/hosipat-bed.png" alt="" />
                            <h1>Dental Service</h1>
                            <p>There are many variations of pas of Lorem Ipsum availab.</p>
                            <a href=''>
                                READ MORE +
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <img src="assets/heartbeat.png" alt="" />
                            <h1>Endocriology</h1>
                            <p>There are many variations of pas of Lorem Ipsum availab.</p>
                            <a href=''>
                                READ MORE +
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <img src="assets/health-services.png" alt="" />
                            <h1>Health Service</h1>
                            <p>There are many variations of pas of Lorem Ipsum availab.</p>
                            <a href=''>
                                READ MORE +
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <img src="assets/3d-pill.png" alt="" />
                            <h1>Health Care</h1>
                            <p>There are many variations of pas of Lorem Ipsum availab.</p>
                            <a href=''>
                                READ MORE +
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <img src="assets/3d-syringe.png" alt="" />
                            <h1>Laboratory</h1>
                            <p>There are many variations of pas of Lorem Ipsum availab.</p>
                            <a href=''>
                                READ MORE +
                            </a>
                        </div>
                    </div>

                </div>


            </div>
            <Logocarousel/>
        </>
    )
}

export default Products
