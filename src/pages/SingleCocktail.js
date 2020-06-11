import React from "react";
import {useParams } from 'react-router-dom'

const SingleCocktail = () => {
  const {id} = useParams()
  return (
    <h1>single cocktailpage id: {id}</h1>
  )
}
export default SingleCocktail
