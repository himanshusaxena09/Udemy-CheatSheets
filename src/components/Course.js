import React from 'react'
import './Course.css'

const Course = () => {
    return (
        <div>
            <section className="course">
                <div className="courses">
                    <div className="name">
                        <p>Development Programming Languages Python</p>
                    </div>
                    <div className="sub">
                        <h2>The Complete Python Bootcamp From Zero to Hero in Python</h2>
                        <h3 className='h3'>Learn Python like a Professional Start from the basics and go all the way to creating your own applications and game.  </h3>
                        <p className='auth'>Rating: 4.6 out of 54.6 (479,325 ratings) 1,788,250 students</p>
                        <p className='auth'>Created by Jose Portilla </p>
                        <p className='auth'>Last updated 7/2023 English English [Auto], Arabic [Auto], </p>
                    </div>
                </div>

                <div className="cart1">
                    <div className="carts1">
                        <a className="cart-image2">
                            <img
                                alt="ecommerce"
                                className="object-cover object-center w-full h-full block"
                                // src=""
                            src="https://source.unsplash.com/python/420x260?python,technology"
                            />
                        </a>
                        <div className="title3">
                            <h3 className="cart-heading4">Subscribe to Udemy’s top courses</h3>
                            <p className="price5">Get this course, plus 10,500+ of our top-rated courses,</p>
                            <p className="price5"> with Personal Plan. Learn more</p>
                            <button className='btn'>Start Subscription</button>
                            <h2 className="cart-title6">Starting at ₹750 per monthCancel anytime</h2>
                            <hr />
                            <h2 className="cart-title7">₹3,199</h2>
                            <button className='btn2'>Buy this Course</button>
                            <h2 className="cart-title6">30-Day Money-Back Guarantee</h2>
                            <h2 className="cart-title6">Full Lifetime Access</h2>
                        </div>
                    </div>
                </div>



            </section>
        </div>
    )
}

export default Course
