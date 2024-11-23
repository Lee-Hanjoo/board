'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function LoginBtn(){
  const [mode, setMode] = useState('light')

  return(
    <button className='loginBtn' onClick={()=>{ signIn() }}>
      <img src='/assets/icon/icon_profile.svg' />
    </button>
  )
}