import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import BoardTools from './BoardTools';
const BoardContent = () => {
    const [commentOpen, setCommentOpen] = useState(false);
    return (
        <div className='flex h-20 items-center ml-10 mt-16 border rounded-md border-slate-300 shadow-md'>
            <div className='bg-cyan-200 rounded-md bg-contain w-20 border-r-2 border-gray-200 h-20'>
            </div>
            <div className='p-5 flex gap-5'>
                <div className='dark:text-white'>
                    Earth Changes and Journeys
                </div>
                <div className='cursor-pointer dark:text-white'onClick={() => setCommentOpen(!commentOpen)}>
                    <MoreVertIcon />
                </div>
                {commentOpen && <BoardTools/>}
            </div>
        </div>
        
    )
}

export default BoardContent