import React from 'react'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useState } from "react";
import BoardTools from './BoardTools';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

const BookmarkCard = () => {
    const [commentOpen, setCommentOpen] = useState(false);
    return (
        <div className='bg-cyan-100 dark:bg-black w-full'>
        <div className='shadow-lg w-72 h- rounded-md m-20 bg-white dark:bg-black dark:shadow-white'>
            <div className='flex justify-center'>
                <div className='font-bold text-xl p-3 dark:text-white'>
                    <h1>Galapagos Islands, Ecuador</h1>
                </div>
                <div className='flex text-gray-300 justify-center hover:text-black cursor-pointer p-2'onClick={() => setCommentOpen(!commentOpen)}>
                    {/* <BookmarkBorderRoundedIcon /> */}
                    <div className='text-orange-400'>
                    <BookmarkOutlinedIcon/>
                    </div>
                    <MoreVertIcon />
                </div>
                {commentOpen && <BoardTools/>}
            </div>
            <div className='ml-4 text-gray-400 text-sm font-semibold'>25th July</div>
            <div className='flex justify-center items-center p-3 '>
                <img src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='rounded-lg' />
            </div>
            <div className='p-3 text-sm font-semibold dark:text-white'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor temporibus eius vitae magni, perferendis culpa repellat esse tempore possimus dicta, ab dolorum consequuntur sequi assumenda recusandae odio ipsam. Eaque ut hic nobis eius numquam dolore. Ratione, vel quidem! Numquam quis necessitatibus blanditiis in illum fuga, consectetur labore sunt dicta? Qui?</p>
            </div>
            <div className='w-64 ml-4'>
            <hr />
            </div>
            <div className='text-gray-300 p-3 cursor-pointer hover:text-red-500'>
            <FavoriteBorderOutlinedIcon/>
            0
            </div>
        </div>
        </div>
    )
}

export default BookmarkCard