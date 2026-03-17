import React from 'react'
import { IoSend } from "react-icons/io5";


const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type="text" className='w-full text-sm rounded-xl p-2.5 bg-black/50' placeholder='Send a message' />
            <div className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-sky-500  p-2 rounded-lg'>
                <IoSend className=""/>
            </div>
        </div>
    </form>
  )
}

export default MessageInput