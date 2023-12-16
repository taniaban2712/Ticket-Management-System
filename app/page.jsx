import TicketCard from "./{components}/TicketCard"
import React from "react";
import Ticket from '@/app/models/Ticket.js'
 
 
const getTicket = async () => {
  try {
 
    const tickets = await Ticket.find();
    console.log((await tickets).length);
    return { foundTicket: tickets }
  }
  catch (err) {
    console.log("Failed to get tickets", err);
  }
}
 
const Dashboard = async () => {
  const data = await getTicket();
  if (!data) {
    return <div>Failed to load tickets</div>
  }
 
  const tickets = data.foundTicket;
  console.log(tickets);
 
  const uniqueCategrories = [
    ... new Set(tickets?.map(({ category }) => category)),
  ]
 
  return (
    <div className="p-5">
      <div>
        {tickets && uniqueCategrories?.map((unqiueCategory, categoryIndex) => (<div key={categoryIndex} className="mb-4">
          <h2>{unqiueCategory}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {tickets.filter((ticket) => ticket.category === unqiueCategory).map((filteredTicket, _index) => (
              <TicketCard id={_index} key={_index} ticket={filteredTicket} />
            ))}
          </div>
 
        </div>))}
      </div>
    </div>
  )
}
 
export default Dashboard;