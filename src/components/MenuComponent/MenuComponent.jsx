import React from 'react';

const MenuComponent = ({ categories, onMenuClick }) => {
    return (
        <div className="menu ">
            <h2 className='text-yellow-700 text-lg p-3'><b>Menu</b></h2>
            <ul className='bg-yellow-500'>
                {categories.map((category) => (
                    <li key={category} onClick={() => onMenuClick(category)}>
                        <p><b>{category}</b></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuComponent;
