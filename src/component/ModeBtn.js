'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ModeBtn() {
  const router = useRouter()
  const [mode, setMode] = useState(()=>{
    if (typeof document !== 'undefined') {
      const modeCookie = (`; ${document.cookie}`).split(`; mode=`).pop().split(';')[0];
      return modeCookie || 'light';
    }
    return 'light'; 
  })

  useEffect(() => {
    const modeCookie = (`; ${document.cookie}`).split(`; mode=`).pop().split(';')[0] || 'light';

    if (!modeCookie) {
      document.cookie = `mode=light; max-age=3600`
    }

    setMode(modeCookie || 'light')
  }, [])

  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    document.cookie = `mode=${newMode}; max-age=3600`
    setMode(newMode)
    router.push(window.location.pathname)
  }

  return (
    <button
      className={`modeBtn ${mode}`}
      onClick={toggleMode}
    >
      <img src="/assets/icon/icon_light.svg" alt="icon" />
      <img src="/assets/icon/icon_dark.svg"  alt="icon"/>
    </button>
  )
}
