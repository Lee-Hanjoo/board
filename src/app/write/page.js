'use client'

import { useState } from "react"

export default async function Write() {
  const [src, setSrc] = useState('')

  return (
    <div id="write">
      <div className="container">
        <form action="/api/post/new" method="POST">
          {/* name을 써줘야 서버로 데이터가 전송됨. title: value 이런식으로. */}
          <div className="writeWrap">
            <input type="text" name="title" placeholder="제목" />
            <textarea name="content" placeholder="내용" rows={10} />
            <input type="file" accept="image/*" 
              onChange={async(e)=>{
                let file = e.target.files[0]
                let fileName = encodeURIComponent(file.name)
                let res = await fetch(`/api/post/image?file=${fileName}`)
                res = await res.json()
                
                //S3 업로드
                const formData = new FormData()
                Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
                  formData.append(key, value)
                })
                let uploadResult = await fetch(res.url, {
                  method: 'POST',
                  body: formData,
                })
                console.log(uploadResult)

                if (uploadResult.ok) {
                  setSrc(uploadResult.url + '/' + fileName)
                } else {
                  console.log('실패')
                }
              }}
            />
            <div className="imgWrap">
              {
                src ? 
                <img src={src} />
                :
                <div className="noData">
                  <p>데이터가 없습니다.</p>
                </div>
              }
            </div>
          </div>
          <div className="btnWrap">
            <button type="submit" className="writeBtn">글 작성</button>
          </div>
        </form>
      </div>
    </div>
  )
}