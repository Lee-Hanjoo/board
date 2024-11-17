import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";
import Comment from "./Comment";
import { notFound } from "next/navigation";

export default async function Detail(props) {

  const db = (await connectDB).db('board')
  let result = await db.collection('post').findOne({_id: new ObjectId(`${props.params.id}`)})
  const parentId = result._id.toString()
  const author = result.author

  if(!result) {
    return notFound()
  }

  return (
    <div>
      <div className="container">
        <h4 className="title">{result.title}</h4>
        <p className="content">{result.content}</p>
        <Comment parentId={parentId} author={author} />
      </div>
    </div>
  )
}