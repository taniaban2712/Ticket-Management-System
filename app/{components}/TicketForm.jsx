"use client";

import React,{useState} from 'react'
import { useRouter } from 'next/navigation'

const TicketForm = ({ticket}) => {

  const router=useRouter()

  const EDITMODE=ticket._id==="new"? false : true

  const startingTicketData={
    title:"",
    description:"",
    priority:1,
    status:"not started",
    progress:0,
    category:"Hardware Problem",
  };

  if(EDITMODE){
    startingTicketData["title"]=ticket.title;
    startingTicketData["description"]=ticket.description;
    startingTicketData["status"]=ticket.status;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["priority"]=ticket.priority;
    startingTicketData["categpry"]=ticket.category;
  }

  const [formData, setFormData]=useState(startingTicketData);
  
  const handleChange=(e)=>{
    const value=e.target.value;
    const name=e.target.name;

    setFormData((prevState)=>({
      ...prevState,
      [name]:value,
    }));

  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }

    router.refresh();
    router.push("/");
  };


  return (
    <div className='flex justify-center'>
      <form className='flex flex-col gap-3 w-1/2' method="post" onSubmit={handleSubmit}>
        <h3>{EDITMODE?"Update your Ticket":"Create your Ticket"}</h3>
        <label>Title*</label>
        <input id="title" name="title" type="text" onChange={handleChange} required={true} value={formData.title}/>
        <label>Description*</label>
        <textarea id="description" name="description" onChange={handleChange} required={true} value={formData.description}/>
        <label>Categories*</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        <label>Priority*</label>
        <div>
          <input id="priority-1" name="priority" type="radio" onChange={handleChange} value={1} checked={formData.priority == 1}/>
          <label>1</label>
          <input id="priority-1" name="priority" type="radio" onChange={handleChange} value={2} checked={formData.priority == 2}/>
          <label>2</label>
          <input id="priority-1" name="priority" type="radio" onChange={handleChange} value={3} checked={formData.priority == 3}/>
          <label>3</label>
          <input id="priority-1" name="priority" type="radio" onChange={handleChange} value={4} checked={formData.priority == 4}/>
          <label>4</label>
          <input id="priority-1" name="priority" type="radio" onChange={handleChange} value={5} checked={formData.priority == 5}/>
          <label>5</label>
        </div>
        <label>Progress</label>
        <input type="range" id="progress" name="progress" value={formData.progress} min="0" max="100" onChange={handleChange}/>
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input type="submit" className='button' value={EDITMODE?"Update Ticket":"Create Ticket"}/>
      </form>
    </div>
  )
}

export default TicketForm
