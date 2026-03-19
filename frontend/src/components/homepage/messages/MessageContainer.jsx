import React, { useEffect } from 'react'
import Messages from "./Messages"
import MessageInput from "./MessageInput"
import { TiMessages } from "react-icons/ti";
import useConversation from '../../../zustand/useConversation';
import { useAuthContext } from '../../../context/AuthContext';
const NoChatSelected = () => {

  const {authUser} = useAuthContext();

  return (
    <div className='flex flex-col items-center justify-center h-full gap-5'>
      <h2 className='text-2xl font-semibold'>Welcome {authUser.fullName}</h2>
      <h2 className='text-xl'>Select a chat to start messaging</h2>
      <TiMessages className="text-3xl md:text-6xl" />
    </div>
  )
}

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    // Clean up function when the component unmounts
    return () => setSelectedConversation(null);
  },[setSelectedConversation])


  return (
    <div className='flex flex-col md:min-w-[450px] lg:min-w-[650px]'>
      {!selectedConversation ? <NoChatSelected /> : (
        <>
          <div className='bg-black/50 p-3 rounded-lg'>
            <p>To: <span className='font-bold'>{selectedConversation.fullName}</span></p>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}



export default MessageContainer