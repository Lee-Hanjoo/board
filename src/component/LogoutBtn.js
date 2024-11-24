'use client'

import { signOut } from 'next-auth/react'

export default function LogoutBtn(props){

  const {name} = props

  return(
    <button className='logoutBtn' onClick={()=>{ signOut() }}>{name}</button>
  )
}