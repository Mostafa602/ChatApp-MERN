import React from 'react'
import Messages from "./Messages"
import MessageInput from "./MessageInput"
import { TiMessages } from "react-icons/ti";

const NoChatSelected = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-5'>
      <h2 className='text-2xl font-semibold'>Welcome Mostafa_25</h2>
      <h2 className='text-xl'>Select a chat to start messaging</h2>
      <TiMessages className="text-3xl md:text-6xl" />
    </div>
  )
}

const MessageContainer = () => {

  const noChatSelected = true;

  return (
    <div className='flex flex-col md:min-w-[450px] lg:min-w-[650px]'>
      {noChatSelected ? <NoChatSelected /> : (
        <>
          <div className='bg-black/50 p-3 rounded-lg'>
            <p>To: <span>El Moza</span></p>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}



export default MessageContainer