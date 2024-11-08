import Link from "next/link";
import { connectDB } from "../../../util/database"
import DetailLink from "./DetailLink";

export default async function List(){

  const db = (await connectDB).db('board')
  let result = await db.collection('post').find().toArray()

  return (
    <div className="list-bg">
      {
        result.map((item,i)=>{
          return (
            <div className="list-item" key={i}>
              <Link prefetch={false} href={`detail/${item._id.toString()}`}>
                <h4>{item.title}</h4>
              </Link>
              <Link href={`edit/${item._id.toString()}`}>수정</Link>
              <p>{item.content}</p>
            </div>
          )
        })
      }
  </div>
  )
}