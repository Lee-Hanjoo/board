'use client'

import { useRouter } from "next/navigation";

export default function Register() {

  const router = useRouter();

  return (
    <div className="sign up container">
      <div className="inner">
        <form method="POST" action="/api/auth/signup">
            <ul>
                <li>
                    <p className="label">ID</p>
                    <input type="text" name="name" placeholder="Add ID..."/>
                </li>
                <li>
                    <p className="label">Email</p>
                    <input type="text" name="email" placeholder="Add Email..."/>
                </li>
                <li>
                    <p className="label">PW</p>
                    <input type="password" name="password" placeholder="Add PW..."/>
                </li>
            </ul>
            <div className="btnWrap">
                <button type="button" className="signInBtn" onClick={()=>{router.push('/signin')}}>
                    Sign In
                </button>
                <button type="submit" className="signUpBtn" onClick={()=>{router.push('/signin')}}>
                    Sign Up
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}
