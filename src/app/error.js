'use client'

export default function Error(props) {

    const {error, reset} = props

    return (
      <div id="error" className="container">
        <div className="inner">
            <p>{error}</p>
            <button onClick={()=>{reset()}}>RESET</button>
        </div>
      </div>
    );
  }
  