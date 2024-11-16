export default async function Write() {

  return (
    <div id="write">
      <div className="container">
        <form action="/api/post/new" method="POST">
          {/* name을 써줘야 서버로 데이터가 전송됨. title: value 이런식으로. */}
          <div className="writeWrap">
            <input type="text" name="title" placeholder="제목" />
            <textarea name="content" placeholder="내용" rows={10} />
          </div>
          <button type="submit" className="writeBtn">글 작성</button>
        </form>
      </div>
    </div>
  )
}