import Titlelink from "@/component/Titlelink";
import { connectDB } from "../../util/database";

// 예전 Next.js에선 이렇게 revalidate 옵션 넣어서 페이지 만들던걸 ISR 이라고 불렀습니다.
export const revalidate = 60;

export default async function Home() {

  const db = (await connectDB).db('board')
  // post에 있는 모든 데이터를 가져와서 array로 만들어라
  let result = await db.collection('post').find().toArray()

  // 캐싱은 하드 용량을 필요로 함.
  // GET 요청 결과 캐싱 fetch는 cache를 자동으로 해줌.
  // await fetch('/URL', { cache: 'force-cache' })
  // 매번 서버로 요청해서 새거 가져옴
  // await fetch('/URL', { cache: 'no-store' })
  // 60초마다 캐싱된 데이터 갱신해줌.
  // await fetch('/URL', { next: {revalidate : 60} })

  return (
    <div id="home" className="container">
      <div className="inner">
        <div className="homeTitleWrap">
          <Titlelink title='Board' link='list' />
        </div>
      </div>
    </div>
  );
}
