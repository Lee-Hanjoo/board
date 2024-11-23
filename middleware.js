import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'

// 1. 유저가 GET, POST or 페이지 접속시
// 2. middleware 실행
// 3. 서버코드 실행
export async function middleware(request) {
  
  const session = await getToken({req : request})

  if (request.nextUrl.pathname.startsWith('/write')) {
    if (!session) {
      return NextResponse.redirect(new URL('http://localhost:8080/api/auth/signin'), request.url)
    }
  }

  // console.log(request.nextUrl);
  // console.log(request.cookies);
  // console.log(request.headers.get('얻고싶은값'));

  // NextResponse.next() // 통과
  // NextResponse.redirect() // 다른페이지로 강제이동 url변경
  // NextResponse.rewrite() // 다린페이지로 강제이동 url유지

  if (request.nextUrl.pathname.startsWith('/list')) {
    let date = new Date();
    request.headers.get('sec-ch-ua-platform');

    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith('/register')) {
    if (request.cookies.has('visited')) {
      return NextResponse.next();
    } else {
      const response = NextResponse.next()
      response.cookies.set({
        name: 'visited',
        value: 'true',
        maxAge: 3600,
        httpOnly : true
      })  
      return response
    }
  }

  // request.cookies.get('쿠키이름')  //출력
  // request.cookies.has('쿠키이름')  //존재확인
  // request.cookies.delete('쿠키이름')  //삭제
  
  // const response = NextResponse.next()
  // response.cookies.set({
  //   name: 'mode',
  //   value: 'dark',
  //   maxAge: 3600,
  //   httpOnly : true
  // })  

  // return response

} 