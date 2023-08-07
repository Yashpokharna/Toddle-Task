import React from 'react'
import PostNavbar from '../Components/PostNavbar'
import PostCard from '../Components/PostCard'

const Final = () => {
  return (
    <div className='bg-cyan-100'>
        <PostNavbar/>
        <div className='flex'>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        </div>
    </div>
  )
}

export default Final