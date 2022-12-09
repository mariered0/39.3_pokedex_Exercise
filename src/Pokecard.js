import React from "react";
import "./Pokecard.css";

const poke_api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = (props) => {
  const imgUrl = `${poke_api}${props.id}.png`;

  return (
    <div className="Pokecard mdc-card mdc-card--outlined">
      <div className="Pokecard-name">{props.name}</div>
      <img className="Pokecard-image" src={imgUrl} />
      <div className="Pokecard-data">Type: {props.type}</div>
      <div className="Pokecard-data">Exp: {props.exp}</div>
    </div>
  );
};

export default Pokecard;
