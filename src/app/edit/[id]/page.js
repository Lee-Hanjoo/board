import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database"

export default async function Edit(props){

  const db = (await connectDB).db('board')
  let result = await db.collection('post').findOne({_id: new ObjectId(`${props.params.id}`)})
  
  return (
    <div className="p-20">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input style={{display:'none'}} name="_id" defaultValue={result._id.toString()}/>
        <input name="title" placeholder="제목" defaultValue={result.title}/>
        <input name="content" placeholder="내용" defaultValue={result.content}/>
        <button type="submit">전송</button>
      </form>
    </div>
  )
}