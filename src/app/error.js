'use client'
//                            error, reset 이 props로 들어옴
export default async function Error(props) {

    const {error, reset} = props

    return (
        <div>
            <h4>에러입니다.</h4>
            <p>{error}</p>
            <button onClick={()=>{reset()}}>버튼</button>
        </div>
    )
}