import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";
import Comment from "./Comment";
import { notFound } from "next/navigation";
import LinkBtn from "@/component/LinkBtn";

export default async function Detail(props) {

  const db = (await connectDB).db('board')
  let result = await db.collection('post').findOne({_id: new ObjectId(`${props.params.id}`)})
  const parentId = result._id.toString()
  const author = result.author

  if(!result) {
    return notFound();
  }

  return (
    <div id="detail" className="container">
      <div className="inner">
        <div className="left">
          <h4 className="title">{result.title}</h4>
          <p className="date">2024. 11. 26</p>
          <p className="content">{result.content}</p>
          {result.file &&
            <div className="detailImgWrap">
              <ul>
                <li>
                  <img src={`https://s3.ap-northeast-2.amazonaws.com/leehanjooboard/${result.file}`} />
                </li>
              </ul>
            </div>
          }
        </div>
        <div className="commentWrap">
          <Comment parentId={parentId} author={author} />
        </div>
        <div className="btnWrap">
          <LinkBtn link="list" className="listBtn" />
        </div>
      </div>
    </div>
  )
}