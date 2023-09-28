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

            <section className='boxes'>
                <div className="box">
                    <div className="box1">
                        <h1>What you'll learn</h1>
                    </div>
                    <div className="textes1">
                        <p className='line'>✔️ You will learn how to leverage the power of Python to solve tasks.</p>
                        <p className='line'>✔️ You will build games and programs that use Python libraries.</p>
                        <p className='line'>✔️ You will be able to use Python for your own work problems or personal projects.</p>
                        <p className='line'>✔️ You will create a portfolio of Python based projects you can share.</p>
                        <p className='line'>✔️ Learn to use Python professionally, learning both Python 2 and Python 3!</p>
                        <p className='line'>✔️ Create games with Python, like Tic Tac Toe and Blackjack!</p>
                        <p className='line'>✔️ Learn advanced Python features, like the collections module and how to work with timestamps!</p>
                        <p className='line'>✔️ Learn to use Object Oriented Programming with classes!</p>
                        <p className='line'>✔️ Understand complex topics, like decorators.</p>
                        <p className='line'>✔️ Understand how to use both the Jupyter Notebook and create .py files</p>
                        <p className='line'>✔️ Get an understanding of how to create GUIs in the Jupyter Notebook system!</p>
                        <p className='line'>✔️ Build a complete understanding of Python from the ground up!</p>
                    </div>
                </div>
            </section>

            <section className='colls'>
                <div className="col">
                    <h1 className="cols">This course includes:</h1>
                </div>
                <div className="col1">
                    <a href="/" className='icon'>✔️ 22 hours on-demand video</a>
                    <a href="/" className='icon'>✔️ Access on mobile and TV</a>
                    <a href="/" className='icon'>✔️ 19 coding exercises</a>
                    <a href="/" className='icon'>✔️ Certificate of completion</a>
                    <a href="/" className='icon'>✔️ 15 articles</a>
                </div>
            </section>
        </div>
    )
}

export default Course
