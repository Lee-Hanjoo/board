import "./reset.css";
import "./common.css";
import Link from "next/link";
import SignInBtn from "@/component/SignInBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import SignOutBtn from "@/component/SignOutBtn";
import ModeBtn from "@/component/ModeBtn";
import { cookies } from "next/headers";
import SearchBtn from "@/component/SearchBtn";

export const metadata = {
  title: "Board",
  description: "leehanjoo board",
};

export default async function RootLayout({ children, parentFunc }) {

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
                <SignOutBtn name={session.user.name[0]}/>
                :
                <SignInBtn />
              }
            </div>
          </div>
        </nav>  
        {children}
      </body>
    </html>
  );
}
