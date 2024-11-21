'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function LoginBtn(){
  const [mode, setMode] = useState('light')

  return(
    <div className='btnWrap'>
      <button onClick={()=>{ signIn() }}>로그인</button>
    </div>
  )
}