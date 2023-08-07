import React from 'react'
import Navbar from '../Components/Navbar'
import Boards from '../Components/Boards'
import CreateBoard from '../Components/CreateBoard'


const Dashboard = () => {
    return (
        <div className='dark:bg-black'>
            <div className='dark:bg-black'>
            <Navbar />
            </div>
            <Boards/>
        </div>
    )
}

export default Dashboard