import TicketForm from '@/app/{components}/TicketForm'
import React from 'react'


const getTicketById = async(id)=>{
  const res=await fetch(`http://localhost:3000/api/Tickets/${id}`,{
    cache:"no-store"
  })
  if(!res.ok){
    throw new Error("Failed to get the ticket")
  }
  return res.json();
}
let updateTicketData={};

export const Ticket_Page =async ({params}) => {
  const EDITMODE=params.id==="new"?false:true
  
  if(EDITMODE){
    updateTicketData=await getTicketById(params.id);
    updateTicketData=updateTicketData.foundTicket;
  }
  else{
    updateTicketData={
      _id: "new"
    }
  }
  return (
     <TicketForm ticket={updateTicketData}/>
  )
}

export default Ticket_Page
