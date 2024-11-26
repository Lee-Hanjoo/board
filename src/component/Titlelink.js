'use client'

import Link from "next/link"

export default function Titlelink(props){

  const {title, link, className, imgSrc} = props

  return(
    <Link 
      className={className} 
      href={title ? `/${link}` : `http://localhost:8080/${link}`}
    >
      {
        title ? 
        title
        :
        <img src={`${imgSrc}`} />
      }
    </Link>
  )
}