'use client'

import { signOut } from 'next-auth/react'

export default function LogoutBtn(props){

  const {name} = props

  console.log(props);
  

  return(
    <button className='logoutBtn' onClick={()=>{ signOut() }}>{name}</button>
  )
}