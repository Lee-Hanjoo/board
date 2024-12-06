'use client'

import Link from "next/link"

export default function Titlelink(props){

  const {title, link, className, imgSrc} = props

  return(
    <Link 
      className={className} 
      href={`/${link}`}
    >
      {imgSrc ? 
        <img src={`${imgSrc}`} /> 
        :
        title
      }
    </Link>
  )
}