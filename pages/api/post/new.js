import { getServerSession } from "next-auth"
import { connectDB } from "../../../util/database"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(request, res) {

  let session = await getServerSession(request, res, authOptions)
  if(session) {
    request.body.author = session.user.email
  }

  // 유저가 보낸 정보 >> request.body
  if(request.method == 'POST') {
    if (request.body.title == '') {
      return res.status(404).json('제목을 입력해주세요.')
    } else if(request.body.content == '') {
      return res.status(404).json('내용을 입력해주세요.')
    }

    try {
      const db = (await connectDB).db('board')
      let result = await db.collection('post').insertOne(request.body)
      return res.redirect(302, '/list')
    } catch (error) {
      console.log("error : ", error);
    }
  }
}