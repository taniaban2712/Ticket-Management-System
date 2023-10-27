import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTicket} from '@fortawesome/free-solid-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between bg-nav p-4'>
        <div className='flex items-center space-x-4'>
            <Link href="/">
                <FontAwesomeIcon icon={faHome} className='icon'/>
            </Link>
            <Link href="/ticket_page/new">
            <FontAwesomeIcon icon={faTicket} className='icon'/>
            </Link>
        </div>
        <div>
            <p className="text-default-text">Tania Banerjee</p>
        </div>
    </nav>
  )
}

export default Nav