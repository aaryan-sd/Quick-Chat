import React from 'react'
import Profile from '../components/Profile/Profile'
import Sidebar from '../components/Sidebar/Sidebar'
import MsgBox from '../components/MsgBox/MsgBox'

const Home = () => {
  return (
    <>
      <div className='flex h-[600px]'>
        <div className='w-[350px]'>
          <Profile/>
          <Sidebar/>
        </div>
        <div>
          <MsgBox/>
        </div>
      </div>
    </>
  )
}

export default Home
