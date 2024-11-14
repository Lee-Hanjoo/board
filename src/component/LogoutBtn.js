'use client'

import { signOut } from 'next-auth/react'

export default function LogoutBtn(props){

  const {name} = props

  return(
    <div>
      <p>{name}</p>
      <button onClick={()=>{ signOut() }}>로그아웃</button>
    </div>
  )
}