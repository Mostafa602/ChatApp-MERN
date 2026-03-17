import React from 'react'
import { BiLogOut } from "react-icons/bi";


const LogoutButton = () => {
  return (
    <div className='mt-auto flex cursor-pointer'>
        <div className='flex flex-row items-center mb-2 ml-2 rounded-full pr-3 hover:bg-black bg-black/50'>
          <BiLogOut  className="w-6 h-6 text-white cursor-pointer m-3 rounded-full"/>
          <p>Log out</p>
        </div>
    </div>
  )
}

export default LogoutButton