import React from 'react';

const Cart = ({ cartItems }) => {
    return (
        <div className="cart">
            <h2 className='text-yellow-700 text-lg p-3'><b>Cart</b></h2>
            {cartItems.length === 0 ? (
                <p className='text-center'>No item</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
