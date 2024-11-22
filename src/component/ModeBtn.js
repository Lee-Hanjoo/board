'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
// import {cookies} from "next/headers"

export default function ModeBtn(){
  let router = useRouter()
  let modeCookie = (`; ${document.cookie}`).split(`; mode=`).pop().split(';')[0]
  const [mode, setMode] = useState('☀️')

  useEffect(()=>{
    if (modeCookie === 'light') {
      document.cookie = `mode=dark; max-age=3600`
    } else {
      document.cookie = `mode=light; max-age=3600`
    }
  },[])
  
  return(
    <button onClick={()=>{ 
      if (modeCookie === 'light') {
        document.cookie = `mode=dark; max-age=3600`
        setMode('🌙')
        router.refresh()
      } else {
        document.cookie = `mode=light; max-age=3600`
        setMode('☀️')
        router.refresh()
      }
    }}>
      {mode}
    </button>
  )
}