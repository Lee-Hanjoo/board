import { connectDB } from "../../../util/database"

export default async function handler(request, res) {
  // 유저가 보낸 정보 >> request.body
  const db = (await connectDB).db('board')
  let dbResult = await db.collection('join').find().toArray()

  if(request.method == 'POST') {
    for (let i=0;i < dbResult.length -1;i++) {
      if(request.body.id == dbResult[i].id) {
        console.log("request.body.id:::::::::::::::::", request.body.id);
        console.log("dbResult.id--------------", dbResult[0].id);
        return res.status(404).json('중복 아이디 입니다.')
      }
    }
    try {
      let result = await db.collection('join').insertOne(request.body)
      return res.redirect(302, '/list')
    } catch (error) {
      console.log("error : ", error);
    }

  }
}