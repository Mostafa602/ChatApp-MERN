import React from 'react'
import Sidebar from '../components/homepage/sidebar/Sidebar'
import MessageContainer from "../components/homepage/messages/MessageContainer"
const HomePage = () => {
  return (
    <div className='flex border border-black/50 h-[700px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default HomePage