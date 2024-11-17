'use client';

import { useEffect, useState } from "react";

export default function Comment(props) {

  const { parentId, author } = props

  const [comment, setComment] = useState('')
  const [commentData, setCommentData] = useState([])
  const [dataLoad, setDataLoad] = useState(false)

  useEffect(()=>{
    fetch(`/api/comment/list?parentId=${parentId}`).then(res=>res.json())
    .then((result)=>{
      setCommentData(result)
    })
  },[dataLoad])

  return (
    <div>
        <div>
          {
            commentData.length > 0 ?
              <ul>
                <li>
                  {
                    commentData.map((v,i)=>{
                      return (
                        <div key={i}>
                          <p>
                            {v.comment}
                          </p>
                          <p>{v.authorName}</p>
                        </div>
                      )
                    })
                  }
                </li>
              </ul>
              :
              <div><p>댓글이 없습니다.</p></div>
          }
        </div>
        <input type="text" onChange={(e)=>{setComment(e.target.value)}} />
        <button 
          onClick={()=>{
            fetch('/api/comment/new', {
              method: 'POST',
              // 오브젝트나, 어레이는 strngfy로 감싸줘야함
              body : JSON.stringify({comment, parentId, author})
            })
            // 새로운 댓글 업데이트. state에 넣어서 db에서 다시 불러오기. html 실시간 생성 수정 삭제가 client-side rendering의 장점임
            .then((result)=>{
              setDataLoad(result.ok)
            })
          }}
        >댓글전송</button>
      </div>
  )
}