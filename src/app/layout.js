import "./reset.css";
import "./common.css";
import Link from "next/link";
import LoginBtn from "@/component/LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import LogoutBtn from "@/component/LogoutBtn";
import ModeBtn from "@/component/ModeBtn";
import { cookies } from "next/headers";

export const metadata = {
  title: "Board",
  description: "leehanjoo board",
};

export default async function RootLayout({ children }) {

  let session = await getServerSession(authOptions);
  let res = cookies().get('mode')
  
  return (
    <html lang="en">
      <body className={`${res && res.value}`}>
        <nav className="nav"> 
          <div className="inner">
            <div className="menu">
              <Link href="/" className="logo">Board</Link> 
              <Link href="/list">목록</Link>
              {session && <Link href="/write">글쓰기</Link>}
            </div>
            {
              session ?
              <LogoutBtn name={session.user.name}/>
              :
              <LoginBtn />
            }
            {/* <ModeBtn /> */}
          </div>
        </nav>  
        {children}
      </body>
    </html>
  );
}
