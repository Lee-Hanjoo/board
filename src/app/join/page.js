export default function Join() {
  return (
    <div className="p-20">
      <h4>회원가입</h4>
      <form action="/api/post/join" method="POST">
        {/* name을 써줘야 서버로 데이터가 전송됨. title: value 이런식으로. */}
        <input type="text" name="id" placeholder="아이디" />
        <input type="text" name="pw" placeholder="비밀번호" />
        <button type="submit">버튼</button>
      </form>
    </div>
  )
}