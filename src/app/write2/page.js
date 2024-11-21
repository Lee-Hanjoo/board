import { revalidatePath } from "next/cache";
import { connectDB } from "../../../util/database";
import { handleSubmit } from "./actions";

export default async function Write2() {
  const db = (await connectDB).db('board')
  let result = await db.collection('post_test').find().toArray()

  //3. 서버기능 serveractions. << 폼 새로고침 안됨.
  async function handleSubmit(formData) {
    'use server';
    const db = (await connectDB).db('board')
    db.collection('post_test').insertOne({title:formData.get('title')})
    revalidatePath('/write2') // 창 전체 새로고침xx 바뀐것만 새로고침oo
  } 
 
  return (
    <div className="container">
      <form action={handleSubmit}> 
        <input type="text" name="title" />
        <button type="submit">Submit</button>
        {
          result ? result.map((a)=>
            <p>글제목 : {a.title}</p>
          )
          : null
        }
      </form>
    </div>
  );
} 