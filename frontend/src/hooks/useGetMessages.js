import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {   
                const {data} = await axios.get(`http://localhost:5000/api/messages/${selectedConversation._id}`, {withCredentials: true});

                console.log("Messages fetched successfully");
                
                setMessages(data);
            } catch(err) {
                toast.error(err.message)
            } finally{
                setLoading(false);
            }
        }
        if (selectedConversation?._id) getMessages();

    },[selectedConversation, setMessages])


    return {loading, messages};
}

export default useGetMessages;