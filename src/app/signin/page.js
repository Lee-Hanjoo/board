'use client'

import { useRouter } from "next/navigation";

export default function Signin() {

    const router = useRouter();

    return (
      <div className="sign in container">
        <div className="inner">
            <ul>
                <li>
                    <p className="label">ID</p>
                    <input type="text" name="id" placeholder="Add ID..."/>
                </li>
                <li>
                    <p className="label">PW</p>
                    <input type="password" name="pw" placeholder="Add PW..."/>
                </li>
            </ul>
            <div className="btnWrap">
                <button className="gitBtn">
                    <img src="/assets/icon/icon_github.svg" />
                </button>
                <button className="signUpBtn" onClick={()=>{router.push('/register')}}>
                    Sign Up
                </button>
                <button className="signInBtn">
                    Sign In
                </button>
            </div>
        </div>
      </div>
    );
  }
  