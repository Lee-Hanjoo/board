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
    <>
      <div className="commentListWrap">
        <div className="commentNum">
          <p>Comment</p>
          <span>{commentData.length}</span>
        </div>
        {
          commentData.length > 0 ?
            <ul >
                {
                  commentData.map((v,i)=>{
                    return (
                    <li key={i}>
                      <p className="comment">{v.comment}</p>
                      <div className="authorWrap">
                        <div>
                          <img src="/assets/icon/icon_profile.svg" />
                          <p>{v.authorName}</p>
                        </div>
                        <span className="date">2024. 11. 26</span>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            :
            <div className="nodata">
              <p>댓글이 없습니다.</p>
            </div>
        }
      </div>
      <div className="commentInputWrap">
        <input type="text" placeholder="Add Text..." onChange={(e)=>{setComment(e.target.value)}} />
        <button 
          className="commentBtn"
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
        >
          <img src="/assets/icon/icon_comment.svg" />
        </button>
      </div>
    </>
  )
}