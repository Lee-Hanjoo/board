'use client'

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink(){
  
  // 클라이언트 컴포넌트 안에서만 사용가능.
  let router = useRouter()
  // 현재 url 출력
  let a = usePathname()
  // search parameter 출력
  let b = useSearchParams()
  // 유저가 입력한 dynamic route 출력 
  let c = useParams()

  return (
    // router.back(), forward(), refresh(), prefetch('/detail/1234')
    <button onClick={()=>{router.push('/list')}}>버튼</button>
  )  
}