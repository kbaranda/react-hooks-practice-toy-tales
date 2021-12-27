import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDeleted}) {
  const toyList = toys.map((toy) => (
    <ToyCard
    key={toy.id}
    toy={toy}
    onDeleted={onDeleted}
    />
  ))
  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;
