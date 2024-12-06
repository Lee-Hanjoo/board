import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database"
import Titlelink from "@/component/Titlelink";

export default async function Edit(props){

  const db = (await connectDB).db('board')
  let result = await db.collection('post').findOne({_id: new ObjectId(`${props.params.id}`)})
  
  return (
    <div id="edit" className="container">
      <div className="inner">
        <form action="/api/post/edit" method="POST">
          <div className="writeWrap">
            <input style={{display:'none'}} name="_id" defaultValue={result._id.toString()}/>
            <input name="title" className="title" placeholder="Title" defaultValue={result.title}/>
            <textarea name="content" className="content" placeholder="Add Text..." rows={10} defaultValue={result.content} />
            <div className="imgWrap">
              <div className="imgListWrap" >
                  <img src={'/assets/01.jpg'} style={{marginRight: 16}}/>
              </div>
            </div>
          </div>
          <div className="btnWrap">
            <Titlelink className="cancelBtn" imgSrc="/assets/icon/icon_cancle.svg" link="list"/>
            <button type="submit" className="writeBtn">
              <img src="/assets/icon/icon_chk.svg" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}