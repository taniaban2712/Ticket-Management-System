import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import DeleteBlock from './deleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './statusDisplay'

const TicketCard = ({ticket}) => {
  return (
    <div className='flex flex-col bg-ard hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
        <div className='flex mb-3'>
            <PriorityDisplay priority={ticket.priority}/>
            <div className='ml-auto'>
            <DeleteBlock/>
            </div>
        </div>
        <h4>Ticket Title</h4>
        <hr className='h-px border-0 bg-page mb-2'/>
        <p className='whitespace-pre-wrap'>This is the ticket description</p>
        <div className='flex-grow'></div>
        <div className='flex mt-2'>
          <div className='flex flex-col'>
            <p className='text-xs my-1'>12:11PM 28/10/23</p>
            <ProgressDisplay/>
          </div>
          <div className='ml-auto flex items-end'>
            <StatusDisplay/>
          </div>
        </div>
    </div>
    
  )
}

export default TicketCard