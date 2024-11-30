'use client'

import Link from "next/link"

export default function Titlelink(props){

  const {title, link, className, imgSrc} = props

  return(
    <Link 
      className={className} 
      href={title ? `/${link}` : `${process.env.NEXTAUTH_URL}/${link}`}
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