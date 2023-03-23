import React from "react";
import { useParams } from "react-router-dom";
import { useRecipeContext } from "../../contexts/RecipeContext";

// styles
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const { getRecipe } = useRecipeContext();

  const recipe = getRecipe(String(id));

  return (
    <div className="recipe-wrapper">
      {recipe && (
        <>
          <h1 className="header">{recipe.title}</h1>
          <p className="cooking-time">Takes {recipe.cookingTime} to cook</p>
          <div className="ingredient-wrap">
            <h2 id="ingredients">What You will need</h2>
            <ul aria-labelledby="#ingredients" className="ingredients">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <p>{recipe.method}</p>
        </>
      )}
    </div>
  );
}
