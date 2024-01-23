

import React from 'react'

export const Foodcard = (props) => {
    return (
        <div className=' h-48 shadow-lg transition ease-out duration-500 hover:shadow-xl hover:scale1 tr1 rounded-lg cursor-pointer  bg-gray-200'>
            <div className='h-36'>
                <img className=' rounded-t-lg h-full w-full object-cover' src={props.img} alt="" />
            </div>
            <div className='flex text-gray-700 px-2 mt-2 justify-between'>
                <p> {props.name} </p>
                <p className='bg-orange-500 py-1 px-2 rounded-lg'> {props.price} </p>
            </div>
        </div>
    )
}
