import TicketCard from "./{components}/TicketCard"

const getTicket= async()=>{
  try{
    const res=await fetch("http://localhost:3000/api/Tickets", {
      cache:"no-store"
    })
    return res.json();
  }
  catch(err){
    console.log("Failed to get tickets", err);
  }
}

const Dashboard = async () => {
  const {tickets}= await getTicket();

  const uniqueCategrories=[
    ... new Set(tickets?.map(({category})=>category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets && uniqueCategrories?.map((unqiueCategory,categoryIndex)=><div key={categoryIndex} className="mb-4">
          <h2>{unqiueCategory}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {tickets.filter((ticket)=>ticket.category==unqiueCategory).map((filteredTicket,_index)=>(
              <TicketCard id={_index} key={_index} ticket={filteredTicket}/>
            ))}
          </div>

        </div>)}
      </div> 
    </div>
  )
}

export default Dashboard