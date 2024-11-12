import Link from "next/link";
import { connectDB } from "../../../util/database"
import ListItem from "./ListItem";

// rendering 전략 수정하고싶을 때.
// 접속할때마다 새로 만들어야하니까 서버/db부담이 좀 심해짐.
//  ㄴ해결방안: 캐싱 기능 사용하면 됨.
// export const dynamic = 'force-static';
export const dynamic = 'force-dynamic';

export default async function List(){

  const db = (await connectDB).db('board')
  let result = await db.collection('post').find().toArray()

  return (
    <div className="list-bg">
      <ListItem result={JSON.stringify(result)}/>
    </div>
  )
}