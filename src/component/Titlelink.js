'use client'

import Link from "next/link"

export default function Titlelink(props){

  const {title, link, className} = props

  return(
    <Link 
      className={className} 
      href={`/${link}`}
    >
      {title}
    </Link>
  )
}