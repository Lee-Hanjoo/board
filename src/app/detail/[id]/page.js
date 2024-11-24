import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";
import Comment from "./Comment";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../pages/api/auth/[...nextauth]";

export default async function Detail(props) {

  const db = (await connectDB).db('board')
  let result = await db.collection('post').findOne({_id: new ObjectId(`${props.params.id}`)})
  const parentId = result._id.toString()
  const author = result.author

  let session = await getServerSession(authOptions)


  if(!result) {
    return notFound();
  }

  return (
    <div id="detail" className="container">
      <div className="inner">
        <div className="left">
          <h4 className="title">{result.title}</h4>
          <p className="content">{result.content}</p>
        </div>
        <div className="commentWrap">
          <Comment parentId={parentId} author={author} />
        </div>
      </div>
    </div>
  )
}