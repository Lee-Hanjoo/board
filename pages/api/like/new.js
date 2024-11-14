import { getServerSession } from "next-auth"
import { connectDB } from "../../../util/database"
import { authOptions } from "../auth/[...nextauth]"
import { ObjectId } from "mongodb";

export default async function handler(request, res) {

  let session = await getServerSession(request, res, authOptions)
  
    try {
      if (session) {
        const db = (await connectDB).db('board')
        let result = await db.collection('like')
        return res.status(200).json(result)
      } else {
        return res.status(500).json('로그인 해주세요.')
      }
    } catch (error) {
      console.log("error : ", error);
    }
}