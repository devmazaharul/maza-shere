import React from 'react'

export default function error({errorMsg,errStatus}) {
  return (
    <div className='bg-red-500  flex items-center justify-between mb-3 rounded-md shadow-sm'>
        <p className='text-gray-200 py-2 px-3'>{errorMsg}</p>
        <p className='text-white py-2 px-3'><button type='button' onClick={()=>errStatus(null)}> X</button></p>
    </div>
  )
}
