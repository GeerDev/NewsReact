import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './Form.css';

const Form = () => {

  let navigate = useNavigate();

  const [data, setData] = useState({
        name: "",
        title: "",
        description: "",
        place: "",
        image: "",
        hastags: []
      });

  const handleInputChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value
        });
      };

  const handleSubmit = (event) => {
        event.preventDefault();

        let save = JSON.parse(localStorage.getItem('dataForm')) || [];
        save.push(data)
        localStorage.setItem("dataForm", JSON.stringify(save))

        setTimeout(() => {
            navigate("/list");
          }, 1000);
      };
    
  return (
    <section className='form animate__animated animate__jackInTheBox'> 
      <form onSubmit={handleSubmit} className='form_body'>
          <h2>Fill in these details:</h2>
          <input
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
            name="name"
          />
          <input
            type="text"
            placeholder="Title"
            onChange={handleInputChange}
            name="title"
          />
          <textarea
            type="text"
            placeholder="Description"
            onChange={handleInputChange}
            name="description"
          />
          <div className="form_group">
            <input
              type="text"
              placeholder="Place"
              onChange={handleInputChange}
              name="place"
            />
            <input
              type="file"
              placeholder="Add a image"
              onChange={handleInputChange}
              name="image"
            />
          </div>
          <input
            type="text"
            placeholder="Hastags"
            onChange={handleInputChange}
            name="hastags"
            className="hastags"
          />
          <button type="submit">Send</button>
      </form>
      <div className="form_ilustration">
      </div>
    </section>

  )
}

export default Form