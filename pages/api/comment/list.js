import { getServerSession } from "next-auth"
import { connectDB } from "../../../util/database"
import { authOptions } from "../auth/[...nextauth]"
import { ObjectId } from "mongodb";

export default async function handler(request, res) {
  // request.query <<< URL 파라미터의 쿼리 값 
    try {
      const db = (await connectDB).db('board')
      let result = await db.collection('comment').find({ parentId : new ObjectId(request.query.parentId) }).toArray()
      return res.status(200).json(result)
    } catch (error) {
      console.log("error : ", error);
    }
}