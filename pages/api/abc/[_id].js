import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";

// URL 파라미터 문법
export default async function handler(request, res) {
    console.log('request.query::==========', request.query._id);

    const db = (await connectDB).db('board')
    let result = await db.collection('post').deleteOne({_id : new ObjectId(request.query._id)})
    
    // { acknowledged: true, deletedCount: 1 } 1개를 삭제했다.
    
    res.status(200).json('게시글이 삭제되었습니다.')
    return res.status(200).json()
}