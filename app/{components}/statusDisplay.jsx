import React from 'react'

const StatusDisplay = ({status}) => {

  const getColor=(status)=>{
    let color="bg-slate-700"
    switch(status.toLowerCase()){
      case "done":
        color="bg-green-600";
        return color;
      case "started":
        color="bg-yellow-600";
        return color;
      case "not started":
        color="bg-red-600";
        return color 
    }
    return color
  }
  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs front-semibold text-gray-200 ${getColor(status)}`}>
        {status}
    </span>
  )
}

export default StatusDisplay