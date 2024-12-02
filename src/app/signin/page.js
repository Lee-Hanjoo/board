'use client'

import SignInBtn from "@/component/SignInBtn";
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react'

export default function Signin() {

    const router = useRouter();
    
    async function handleSubmit(e){

        e.preventDefault();

        let email=e.target.email.value,
            password=e.target.password.value;

        let result = await signIn('credentials',{
            redirect: false, email, password
        });

        // if(result.ok){
        //     console.log('Success');
        //     router.push('/')
        //     router.refresh()
        // } else {
        //     console.log('Error',result.error);
        // }
    }

    return (
      <div className="sign in container">
        <div className="inner">
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <p className="label">Email</p>
                        <input type="text" name="email" placeholder="Add Email..."/>
                    </li>
                    <li>
                        <p className="label">PW</p>
                        <input type="password" name="password" placeholder="Add PW..."/>
                    </li>
                </ul>
                <button className='signInBtn' type="submit">
                    Sign In
                </button>
            </form>
            <div className="btnWrap">
                <button className="gitBtn" onClick={()=>signIn('github',{callbackUrl:'/'})}>
                    <img src="/assets/icon/icon_github.svg" />
                </button>
                <button className="signUpBtn" onClick={()=>{router.push('/register')}}>
                    Sign Up
                </button>
            </div>
        </div>
      </div>
    );
  }
  