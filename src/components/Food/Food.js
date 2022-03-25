import React from 'react';

const Food = ({ food }) => {
    console.log(food);
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = food;
    return (
        <div className='food-container'>
            <div>
                <img src={strCategoryThumb} alt="" />
                <div>
                    <p>{strCategory}</p>
                    <p>{strCategoryDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default Food;