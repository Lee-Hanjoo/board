'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
// import {cookies} from "next/headers"

export default function ModeBtn(){
  let router = useRouter()
  let modeCookie = (`; ${document.cookie}`).split(`; mode=`).pop().split(';')[0]
  const [mode, setMode] = useState('light')

  useEffect(()=>{
    if (modeCookie === 'light') {
      document.cookie = `mode=dark; max-age=3600`
    } else {
      document.cookie = `mode=light; max-age=3600`
    }
  },[])
  
  return(
    <button
      className={`modeBtn ${mode}`}
      onClick={()=>{ 
        if (modeCookie === 'dark') {
          document.cookie = `mode=light; max-age=3600`
          setMode('light')
          router.refresh()
        } else {
          document.cookie = `mode=dark; max-age=3600`
          setMode('dark')
          router.refresh()
        }
      }}
    >
      <img src="/assets/icon/icon_light.svg" />
      <img src="/assets/icon/icon_dark.svg" />
    </button>
  )
}