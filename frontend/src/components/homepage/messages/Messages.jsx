import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import useGetMessages from "../../../hooks/useGetMessages"
import MessageSkeleton from "../../skeletons/MessageSkeleton"
import useListenMessages from "../../../hooks/useListenMessages"

const Messages = () => {

  const {loading, messages} = useGetMessages();
  const lastMessageRef = useRef();
  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({behavior: "smooth"})
      }
    },150)
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

        {!loading && messages.length === 0 && (
          <p className='text-center pt-2 font-semibold'>Send a message to start a conversation</p>
        )}

        {!loading && messages.length !== 0 && messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
        
    </div>
  )
}

export default Messages