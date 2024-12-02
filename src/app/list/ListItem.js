'use client'

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
// 클라이언트는 유저 브라우저에 다 노출이 됨. 검색노출에 좋지않음.

//                   props 문법 편하게 쓰려면 destructuring 문법.
export default function ListItem({result, session}){
  const router = useRouter();
    
  return (
    <ul className="listWrap">
    {
      JSON.parse(result).map(async (item,i)=>{
        return (
          <li key={i}>
            <div className="contents">
              <Link prefetch={false} href={`detail/${item._id.toString()}`}>
                <h4 className="title">{item.title}</h4>
                <p className="date">2024. 11. 21</p>
                <p className="desc">{item.content}</p>
                {
                  item.file && 
                  <div className="listImgWrap">
                    <p>.</p>
                    {/* <p>(+4)</p> */}
                    <ul>
                      <li>
                        <img src={`https://s3.ap-northeast-2.amazonaws.com/leehanjooboard/${item.file}`} />
                      </li>
                    </ul>
                  </div>
                }
              </Link>
              <div className="profileWrap">
                <img src="/assets/icon/icon_profile.svg" />
                <p>{item.author}</p>
              </div>
              <div className="btnWrap">
                {
                  session && item.author === session.user.name ?
                  <>
                    <Link href={`edit/${item._id.toString()}`}>
                      <img src="/assets/icon/icon_edit.svg"/>
                    </Link>
                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        try {
                          const res = await fetch(`/api/abc/${item._id}?author=${item.author}`, {
                            method: "DELETE",
                          });
                          // if (res.ok) {
                          //   router.refresh(); // 페이지 새로고침
                          // } else {
                          //   const error = await res.json();
                          //   console.error("삭제 실패:", error);
                          //   alert("삭제 실패! " + error.message);
                          // }
                        } 
                        catch (error) {
                          console.error("요청 오류:", error);
                          alert("요청 중 오류가 발생했습니다.");
                        }
                      }}
                    >
                      <img src="/assets/icon/icon_delete.svg" />
                    </button>
                  </>
                  :
                  session ?
                  <>
                    <Link href={`/list`} className="noEvent" onClick={(e)=>{e.preventDefault()}} >
                      <img src="/assets/icon/icon_edit.svg"/>
                    </Link>
                    <button className="noEvent">
                      <img src="/assets/icon/icon_delete.svg" />
                    </button>
                  </>
                  :
                  <>
                    <Link href={`/list`} onClick={signIn}>
                      <img src="/assets/icon/icon_edit.svg"/>
                    </Link>
                    <button onClick={signIn}>
                      <img src="/assets/icon/icon_delete.svg" />
                    </button>
                  </>
                }
              </div>
            </div>
          </li>
          )
        })
      }
    </ul>
  )

}
