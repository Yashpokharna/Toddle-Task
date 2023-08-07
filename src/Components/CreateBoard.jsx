import React from 'react'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
const CreateBoard = () => {
    const [commentOpen, setCommentOpen] = useState(false);
    return (
        <div className='fixed left-0 right-0 bottom-0 top-0 flex justify-center items-center bg-black bg-opacity-80'>
        <div className='shadow-lg w-[28%] h-80 rounded-md p-3 bg-white'>
        <div className='flex justify-between '>
            <h1 className='font-bold text-lg '>Add a name for your board</h1>
            <div className='text-gray-400 cursor-pointer'>
            <IconButton component={Link} to="/posts"><ClearRoundedIcon/></IconButton> 
            </div>
        </div>
        <div className=''>
        <input type="text" className='w-[100%] border rounded-sm mt-2 justify-center font-semibold text-black border-slate-300 h-9' placeholder='Places around the world'/>
        </div>
        <h1 className='font-bold mt-6 text-'>Select post color</h1>
        <p className='text-sm '>Here are some tempelates to help you get started</p>
        <div className='flex gap-2 mt-2 cursor-pointer'>
            <div className='border rounded-full h-7 w-7 bg-cyan-100 hover:border-black'></div>
            <div className='border rounded-full h-7 w-7 bg-indigo-300 hover:border-black'></div>
            <div className='border rounded-full h-7 w-7 bg-pink-300 hover:border-black'></div>
            <div className='border rounded-full h-7 w-7 bg-orange-300 hover:border-black'></div>
        </div>
        <div className='flex mt-20 ml-72 h-8 w-28  justify-center items-center bg-red-500 text-white hover:bg-red-700  rounded-md font-semibold'>
           <Link to="/posts"> <button className='hover:scale-95 transition'>Create board</button></Link>
        </div>
        </div>
        </div>
    )
}

export default CreateBoard