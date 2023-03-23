import React from "react";
import Empty from "../../assets/no-recipe.svg";

// styles
import "./RecipeList.css";

// components
import RecipeItem from "../RecipeItem/RecipeItem";
import { useRecipeContext } from "../../contexts/RecipeContext";

function RecipeList() {
  const { recipes } = useRecipeContext();

  if (recipes.length === 0) {
    return (
      <div className="no-recipes-wrapper">
        <img src={Empty} alt="" />
        <h2 className="no-recipes">No recipes</h2>
      </div>
    );
  }

  return (
    <ul className="wrapper">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}

export default RecipeList;
