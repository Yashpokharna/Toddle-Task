import React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from "react";
import CreateBoard from './CreateBoard';

export const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [commentOpen, setCommentOpen] = useState(false);
  return (
    <div className='shadow-sm rounded-sm dark:bg-black dark:shadow-white'>
      <div className='flex h-20 justify-between items-center dark:bg-black'>
        <div className='w-20  ml-16 items-center cursor-pointer'>
          <img src="data:image/png;base64,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" alt="" />
        </div>
        <div className='flex gap-16 items-center '>
          <div className='flex items-center hover:scale-95 transition dark:bg-red-500 p-2 gap-1 h-8 w-28 justify-center items-center bg-red-500 text-white hover:bg-red-700 px-5 py-3 rounded-md font-semibold m-4 sm:m-1 sm:p-2 '>
            <button onClick={handleThemeSwitch} className='hover:scale-95 transition'>
              Toggle Mode
            </button>
          </div>
          <div className='flex border rounded-md justify-center dark:text-white border-slate-300 w-56 h-8 items-center p-2'>
            <SearchSharpIcon />
            <input type="text" className='border-none dark:bg-black' placeholder='  Search...' />
          </div>
          <div className='flex items-center p-2 gap-1 h-8 w-44 justify-center items-center bg-red-500 text-white hover:bg-red-700 px-5 py-3 rounded-md font-semibold m-4 sm:m-1 sm:p-2 '>
            <div>
              <AddIcon />
            </div>
            <div className='' >
            <button className='hover:scale-95 transition ' onClick={() => setCommentOpen(!commentOpen)}> Create new board</button>
            </div>
          </div>
          {commentOpen && <CreateBoard />}
        </div>
      </div>
      <hr />
    </div>
  )
}
export default Navbar;