import React from "react";
import {Link} from 'react-router-dom';
import IcRefresh from '../resources/icons/ic_refresh.png';

export default function GenRandomQ(props){
  return(
    <>
    <div className="row justify-content-end">
      <div className="col-5"
        onClick={() =>{
          console.log(props.quote);
        }}
      >
        <Link className="refresh-btn" to={"/"}>
          random
          <img 
            className="img-responsive img-size"
            src={IcRefresh}
            alt=""
          />
        </Link>
      </div>
    </div>
    </>
  )
}