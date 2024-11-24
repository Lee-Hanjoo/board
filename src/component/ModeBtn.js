'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ModeBtn() {
  const router = useRouter()
  const [mode, setMode] = useState('light')

  useEffect(() => {
    const modeCookie = (`; ${document.cookie}`).split(`; mode=`).pop().split(';')[0] || 'light';
    setMode(modeCookie);

    if (!modeCookie) {
      document.cookie = `mode=light; max-age=3600`
    }
  }, [])

  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    document.cookie = `mode=${newMode}; max-age=3600`
    setMode(newMode)
    router.refresh()
  }

  return (
    <button
      className={`modeBtn ${mode}`}
      onClick={toggleMode}
    >
      <img src="/assets/icon/icon_light.svg" />
      <img src="/assets/icon/icon_dark.svg" />
    </button>
  )
}
