import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import GenRandomQ from "./generatequot";
import QuoteText from "./quotetext";

export default function AuthorQs(props){
  const apiUrl = 'https://quotable.io/quotes?author=';
  const [authorQuote, setAuthorQuote] = useState([]);
  const {author} = useParams();
  // const [aName, setAName] = useState(author);
  const [loading, setloading] = useState(true);

  useEffect(() =>{
    let mounted = true;

    fetch(apiUrl + author)
    .then((res) => res.json())
    .then((data) =>{
      if(mounted){
        setAuthorQuote(data.results);
        setloading(false);
        console.log(author);
      }
    });

    return function cleanup(){
      mounted = false;
    }
  }, [author]);

  return(
    <>
    <GenRandomQ/>
    {loading?<p className="text-center">loading...</p>:(<>
    <h3 className="author-h">
      {authorQuote[0].author}
    </h3>
    {authorQuote.map((quot, index) =>{
      return(<>
        <QuoteText
          keyto={index}
          quote={quot}
        />
      </>)
    })}
    </>)}
    </>
  )
}