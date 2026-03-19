import {useEffect} from 'react'
import {useSocketContext} from '../context/SocketContext'
import useConversation from "../zustand/useConversation"

const useListenMessages = () => {
  const {socket} = useSocketContext()
  const {messages, setMessages, selectedConversation} = useConversation();

  useEffect(() => {
    socket?.on("newMessage",(newMessage) => {
      // Only add to the current message list if the message is from the user we are chatting with
      if (newMessage.senderId === selectedConversation?._id) {
        setMessages([...messages, newMessage]);
      }
    })

    return () => socket?.off("newMessage")
  },[socket, setMessages, messages, selectedConversation]);
}

export default useListenMessages