'use client'

import { signIn } from 'next-auth/react'

export default function SignInBtn(){

  return(
    <button className='signInBtn' onClick={()=>{ signIn() }}>
        <img src='/assets/icon/icon_profile.svg' />
    </button>
  )
}