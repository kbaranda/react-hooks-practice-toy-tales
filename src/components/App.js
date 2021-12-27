import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([])
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then((toys) => setToys(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy){
    setToys([...toys, newToy])
  }
  
  function onDeleted(deletedToy){
    const updatedList = toys.filter((toy) => toy.id !== deletedToy.id)
    setToys(updatedList)
  } 
  return (

    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
      toys={toys}
      onDeleted={onDeleted}
      />
    </>
  );
}

export default App;
