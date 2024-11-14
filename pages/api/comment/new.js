import { getServerSession } from "next-auth"
import { connectDB } from "../../../util/database"
import { authOptions } from "../auth/[...nextauth]"
import { ObjectId } from "mongodb"

export default async function handler(request, res) {
  
  if(request.method == 'POST') {
    let session = await getServerSession(request, res, authOptions);
    let commentItem;
    if (!session) {
      return res.status(500).json('[실패] 로그인을 해주세요.')
    } else {
      request.body = JSON.parse(request.body)
      if (request.body.comment === '') {
        return res.status(500).json('[실패] 코멘트를 입력해주세요.')
      } else {
        commentItem = {
          comment : request.body.comment,
          parentId : ObjectId(request.body.parentId),
          author: session.user.email,
          authorName: session.user.name
        }
      }
    }

    try {
      const db = (await connectDB).db('board')
      let result = await db.collection('comment').insertOne(commentItem)
      return res.status(200).json(result)
    } catch (error) {
      console.log("error : ", error);
    }
  }
}