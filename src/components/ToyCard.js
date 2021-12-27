import React, {useState} from "react";

function ToyCard({toy, onDeleted}) {
  const [likes, setLikes] = useState({
    Likes: toy.likes
  })

  function handleDonate(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method:"DELETE"
    })
    .then((resp) => resp.json())
    .then(() => onDeleted(toy))
  }

  function handleLikes(){
    let newLikes = toy.likes++
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        { likes: newLikes }
      )
    })
    .then((resp) => resp.json())
    .then(setLikes(newLikes))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={() => handleLikes(toy)} className="like-btn">Like {"<3"}</button>
      <button onClick={() => handleDonate(toy)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
