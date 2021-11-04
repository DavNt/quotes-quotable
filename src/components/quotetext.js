import React from "react";

export default function QuoteText(props){
  
  return(
    <>
    <div className="txt-supercontainer">
      <div className="text-contain" key={props.keyto}>
        <p>{`"${props.quote.content}"`}</p>
      </div>
    </div>
    </>
  )
}