'use client'
import Link from "next/link";
// 클라이언트는 유저 브라우저에 다 노출이 됨. 검색노출에 좋지않음.

//                   props 문법 편하게 쓰려면 destructuring 문법.
export default function ListItem({result}){
  return (
    <div>
      {
        JSON.parse(result).map((item,i)=>{
          return (
            <div className="list-item" key={i}>
              <Link prefetch={false} href={`detail/${item._id.toString()}`}>
                <h4>{item.title}</h4>
              </Link>
              <Link href={`edit/${item._id.toString()}`}>수정</Link>
              {/* form으로짜면 새로고침되는데, ajax를 사용하면 새로고침안됨. */}
                {/* <button onClick={(e)=>{
                  // fetch가 GET 요청을함. then은 요청완료시 실행.
                  fetch('/api/post/delete', {
                    method: 'DELETE',
                    body : item._id
                    // 데이터 보내는것. object나 arr는 JSON.str~으로 감싸줘야함.
                    // body : JSON.stringify([1,2,3])
                  })
                  .then((r)=>{
                    if(r.status == 200) {
                      return r.json()
                    } else {
                      //서버가 에러코드전송시 실행할코드
                    }
                  })
                  .then((r)=>{ 
                    //성공시 실행할코드
                    alert(r);
                    e.target.parentElement.classList.add('del')
                  }).catch((error)=>{
                    //인터넷문제 등으로 실패시 실행할코드
                    console.log(error)
                  })

                }}>삭제</button> */}
                <button
                  onClick={(e)=>{
                    // get하면서 데이터 전송도 가능.
                    // fetch('api/test?name=leehanjoo&age=20')
                    // URL 파라미터 문법 >> { '어쩌구': 'leehanjoo' }
                    fetch(`/api/abc/${item._id}?author=${item.author}`, {
                      method: "DELETE"
                    })
                  }}
                >
                  삭제
                </button>
              <p>{item.content}</p>
            </div>
          )
        })
      }
    </div>
  )

}