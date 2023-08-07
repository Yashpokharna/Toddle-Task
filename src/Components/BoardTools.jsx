import React from 'react'
import DrawIcon from '@mui/icons-material/Draw';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const handleDelete = () =>{

}
const BoardTools = () => {
  return (
    <div className='flex flex-col shadow-md dark:shadow-white absolute border rounded-md p-3 m-5 ml-60 dark:bg-black dark:text-white bg-white h-24 w-28'>
        <div className='flex cursor-pointer'>
        <DrawIcon/>
        Edit
        </div>
        <div className='flex text-red-500 cursor-pointer mt-3 mb-2'>
        <DeleteRoundedIcon/>
        <div>
        Delete
        </div>
        </div>
    </div>
  )
}
export default BoardTools