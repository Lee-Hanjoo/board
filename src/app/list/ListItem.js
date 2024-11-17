'use client'
import Link from "next/link";
// 클라이언트는 유저 브라우저에 다 노출이 됨. 검색노출에 좋지않음.

//                   props 문법 편하게 쓰려면 destructuring 문법.
export default function ListItem({result, session}){
  return (
    <ul className="listWrap">
    {
      JSON.parse(result).map((item,i)=>{
        return (
          <li key={i}>
            <Link prefetch={false} href={`detail/${item._id.toString()}`}>
              <h4 className="title">{item.title}</h4>
            </Link>
              <p className="content">{item.content}</p>
            </li>
          )
        })
      }
    </ul>
  )

}
