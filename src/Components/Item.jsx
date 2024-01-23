
import React from 'react'

export const Item = ({ title, bg }) => {
    return (
        <div className='flex cursor-pointer shadow-lg transition ease-out duration-500 hover:bg-slate-100 items-center py-2 px-3 rounded-lg justify-between bg-slate-200 '>
            <h2 className='text-xl font-bold text-gray-700'>
                {title}
            </h2>
            <div className='w-14 h-14' >
                <img className='w-full' src={bg} alt={title} />
            </div>
        </div>
    )
}
