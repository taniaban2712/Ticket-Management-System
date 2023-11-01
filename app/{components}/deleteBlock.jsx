"use client";

import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation';
import React from 'react'



const DeleteBlock = ({id}) => {
  
  const router=useRouter()
  const deleteTicket=async()=>{

    
    const res=await fetch(`http://localhost:3000/api/Tickets/${id}`,{
      method:"DELETE",
    });
    if(res.ok){
      router.refresh()
      router.push("/")
    }

  }
  return (
    <FontAwesomeIcon icon={faDeleteLeft} className='text-red-400 hover:cursor-pointer hover:text-red-200' onClick={deleteTicket}/>
  )
}

export default DeleteBlock