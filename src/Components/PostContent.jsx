import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import CreatePost from './CreatePost';
const PostContent = () => {
    const [commentOpen, setCommentOpen] = useState(false);
    return (
        <div className='bg-cyan-100 dark:bg-black'>
            <div className='flex justify-between'>
                <div className='mt-5 ml-20'>
                    <h1 className='text-3xl font-bold dark:text-white'>Your posts</h1>
                </div>
                <div className='flex items-center mr p-2 gap-1 h-8 w-44 justify-center items-center bg-red-500 text-white hover:bg-red-700 px-5 py-3 rounded-md font-semibold sm:m-6 sm:p-2 '>
                    <div>
                        <AddIcon />
                    </div>
                    <button className='hover:scale-95 transition' onClick={() => setCommentOpen(!commentOpen)}> Create new post</button>
                </div>
                {commentOpen && <CreatePost/>}
            </div>
            <div className='flex justify-center items-center mt-24'>
                <div className='w-52 h-52 '>
                    <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/24185535/Online-Learning.jpg" alt="" className='rounded-xl -z-20 mt-4 sm:h-[100%] sm:mt-0' />
                </div>
            </div>
            <div className='flex justify-center font-extrabold mt-3 dark:text-white'>
                    Nothing here yet
                </div>
                <div className='flex justify-center text-sm mt-2 h-56 dark:text-white'>
                    Create your first post by clicking on the '+' button above
                </div>
            {/* {commentOpen && <CreateBoard/>} */}
        </div>
    )
}

export default PostContent