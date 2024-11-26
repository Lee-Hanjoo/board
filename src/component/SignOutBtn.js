'use client'

import { signOut } from 'next-auth/react'

export default function SignOutBtn(props){

  const {name} = props

  return(
    <button className='signOutBtn' onClick={()=>{ signOut() }}>{name}</button>
  )
}