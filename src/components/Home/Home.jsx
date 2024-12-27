import React, { useState, useRef } from 'react';
import MenuComponent from '../MenuComponent/MenuComponent';
import FoodCategory from '../FoodCategory/FoodCategory';
import Cart from '../Cart/Cart';
import '../style.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    const categories = ['Cold Drinks', 'Soup', 'Starters', 'Main Course', 'Desserts'];

    const categoryRefs = useRef(
        categories.reduce((acc, category) => {
            acc[category] = React.createRef();
            return acc;
        }, {})
    );

    const handleMenuClick = (category) => {
        categoryRefs.current[category]?.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const addToCart = (item) => {
        setCartItems((prevCart) => [...prevCart, item]);
    };

    return (
        <div className="App">
            <div className="navbar bg-yellow-300">
                <h1 className='text-stone-900 p-3 text-2xl'> <b>FoodLab</b></h1>
            </div>
            <div className="content">
                <div className="left-menu">
                    <MenuComponent categories={categories} onMenuClick={handleMenuClick} />
                </div>
                <div className="food-items">
                    <FoodCategory categories={categories} categoryRefs={categoryRefs.current} addToCart={addToCart} />
                </div>
                <div className="cart">
                    <Cart cartItems={cartItems} />
                </div>
            </div>
            <div className="footer">

                <footer className="footer bg-yellow-300 text-base-content p-10">
                    <aside>
                        <svg xmlns="http://www.w3.org/2000/svg" width='50' height='50' viewBox="0 0 512 512"><path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32L8.6 224C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256l457.1 0c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28l-231.5 0c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z" /></svg>
                        <p>
                            FoodLab
                            <br />
                            Since 2007
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Food</a>
                        <a className="link link-hover">Drinks</a>
                        <a className="link link-hover">Party Space</a>
                        <a className="link link-hover">Convention</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>

                    </nav>

                </footer>
            </div>
        </div>
    );
};

export default App;
