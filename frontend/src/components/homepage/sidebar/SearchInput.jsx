import React from 'react'
import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
  return (
    <form className='flex flex-row items-center gap-2 pt-4 mx-3'>
      <input type="text" placeholder='Search..' className='input bg-black/50 input-bordered rounded-full' />
      <button className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-5 h-5 outline-none'/>
      </button>
    </form>
  )
}

export default SearchInput