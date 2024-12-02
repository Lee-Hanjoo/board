'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DarkMode(){
  let router = useRouter()
  const [mode, setMode] = useState('')

  useEffect(()=>{
    let cookieRes = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
    if (cookieRes == '') {
      document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400);
      setMode('light')
    }
  },[mode])

  return (
    <button
      className={`modeBtn ${mode}`}
      onClick={()=>{ 
        let cookieRes = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
        if (cookieRes == 'light') {
          document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400);
          setMode('dark')
          router.refresh()
        } else {
          document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400);
          setMode('light')
          router.refresh()
        }
     }}>
      <img src="/assets/icon/icon_light.svg" alt="icon" />
      <img src="/assets/icon/icon_dark.svg"  alt="icon"/>
     </button>
  )
} 



  // return (
  //   <button
  //     className={`modeBtn ${cookieRes}`}
  //     onClick={()=>{ 
  //       let cookieRes = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
  //       if (cookieRes == 'light') {
  //         document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400)
  //         router.refresh()
  //       } else {
  //         document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
  //         router.refresh()
  //       }
  //      }}
  //   >
  //     <img src="/assets/icon/icon_light.svg" alt="icon" />
  //     <img src="/assets/icon/icon_dark.svg"  alt="icon"/>
  //   </button>
  // )