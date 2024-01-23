import React from 'react'
import { Item } from './Item'
import fastFoodIcon from './../Images/fast-food.png'
import pizzaIcon from './../Images/pizza.png'
import chikenIcon from './../Images/chicken-wings.png'
import item1 from './../Images/item1.png'
import item2 from './../Images/item2.png'
import item3 from './../Images/item3.png'
import item4 from './../Images/item4.png'
import item5 from './../Images/item5.png'


export const Menuitem = () => {
    return (
        <div className='container mx-auto p-6'>
            <h1 className='text-4xl text-center mb-10 font-bold text-orange-900'>
                Top Rated Menu Items
            </h1>
            <div className='grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <Item title="Fast Food" bg={fastFoodIcon}  />
                <Item title="Pizza" bg={pizzaIcon} />
                <Item title="Wings" bg={chikenIcon} />
                <Item title="Indian" bg={item1} />
                <Item title="Latest" bg={item2} />
                <Item title="Restaurant Rewards" bg={item3} />
                <Item title="Best Overall" bg={item4} />
                <Item title="Shipped Free"bg={item5} />
            </div>
        </div>
    )
}
