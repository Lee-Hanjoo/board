export default async function Write() {

  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        {/* name을 써줘야 서버로 데이터가 전송됨. title: value 이런식으로. */}
        <input type="text" name="title" placeholder="제목" />
        <input type="text" name="content" placeholder="내용" />
        <button type="submit">버튼</button>
      </form>
    </div>
  )
}