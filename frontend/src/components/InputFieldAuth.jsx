import React from 'react'

const InputFieldAuth = ({labelName, placeHolder, type, onChange}) => {
  return (
    <div>
        <label className='label p-2'>
            <span className='text-base label-text'>{labelName}</span>
        </label>
        <input type={type} placeholder={placeHolder} className='input input-bordered w-full h-10' onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

export default InputFieldAuth