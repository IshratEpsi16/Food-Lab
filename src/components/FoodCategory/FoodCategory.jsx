import React from 'react';

const FoodCategory = ({ categories, categoryRefs, addToCart }) => {
    const foodItems = {
        'Desserts': [
            { name: 'Pastry', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxgBpeG2y2CnTpHDFAgp0rBJcSsNeJSLWuw&s' },
            { name: 'Brownie', image: 'https://www.southernliving.com/thmb/eLSgazITlYrKf9EFTR9y1L2mSxg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living-Homemade_Brownies_023-3c582f0fba1842dd918a3d9c26c1ab59.jpg' },
            { name: 'Ice cream', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNb4qLVc8li_M2NHBfEl14DaVpUCmplY5lg&s' },
            { name: 'Yogurt', image: 'https://www.allrecipes.com/thmb/TFYQ4bF-ynLfpQIjqyvxdXNOTgo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-fluffy-yogurt-2x1-7ea6ae3c360f4b6699ed4714835e120c.jpg' },

        ],
        'Cold Drinks': [
            { name: 'Cola', image: 'https://m.media-amazon.com/images/I/51v8nyxSOYL._SL1500_.jpg' },
            { name: 'Sprite', image: 'https://gofresh.com.bd/wp-content/uploads/2022/03/sprite-250-can-copy-copy.jpg' },
            { name: 'Fanta', image: 'https://www.coca-cola.com/content/dam/onexp/bd/home-images-bangladesh/brands/fanta/desktop-fanta-images/desktop-250ml/fanta-250ml.jpg' },

            { name: 'Lemonade', image: 'https://greensmoothiegourmet.com/wp-content/uploads/2023/07/single-serving-lemonade3.jpg' },
        ],
        'Soup': [
            { name: 'Tomato Soup', image: 'https://keytomylime.com/wp-content/uploads/2022/05/Best-Tomato-Rice-Soup-Recipe.jpg' },
            { name: 'Chicken Soup', image: 'https://www.dadcooksdinner.com/wp-content/uploads/2023/09/Instant-Pot-Chicken-Soup-with-Rice-1280x-1030337.jpg' },
            { name: 'Mushroom Soup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8uIwOkXeixPaDydTelwV9hspHTEZrKsxmw&s' },
            { name: 'Vegetable Soup', image: 'https://feelgoodfoodie.net/wp-content/uploads/2024/11/Creamy-Vegetable-Soup-12.jpg' },

        ],
        'Starters': [
            { name: 'Spring roll', image: 'https://herbsandflour.com/wp-content/uploads/2023/10/Crispy-Vegetable-Spring-Rolls-Recipe.jpg' },
            { name: 'Wonton', image: 'https://i0.wp.com/www.jenn-smith.com/wp-content/uploads/2023/04/0BE80153-6A53-4960-AFF8-C283EAA7C2DF_1_105_c.jpeg?fit=768%2C1024&ssl=1' },
            { name: 'Nuggets', image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/ChickenNuggets.webp' },
            { name: 'French fries', image: 'https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-1.jpg' },

        ], // Add items or leave empty
        'Main Course': [
            { name: 'Fried rice', image: 'https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2F82f8a09e19a456b94077b31d23861a5b03905307-1000x667.jpg&w=3840&q=75' },
            { name: 'Chicken chili', image: 'https://www.spicebangla.com/wp-content/uploads/2020/12/Chili-Chicken-Recipe.webp' },
            { name: 'Vegetables', image: 'https://cdn.tastephilippines.com/wp-content/uploads/2022/06/pinakbet-vegetable-dish-from-the-Philippines.jpg?strip=all&lossy=1&resize=720%2C720&ssl=1' },
            { name: 'Suslick', image: 'https://i.ytimg.com/vi/UZEdxcLdGbE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAnFYI3sQ5m9pAoho9cVpyxklkxjw' },

        ], // Add items or leave empty
        // Add items or leave empty
    };

    return (
        <div>
            {categories.map((category) => (
                <div key={category} ref={categoryRefs[category]} className="category-section">
                    <h2 className='bg-slate-200 text-lg text-amber-900 p-3'><b>{category}</b></h2>
                    <div className="food-list">
                        {foodItems[category]?.length > 0 ? (
                            foodItems[category].map((food, index) => (
                                <div key={index} className="food-item">
                                    <img src={food.image} alt={food.name} className="food-image" />
                                    <p className='text-base text-stone-600 p-2'><b>{food.name}</b></p>
                                    <button onClick={() => addToCart(food.name)}>Add to cart</button>
                                </div>
                            ))
                        ) : (
                            <p>No items available in this category.</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FoodCategory;
