'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
// import {cookies} from "next/headers"

export default function ModeBtn(){
  let router = useRouter()
  const [mode, setMode] = useState('light')

  useEffect(()=>{
    let modeCookie = (`; ${document.cookie}`).split(`; mode=`).pop().split(';')[0]
    if (modeCookie === 'light') {
      document.cookie = `mode=dark; max-age=3600`
    } else {
      document.cookie = `mode=light; max-age=3600`
    }
  },[])
  
  // let result = cookies().get('mode')
  // console.log(result);

  return(
    <button onClick={()=>{ 
      let modeCookie = (`; ${document.cookie}`).split(`; mode=`).pop().split(';')[0]
      if (modeCookie === 'light') {
        document.cookie = `mode=dark; max-age=3600`
        setMode('light')
        router.refresh()
      } else {
        document.cookie = `mode=light; max-age=3600`
        setMode('dark')
        router.refresh()
      }
      
    }}>
      {
        mode === 'light' ?
        `☀️`
        :
        `🌙`
      }
    </button>
  )
}