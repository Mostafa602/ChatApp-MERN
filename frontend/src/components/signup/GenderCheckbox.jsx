import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex gap-3 mt-5'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Male</span>
                <input type="checkbox" className='checkbox checked:bg-blue-500 border-slate-900'/>
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Female</span>
                <input type="checkbox" className='checkbox checked:bg-blue-500 border-slate-900'/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox