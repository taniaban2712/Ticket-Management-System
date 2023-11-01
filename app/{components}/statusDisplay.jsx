import React from 'react'

const StatusDisplay = ({status}) => {
  return (
    <span className='inline-block rounded-full px-2 py-1 text-xs front-semibold text-gray-200 bg-pink-800'>
        {status}
    </span>
  )
}

export default StatusDisplay