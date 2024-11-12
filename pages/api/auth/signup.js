import { connectDB } from "../../../util/database";
import bcrypt from 'bcrypt'

export default async function handler(request, res){
  if (request.method == 'POST') {
    if (request.body.name == '' || request.body.email == '' || request.body.password == '' ){
      res.status(500).json('[가입 실패] 모든 정보를 입력해주세요.')
    } else {
      let hash = await bcrypt.hash(request.body.password, 10)
      request.body.password = hash
  
      let userDB = (await connectDB).db('board');
      let findUser = await userDB.collection('user_cred').findOne({email: request.body.email})
  
      if (findUser) {
        res.status(500).json('[가입 실패]')
      } else {
        let db = (await connectDB).db('board');
        await db.collection('user_cred').insertOne(request.body)
    
        res.status(200).json('[가입 성공]')
      }
    }
  }
}