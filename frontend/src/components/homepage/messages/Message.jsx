import React from 'react'

const Message = () => {
  return (
    <div class="chat chat-start ">
        <div class="chat-image avatar">
            <div class="w-10 rounded-full">
            <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
            </div>
        </div>
        <div class="chat-header">
            El Moza
            <time class="text-xs opacity-50">12:45</time>
        </div>
        <div class="chat-bubble rounded-tl-xl rounded-tr-xl rounded-br-xl">You were the Chosen One!</div>
        <div class="chat-footer opacity-50">Delivered</div>
    </div>
  )
}

export default Message