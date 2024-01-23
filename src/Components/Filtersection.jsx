

import React from 'react'

export const Filtersection = ({ filterData }) => {

    return (
        <div className='container mx-auto p-3'>
            <h1 className='text-4xl font-bold text-center text-orange-900 py-10'>
                Top Reated Menu Items
            </h1>
            <div>
                <p className='font-bold underline text-3xl text-orange-700 text-center pb-6'>Filter By Type :</p>
                <div>
                    <button onClick={(e) => { filterData(e.target.innerText) }} className='px-3 py-1 bg-rose-600 mr-4 rounded-lg text-white text-xl'>All</button>
                    <button onClick={(e) => { filterData("Burger") }} className='px-3 py-1 bg-rose-600 mr-4 rounded-lg text-white text-xl'>Burgers</button>
                    <button onClick={(e) => { filterData(e.target.innerText) }} className='px-3 py-1 bg-rose-600 mr-4 rounded-lg text-white text-xl'>Pizza</button>
                    <button onClick={(e) => { filterData(e.target.innerText) }} className='px-3 py-1 bg-rose-600 mr-4 rounded-lg text-white text-xl'>Salad</button>
                    <button onClick={(e) => { filterData(e.target.innerText) }} className='px-3 py-1 bg-rose-600 mr-4 rounded-lg text-white text-xl'>Chicken</button>
                </div>
            </div>
            <div>
                <p className='font-bold underline text-3xl text-orange-700 text-center py-8'>Filter By Price :</p>
                <div>
                    <button onClick={(e) => { filterData(e.target.innerText) }} className='px-3 py-1 bg-green-600 mr-4 rounded-lg text-white text-xl'>$</button>
                    <button onClick={(e) => { filterData(e.target.innerText) }} className='px-3 py-1 bg-green-600 mr-4 rounded-lg text-white text-xl'>$$</button>
                    <button onClick={(e) => { filterData(e.target.innerText) }} className='px-3 py-1 bg-green-600 mr-4 rounded-lg text-white text-xl'>$$$</button>
                    <button onClick={(e) => { filterData(e.target.innerText) }} className='px-3 py-1 bg-green-600 mr-4 rounded-lg text-white text-xl'>$$$$</button>
                </div>
            </div>
        </div>
    )
}
