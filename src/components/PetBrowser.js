import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {
  return <div className="ui cards">
    {pets.map( (individualPet) => {
      return(<Pet key = {individualPet.id} pet= {individualPet} onAdoptPet = {onAdoptPet} />)
    })}
  </div>;
}

export default PetBrowser;