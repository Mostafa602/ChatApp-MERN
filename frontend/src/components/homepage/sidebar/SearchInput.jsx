import React, {useState} from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../../zustand/useConversation';
import useGetConversations from '../../../hooks/useGetConversations';
import toast from 'react-hot-toast';


const SearchInput = () => {

  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) return toast.error("Search term must be at least 3 characters long");
    
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No such user found")
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-row items-center gap-2 pt-4 mx-3'>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search..' className='input bg-black/50 input-bordered rounded-full' />
      <button className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-5 h-5 outline-none'/>
      </button>
    </form>
  )
}

export default SearchInput