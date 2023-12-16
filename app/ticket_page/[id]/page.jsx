import TicketForm from '@/app/{components}/TicketForm'
import React from 'react'
import Ticket from '@/app/models/Ticket.js'
 
 
 
 
const getTicketById = async (id) => {
 
  const ticket = await Ticket.findOne({ _id: id });
  return { foundTicket: ticket }
}
let updateTicketData = {};
 
export const Ticket_Page = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true
 
  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  }
  else {
    updateTicketData = {
      _id: "new"
    }
  }
  return (
    <TicketForm ticket={updateTicketData} />
  )
}
 
export default Ticket_Page
 