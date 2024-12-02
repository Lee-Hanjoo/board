'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LinkBtn(props){

    const router = useRouter()

  const {link, className} = props

  return(
    <button 
      className={className}
      onClick={()=>{router.push('/list')}}
    >
        <img src={`/assets/icon/icon_list.svg`} />
    </button>
  )
}