'use client'

import Titlelink from "@/component/Titlelink"
import { useState } from "react"

export default function Write() {

  const [src, setSrc] = useState('')

  return (
    <div id="write" className="container">
      <div className="inner">
        <form action="/api/post/new" method="POST">
          {/* name을 써줘야 서버로 데이터가 전송됨. title: value 이런식으로. */}
          <div className="writeWrap">
            <input type="text" name="title" className="title" placeholder="Title" />
            <textarea name="content" className="content" placeholder="Add Text..." rows={10} />
            <div className="imgWrap">
              <div className="imgListWrap" >
                {/* {src && src.map((item,index)=>{
                  return (
                    <img key={index} src={item} style={{marginRight: 16}}/>
                  )
                })} */}
                {
                  src &&
                  <img src={src} style={{marginRight: 16}}/>
                }
              </div>
              {src === '' && 
                <label htmlFor="file">
                  <div className="fileUploadWrap">
                    <img src="/assets/icon/icon_imgupload.svg" />
                    <p>image upload</p>
                  </div>
                </label>
              }
              <input type="file" accept="image/*"
                name="file" id="file"
                multiple
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

                  if (uploadResult.ok) {
                    // setSrc([uploadResult.url + '/' + fileName, ...src])
                    setSrc(uploadResult.url + '/' + fileName)
                  } else {
                    console.log('실패')
                  }
                }}
              />
            </div>
          </div>
          <div className="btnWrap">
            <Titlelink className="cancelBtn" imgSrc="/assets/icon/icon_cancle.svg" link="/list"/>
            <button type="submit" className="writeBtn">
              <img src="/assets/icon/icon_chk.svg" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}