import React from 'react';
import './Main.css'
import { Link } from "react-router-dom";

const Main = () => {

    return (
        <div>
            <section className="hero-section">
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/1400x500?online,course,ecommerce" className="image" alt="" />
                </div>
            </section>

            <section>
                <div className="container">
                    <h1>Trusted by over 14,400 companies and millions of learners around the world</h1>
                    <ul className="container-list">
                        <li className="container1">
                            <img src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg" alt="Volkswagen logo" width="48"
                                height="48" loading="lazy" />
                        </li>
                        <li className="container1">
                            <img src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg" alt="Samsung logo" width="101" height="34"
                                loading="lazy" />
                        </li>
                        <li className="container1">
                            <img src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg" alt="Cisco logo" width="87" height="40"
                                loading="lazy" />
                        </li>
                        <li className="container1">
                            <img src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg" alt="AT&T logo" width="97" height="40" loading="lazy" />
                        </li>
                        <li className="container1">
                            <img src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg" alt="Procter & Gamble logo" width="48" height="48" loading="lazy" />
                        </li>
                        <li className="container1">
                            <img src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg" alt="Hewlett Packard Enterprise logo" width="94" height="40" loading="lazy" />
                        </li>
                        <li className="container1">
                            <img src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg" alt="Citi logo" width="62" height="40"
                                loading="lazy" />
                        </li>
                        <li className="container1">
                            <img src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg" alt="Ericsson logo" width="55" height="48" loading="lazy" />
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="container-topic">
                    <h1><strong>A broad selection of courses</strong></h1>
                    <p>Choose from over 210,000 online video courses with new additions published every month</p>
                    <ul className="topic">
                        <Link className="text" to="/html"><strong>HTML</strong></Link>
                        <Link className="text" to="/css"><strong>CSS</strong></Link>
                        <Link className="text" to="/javascript"><strong>Javascript</strong></Link>
                        <Link className="text" to="/react"> <strong>React.js</strong></Link>
                    </ul>
                </div>
            </section >

            <section className="cart">
                <div className="carts">
                    <a className="cart-image">
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://source.unsplash.com/python/420x260?python,technology"
                        />
                    </a>
                    <div className="title">
                        <h3 className="cart-heading">The Complete Python Bootcamp From Zero to Hero...</h3>
                        <p className="price">Jose portilla</p>
                        <h2 className="cart-title">Rating: 4.6 price: ₹3,199</h2>
                        <Link to="/course"><button className='btn3'>Course</button></Link>
                    </div>
                </div>
                <div className="carts">
                    <a className="cart-image">
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://source.unsplash.com/420x260?python,course,programming"
                        />
                    </a>
                    <div className="title">
                        <h3 className="cart-heading">Automate the Boring Stuff with Python Programming...</h3>
                        <p className="price">Al Swiegarts</p>
                        <h2 className="cart-title">Rating: 4.6 price: ₹3,199</h2>
                        <Link to="/course"><button className='btn3'>Course</button></Link>
                    </div>
                </div>
                <div className="carts">
                    <a className="cart-image">
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://source.unsplash.com/420x260?python,course,technology"
                        />
                    </a>
                    <div className="title">
                        <h3 className="cart-heading">100 Days of Code: The Complete Python Pro...</h3>
                        <p className="price">Dr. Angela Yu</p>
                        <h2 className="cart-title">Rating: 4.6 price: ₹3,199</h2>
                        <Link to="/course"><button className='btn3'>Course</button></Link>
                    </div>
                </div>
                <div className="carts">
                    <a className="cart-image">
                        <img
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src="https://source.unsplash.com/420x260?python,course,programming,technology"
                        />
                    </a>
                    <div className="title">
                        <h3 className="cart-heading">Python for Data Science and Machine Learning Bootcamp...</h3>
                        <p className="price">Jose Portilla</p>
                        <h2 className="cart-title">Rating: 4.6 price₹3,899</h2>
                        <Link to="/course"><button className='btn3'>Course</button></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
