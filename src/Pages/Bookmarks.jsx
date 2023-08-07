import React from 'react'
import BookmarkNavbar from '../Components/BookmarkNavbar'
import BookmarkCard from '../Components/BookmarkCard'

const Bookmarks = () => {
  return (
    <div className='bg-cyan-100'>
        <BookmarkNavbar/>
        <div className='flex'>
        <BookmarkCard/>
        <BookmarkCard/>
        <BookmarkCard/>
        </div>
    </div>
  )
}

export default Bookmarks