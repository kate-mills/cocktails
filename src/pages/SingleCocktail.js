import React from "react";
import {useParams, Link } from 'react-router-dom'

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    const getCocktail =  async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.slice(1)}`);
        const data = await response.json();
        if ( data.drinks  ) {
          const {
            strDrink:name,
            strDrinkThumb:image,
            strCategory: category,
            strGlass:glass,
            strAlcoholic:info,
            strInstructions:instructions,
            strIngredient1:ing1,
            strIngredient2:ing2,
            strIngredient3:ing3,
            strIngredient4:ing4,
            strIngredient5:ing5,
          }= data.drinks[0];
          const ingredients = [ing1, ing2, ing3, ing4, ing5]
          const newCocktail = {
            name:name,
            image:image,
            category:category,
            glass:glass,
            info:info,
            instructions:instructions,
            ingredients:ingredients,
          }
          setCocktail(newCocktail);
        }
        else{
          setCocktail(null);
        }
      } catch (error){
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  },[id]);

  if(loading){
    return <h2 className="section-title">loading...</h2>
  }
  if(!cocktail){
    return (<h2 className="section-title">No cocktail to display</h2>)
  } else {
    const { name, image, category, info, glass, instructions, ingredients } = cocktail
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary"> back home </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
            <img src={image} alt={name} />
          <div className="drink-info">
            <p>name : {name}</p>
            <p>category : {category}</p>
            <p>info : {info}</p>
            <p>glass : {glass}</p>
            <p>info : {info}</p>
            <p>instructions : {instructions}</p>
            <p>ingredients :
                { ingredients.map((ing, i) => {
                    return ing ? <span key={i}> {ing}</span>
                    : null;
                  })
                }
            </p>
          </div>
        </div>

      </section>
    );
  }
  return (
    <h1>single cocktailpage id {id }</h1>
  );
}
export default SingleCocktail;
