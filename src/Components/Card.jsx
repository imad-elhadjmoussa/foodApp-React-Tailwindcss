import React from 'react'

export const Card = (props) => {
  return (
    <div className='text-white rounded-lg bg-cover object-cover  flex flex-col justify-between items-start p-3 h-36' style={{ backgroundImage: `url(${props.bg})` }}>
      <h2 className='text-2xl font-bold '>{props.title}</h2>
      <p className='text-xl font-bold text-orange-900'>{props.dis}</p>
      <button className='bg-orange-100 px-5 py-1 rounded-full text-black cursor-pointer hover:bg-orange-300'>Order Now</button>
    </div>
  )
}
