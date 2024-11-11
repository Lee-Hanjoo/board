import { connectDB } from "../../util/database"

//                                    요청     응답
// export default async function handler(request, res) {
//   if(request.method == 'POST') {
//     const db = (await connectDB).db('board')
//     let result = await db.collection('post').find().toArray()
//     //    status code    200 = 성공, 400 = 유저 에러, 500 = 에러
//     return res.status(200).json([...result, request.body])
//   } else if (request.method == 'GET') {
//     const db = (await connectDB).db('board')
//     let result = await db.collection('post').find().toArray()
    
//     return res.status(200).json(result)
//   }
// }
export default function handler(request, res) {
  console.log(request.query);
  return res.status(200).json()
}