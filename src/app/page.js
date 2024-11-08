import { connectDB } from "../../util/database";

export default async function Home() {

  const db = (await connectDB).db('board')
  // post에 있는 모든 데이터를 가져와서 array로 만들어라
  let result = await db.collection('post').find().toArray()

  return (
    <div>HOME</div>
  );
}
