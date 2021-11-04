import React, {useState, useEffect} from "react";

import GenRandomQ from './generatequot';
import QuoteText from './quotetext';
import QuoteAuthor from './qauthor';

export default function Homepage(){
  // const apiUrl = 'https://quote-garden.herokuapp.com/api/v3/quotes';
  const apiUrl = 'https://api.quotable.io';
  const [quote, setQuote] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() =>{
    let mounted = true;

    fetch(apiUrl + '/random')
    .then((res) => res.json())
    .then((randQ) =>{
      if(mounted){
        setloading(false);
        setQuote(randQ);
      }
    });

    return function cleanup(){
      mounted = false;
    }
  }, []);

  return(
    <>
    <div className="container-fluid">
      <GenRandomQ
        quote={quote}
      />
      {loading?<p className="text-center">loading....</p>:(
      <>
        <QuoteText
          quote={quote}
        />
        <QuoteAuthor
          quote={quote}
        />
      </>
      )}
    </div>
    </>

  )
}