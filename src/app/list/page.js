import { getServerSession } from "next-auth";
import { connectDB } from "../../../util/database"
import ListItem from "./ListItem";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

// 600초 동안은 캐싱된 페이지를 보여줌
// export const revalidate = 600;
// 60초 지나기 전에 페이지 강제로 새로 만들라고 명령줄 수도 있습니다.
// on-demand revalidation 사용.

// rendering 전략 수정하고싶을 때.
// 접속할때마다 새로 만들어야하니까 서버/db부담이 좀 심해짐.
//  ㄴ해결방안: 캐싱 기능 사용하면 됨.
// export const dynamic = 'force-static';
export const dynamic = 'force-dynamic';

export default async function List(){

  const db = (await connectDB).db('board')
  let result = await db.collection('post').find().toArray()

  let session = await getServerSession(authOptions)

  return (
    <div id="list">
      <div className="container">
        <ListItem result={JSON.stringify(result)} session={session}/>
      </div>
    </div>
  )
}