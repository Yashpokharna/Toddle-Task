import React from 'react'
import PostNavbar from '../Components/PostNavbar'
import PostContent from '../Components/PostContent'
import CreatePost from '../Components/CreatePost'

const Posts = () => {
  return (
    <div>
        <PostNavbar/>
        <PostContent/>
        <div className='h-2 dark:bg-black'></div>
    </div>
  )
}

export default Posts