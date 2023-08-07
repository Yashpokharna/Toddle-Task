import React from 'react'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from "react";
import CreateBoard from './CreateBoard';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

export const BookmarkNavbar = () => {
    const [commentOpen, setCommentOpen] = useState(false);
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
    return (
        <div className='rounded-sm bg-white dark:bg-black'>
            <div className='flex justify-between items-center'>
                <div className='flex ml-2justify-center items-center cursor-pointer dark:text-white'>
                <IconButton component={Link} to="/final" className='dark:text-white'>
                    <ArrowBackIosNewRoundedIcon />
                    </IconButton>
                    <div className='w-16 h-16 cursor-pointer'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACqCAMAAAAKqCSwAAAAG1BMVEX/////WGn8/PztY3Pp6en95+jriJX6zdLysbn6Sn8QAAAExElEQVR4nO2bjY7kKAyECQxJ3v+JN/wl6e5McBl7ota6TjqN7kZL7RdjwBjnvkU/Txugyn+PVaOqo6+xalQ1ZFQ1ZFQ1ZFQ1ZFQ1ZFQ1ZFQ1ZFQ1ZFQ1ZFQ1ZFQ1ZFQ1ZFQ1ZFQ1ZFQ1ZFQ1ZFQ1JEXVe5E/5l4Mq35T/pf3MS5FMZb/UP6nUzDPoOrTP9lSXOdwaF43w7tfp4AZp+qb0RCmMFVtPya78+FW2ignVovTZPRd2e+8xhwD8uGLB4AvSJu7D7/NrbBVFlWXmH5YfIW7bpEga5UZq7dOK9sctukvJhQKvFiN4eLDX5hd6xwTmmWcWJ37Rs9mS4IbFSevEj7/4bbNsEeoujiTnZ7NjopDFYBazS4yqQu16jNUyO0Ws3HcKkwVitTDa9iiICfkkaiFrKYPCUXqCezStl1MwBDVPMyCQ61m970BlytCtbuk3pst04vrFItVj2aqV6vTBtYNuAWnFff7F7M5FTCjFaXq1wGnx+xiOHUQVfb8fzHLXQ/ADJD2VINWt4Dl7mAQq46dql641r0h6BWjiq//12bnyEoDWAAQd6okr7pUB7LqbvPkFRREdXhW7WZn+JQI5lXCrLooD1z+2ryfu8ieIapL7/y37flXWjwnr9AqC+bVXgLIeYgY0GGuGUuDquuuVWUpImS0kPNrrX4RBxe2Gh2wpQ3gphCx2v20Ic8VitX0KyG0+guJExSr3VxFt1p+vUwt6vhyVkPBlKwGSqVoyiGgRPUeV0pU6Yv6uCUsWsrCVi0kVu+spk1zO+fFcwX23utKNipIdW7TuR6iaYswUswQtlqOteTJlQ8FxNEhq+mb/mZgGzT62JCmAKBAzWsWdXwkVu/DL8xz3i/5n+0H6sY2JQ0iKJhqZ9yUevKmhpxbF5VY7U7qkIto0AEsLNTRpaniVunpSphqDQAFq7JUSwBgJ3ByAEhmgH2rBFp9mCrZLD1ZyVLNm0CsBENfArBTwHKzWlWrYLUIWFgF9wBTi1WIKn27IrlfnRgZAMiqcvvVk1V6DQbZWkufrZZslVyEQw4skmeraT8uL8StFXQMBKl2D9dzOwJQaizlPlOpZtUdvlUhuqeAsF8LKNWsulRPBb5bq7lisYJ3WKLltdOV30ILFnp5TaO+mtrY1qs2rDensd5kP1RfnWpfWLcijJeCwVgVKbAfTOlDZz1ybQFVKvbRoViVuQxqeQL0Ct5bPXjFhlBF93e/+JyYF5cgVSd3HQzfB6M31w9esoMZYPQ+uLYusAR3WQwEazglfpbZv2uzqTdVXKt4n9VjzUt4n9VgSxhw/fcxOEqVlQPC0Wg38GYA6wlkRsDevjjQH8zoX+U0ha4CTaGcXmsQa/n2z3QFA/kqtKZ7Ca+cZntGW/hDVMFm+zbQuJhPGCCiIs32vNcW5IchruAUes3CexnU8dqe20i+uGFSzVfoF25Lm8f+HkRYPKu5lWJ6XwpOT8PkrbIygDse3B1m6wNBvQd3vBeX+z36L88YVaxyX7G9Pw6NsT0Aap9ewezgk9vmeWTPRB3pax4y/4dvrv9EX2PVqGrIqGrIqGrIqGrIqGrIqGrIqGrIqGrIqGrIqGrIqGrIqGrIqGrIqGrIqGrIqGrIqGrIqGpoo/oPUEkpTJwzgxwAAAAASUVORK5CYII=" alt="" />
                    </div>
                    <h1 className='font-bold text-lg'>My bookmarks</h1>
                </div>
                <div className='flex items-center hover:scale-95 transition dark:bg-red-500 p-2 gap-1 h-8 w-28 justify-center items-center bg-red-500 text-white hover:bg-red-700 px-5 py-3 rounded-md font-semibold m-4 sm:m-1 sm:p-2 '>
            <button onClick={handleThemeSwitch} className='hover:scale-95 transition'>
              Toggle Mode
            </button>
          </div>
                <div className='flex items-center mr-10 cursor-pointer'>
                    <div className='text-gray-400 border-r-2 border-gray-400 hover:text-black dark:text-white'>
                        <SearchSharpIcon />
                    </div>
                    <div></div>
                    <div className='dark:text-white'>
                        {/* <BookmarkBorderRoundedIcon/> */}
                        <BookmarkOutlinedIcon/>
                        </div>                    
                </div>
            </div>
            <hr />
        </div>
    )
}
export default BookmarkNavbar;