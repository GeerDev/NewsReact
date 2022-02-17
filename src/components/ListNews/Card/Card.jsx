import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";

const Card = () => {

  const { news, getNews } = useContext(GlobalContext);

  useEffect(()=> {
    getNews()
  }, []);

  const externalLink = ( url ) => {
      window.location.replace(url)
  }

  const event = news.map((event) => {
    return (
      <div key={event.title}>
        <h1>{event.title}</h1>
        <p>{event.abstract}</p>
        <p>{event.byline}</p>
        <pre>{event.des_facet}</pre>
        <ul>
          <li>{event.org_facet}</li>
          <li>{event.geo_facet}</li>
        </ul>
        <img src={event.multimedia[1].url} alt={event.multimedia[1].caption}/>
        <button onClick={()=> externalLink (event.short_url) }>Go to the website</button>
      </div>
    );
  });
  return <div>{event}</div>;
  }
  
  export default Card