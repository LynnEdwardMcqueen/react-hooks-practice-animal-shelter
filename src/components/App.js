import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleFilteringFeedback(event) {
    setFilters({type: event.target.value})
  }

  function retrieveThePets( ) {
    let optionalQuery = (filters.type === "all" ? "" : `?type=${filters.type}`)
    let foo = `http://localhost:3001/pets${optionalQuery}`
    fetch(`http://localhost:3001/pets${optionalQuery}`)
    .then((r) => r.json())
    .then((retrievedPets) => {
      setPets(retrievedPets)
    });
  }

  function markPetAdoption(petId ) {
    pets.forEach((pet) => {
      if (pet.id === petId) {
        pet.isAdopted = true
      }
    })
    setPets([...pets])
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType= {handleFilteringFeedback} onFindPetsClick = {retrieveThePets} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets = {pets} onAdoptPet = {markPetAdoption} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;