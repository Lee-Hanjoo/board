import { ObjectId } from "mongodb";
import { connectDB } from "../../../util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

// URL 파라미터 문법
export default async function handler(request, res) {
    if(request.method == 'DELETE') {

        // 현재 로그인 하고 있는 사람의 정보.
        let session = await getServerSession(request, res, authOptions)

        const db = (await connectDB).db('board')
        let findResult = await db.collection('post').findOne({_id : new ObjectId(request.query._id)})

        // 작성자만 삭제 가능 
        //      현재 로그인한 이메일     게시글 작성할 때 이메일
        //                         url 파라미터로 던져지기때문에 조작가능
        // if (session.user.email === request.query.author) {

        // 로그인 X
        if (!session) {
            res.status(500).json('삭제할 수 없습니다.')    
        } else {
        // 로그인 O 이고,
        // 현재 사용자가 작성자라면, 삭제 가능
        //""데이터베이스""에서 조회한
        //  게시글 작성할 때 이메일임.      현재 로그인한 이메일
            if (findResult.author === session.user.email) {
                let result = await db.collection('post').deleteOne({_id : new ObjectId(request.query._id)})
                res.status(200).json('게시글이 삭제되었습니다.')
            }
        }
    }    
    // { acknowledged: true, deletedCount: 1 } 1개를 삭제했다.    
}