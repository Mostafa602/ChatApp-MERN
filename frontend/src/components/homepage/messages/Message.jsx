import React from 'react'
import useConversation from '../../../zustand/useConversation';
import { useAuthContext } from '../../../context/AuthContext';


const Message = ({message}) => {
  const {authUser} = useAuthContext();

  const {selectedConversation} = useConversation();
  console.log(authUser.profilePic)
  const notFromMe = message.senderId === selectedConversation._id;

  const formattedTime = new Date(message.createdAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });


  return (
    <div className={`chat ${notFromMe ? "chat-start" : "chat-end"}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img
                alt="Tailwind CSS chat bubble component"
                src={notFromMe ? selectedConversation.profilePic : authUser.profilePic}
            />
            </div>
        </div>
        <div className={`chat-bubble rounded-tl-xl rounded-tr-xl ${notFromMe ? " rounded-br-xl" : "rounded-bl-xl bg-sky-500"}`}>{message.message}</div>
        <div className="chat-footer text-2xs "><time className="text-2xs opacity-50">{formattedTime}</time></div>
    </div>
  )
}

export default Message