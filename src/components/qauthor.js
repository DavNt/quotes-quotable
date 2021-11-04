import React from "react";
import { Link } from "react-router-dom";
import IcArrow from '../resources/icons/ic_arrow_forward_2x.png';

export default function QuoteAuthor(props){
  
  return(
    <>
    <div className="txt-supercontainer">
      <Link to={`${props.quote.authorSlug}`} className="auther-contain">
        <div className="auther-detail">
          <h5>
            {props.quote.author}
          </h5>
          <p>
            {props.quote.tags}
          </p>
        </div>
        <div className="author-cmor">
          <img 
            className="img-responsive arrow-sz"
            src={IcArrow}
            alt=""
          />
        </div>
      </Link>
    </div>
    </>
  )
}