import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className='flex flex-row items-center p-2 py-1 rounded-md hover:bg-sky-500 cursor-pointer'>
            <div className='avatar avatar-online mr-2'>
                <div>
                    <img src="https://i.pravatar.cc/250?u=mail@ablaksh.co.uk" className='w-12 rounded-full' alt="user avatar" />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between items-center'>
                    <p className='font-bold text-gray-200'>El Moza</p>
                    <span className='text-xl'>🔥</span>
                </div>
            </div>
        </div>

        
        <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation