import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { connectDB } from "../../../util/database";

export const authOptions = {
  providers: [
    // 로그인 방식 하나를 Provider라고 함.
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    // 다른 SNS 추가하고싶으면 아래에 추가하면 됨.
    // GoogleProvider({
    //   clientId: AUTH_GOOGLE_ID,
    //   clientSecret: AUTH_GOOGLE_SECRET,
    // }),
  ],
  secret : process.env.AUTH_SECRET,
  adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 