import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";

const Card = () => {

  const { news, getNews } = useContext(GlobalContext);

  useEffect(()=> {
    getNews()
  }, [getNews]);

  const event = news.map((event) => {
    return (
      <div key={event.id}>
        <h1>{event.name}</h1>
        <img src={event.image} alt="Imagen de la noticia"/>
      </div>
    );
  });
  return <div>{event}</div>;
  }
  
  export default Card