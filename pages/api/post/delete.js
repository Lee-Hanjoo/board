import { ObjectId } from "mongodb"
import { connectDB } from "../../../util/database"

export default async function handler(request, res) {
  if(request.method == 'DELETE') {
    try {
      const db = (await connectDB).db('board')
      let result = await db.collection('post').deleteOne({_id: new ObjectId(request.body) })
      
      // { acknowledged: true, deletedCount: 1 } 1개를 삭제했다.
      
      res.status(200).json('게시글이 삭제되었습니다.')
    } catch (error) {
      console.log("error : ", error);
    }
  }
}