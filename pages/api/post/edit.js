import { ObjectId } from "mongodb"
import { connectDB } from "../../../util/database"

export default async function handler(request, res) {
  
  if (request.body.title == '') {
    return res.status(404).json('제목을 입력해주세요.')
  } else if(request.body.content == '') {
    return res.status(404).json('내용을 입력해주세요.')
  }

  if(request.method == 'POST') {
    let formatRequest = {title : request.body.title, content : request.body.content}
    const db = (await connectDB).db('board')
    let result = await db.collection('post').updateOne(
      {_id : new ObjectId(request.body._id)}, 
      {$set : formatRequest})
      // {$inc : 1234})  inc는 기존 데이터 + 1234만 추가됨.
    return res.redirect(302, '/list');
  }
}