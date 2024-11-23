'use client'

import Link from "next/link"

export default function Titlelink(props){

  const {title, link} = props

  return(
    <Link className="title" href={`/${link}`}>{title}</Link>
  )
}