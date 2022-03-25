import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Order from '../Order/Order';
import './MealContainer.css'
const MealContainer = () => {
    const [meal, setMeal] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => { setMeal(data.categories) })
    }, []);
    return (
        <div className='meal-container'>
            <div className="food-parent-div">
                {
                    meal.map(food => <Food food={food} key={food.idCategory}></Food>)
                }
            </div>
            <div>
                <Order></Order>
            </div>
        </div>
    );
};

export default MealContainer;