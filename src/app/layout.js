import "./reset.css";
import "./common.css";
import Link from "next/link";
import LoginBtn from "@/component/LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import LogoutBtn from "@/component/LogoutBtn";

export const metadata = {
  title: "Board",
  description: "leehanjoo board",
};

export default async function RootLayout({ children }) {

  let session = await getServerSession(authOptions)
  
  return (
    <html lang="en">
      <body>
        <nav className="nav"> 
          <div className="menu">
            <Link href="/" className="logo">홈</Link> 
            <Link href="/list">목록</Link>
            {session && <Link href="/write">글쓰기</Link>}
          </div>
          {session ?
            <LogoutBtn name={session.user.name}/>
            :
            <LoginBtn />
          }
        </nav>  
        {children}
      </body>
    </html>
  );
}
