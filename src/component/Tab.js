'use client'

import Link from "next/link"
import { useState } from "react"

export default async function Tab({session}){

  const [active, setActive] = useState('list')

  return(
    <div className="tabWrap">
      <Link 
        className={`title ${active === 'list' ? 'active' : ''}`}
        href='/list' 
        onClick={()=>{setActive('list')}}
      >
        List
      </Link>
      {
        session &&
        <Link 
          className={`title ${active === 'write' ? 'active' : ''}`} 
          href='/write' 
          onClick={()=>{setActive('write')}}
        >
          Write
        </Link>
      }
    </div>
  )
}