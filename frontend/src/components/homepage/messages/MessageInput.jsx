import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../../hooks/useSendMessage"

const MessageInput = () => {

  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  }


  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type="text" className='w-full text-sm rounded-xl p-2.5 bg-black/50' placeholder='Send a message' onChange={(e) => setMessage(e.target.value)} value={message} />
            <button className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer ${loading ? "" : "hover:bg-sky-500"}  p-2 rounded-lg`}>
                {loading ? <span className='loading loading-spinner h-5 w-5'></span> : <IoSend />}
            </button>
        </div>
    </form>
  )
}

export default MessageInput