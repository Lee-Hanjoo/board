import "./reset.css";
import "./common.css";
import Link from "next/link";
import LoginBtn from "@/component/LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import LogoutBtn from "@/component/LogoutBtn";
import ModeBtn from "@/component/ModeBtn";
import { cookies } from "next/headers";
import SearchBtn from "@/component/SearchBtn";

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
            <Link href="/" className="logo">Board</Link> 
            <div className="modeBtnWrap">
              <ModeBtn />
            </div>
            <div className="btnWrap">
              <SearchBtn />
              {
                session ?
                <LogoutBtn name={session.user.name[0]}/>
                :
                <LoginBtn />
              }
            </div>
          </div>
        </nav>  
        {children}
      </body>
    </html>
  );
}
