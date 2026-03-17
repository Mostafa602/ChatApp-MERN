import React from 'react'
import Conversation from './Conversation'
const Conversations = () => {
  return (
    <div className='pb-2 flex flex-col overflow-auto'>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  )
}

export default Conversations