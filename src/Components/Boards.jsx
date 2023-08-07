import React from 'react'
import BoardContent from './BoardContent'

const Boards = () => {
  return (
    <div>
        <div className='text-3xl font-bold mt-10 ml-20 flex justify-start items-baseline dark:bg-black dark:text-white'>
            My Boards
        </div>
        <div className='flex justify-around'>
            <BoardContent/>
            <BoardContent/>
            <BoardContent/>
        </div>
        <div className='h-96 dark:bg-black'></div>
        <div className='h-10 dark:bg-black'></div>
    </div>
  )
}

export default Boards