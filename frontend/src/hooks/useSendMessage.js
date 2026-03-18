import React from 'react'
import {useState} from "react"
import toast from 'react-hot-toast';
import axios from "axios"
import { useAuthContext } from '../context/AuthContext';
import useConversation from '../zustand/useConversation';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            console.log(selectedConversation._id)
            const {data} = await axios.post(`http://localhost:5000/api/messages/send/${selectedConversation._id}`,{message},{withCredentials: true})

            setMessages([...messages, data]);
        } catch(err) {
            toast.err(err.message);
        } finally {
            setLoading(false);
        }
    }


    return {sendMessage, loading};
}

export default useSendMessage;