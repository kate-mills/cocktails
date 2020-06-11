import React from "react";

const Cocktail = (props) => {
  console.log('cocktail data', props)
  return <h1> {props.name}</h1>;
}

export default Cocktail
