import React from 'react'
// import {useRef} from 'react';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
const CreatePost = () => {
    const [commentOpen, setCommentOpen] = useState(false);

    return (
        <div className='fixed left-0 right-0 bottom-0 top-0 flex justify-center items-center bg-black bg-opacity-80'>
        <div className='shadow-lg w-[28%] h-96 rounded-md p-4 bg-white  '>
        <div className='flex justify-between '>
            <div className='flex-col'>
            <h1 className='font-bold text-lg'>Create a post</h1>            
            <p className='text-xs font-semibold'>Write something for your post</p>
            </div>
            <div className='text-gray-400 cursor-pointer'>
                <IconButton component={Link} to="/posts"><ClearRoundedIcon/></IconButton>
            </div>
        </div>
        <div className='mt-4'>
            <div className='font-bold text-gray-800'>
            Subject
            </div>
        <input type="text" className='w-[100%] p-2 text-sm border rounded-sm mt-2 justify-center font-semibold text-black border-slate-300 h-9' placeholder='Write subject here...'/>
        </div>
        <div className='text-gray-500 font-semibold flex mt-4 border border-gray-300 text-sm w-36 justify-center items-center h-8 cursor-pointer'>
            <InsertPhotoOutlinedIcon/>
            Add your image
        </div>
        <h1 className='font-bold mt-4 text-gray-800'>What's on your mind ?</h1>
        <input type="text" className='w-[100%] border rounded-sm mt-2 justify-center font-semibold text-black border-slate-300 h-9 p-2 text-sm' placeholder='Write here...'/>
  
        <div className='flex mt-14 ml-72 h-8 w-28  justify-center items-center bg-red-500 text-white hover:bg-red-700  rounded-md font-semibold'>
           <Link to="/final">
            <button className='hover:scale-95'>Publish</button>
            </Link>
        </div>
        </div>
        </div>
    )
}

export default CreatePost