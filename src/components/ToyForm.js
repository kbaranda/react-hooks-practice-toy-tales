import React, {useState} from "react";

function ToyForm({onAddToy}) {
  const [newToy, setNewToy] = useState({
    name:"",
    image:"",
    likes: 0
  })

  function handleChange(e){
    setNewToy({...newToy,
    [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newToy)
    })
    .then((resp) => resp.json())
    .then((newToy) => onAddToy(newToy))
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={newToy.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
          />
        <br />
        <input
          type="text"
          name="image"
          value={newToy.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
          />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
