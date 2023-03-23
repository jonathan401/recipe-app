import React from "react";
import { Link } from "react-router-dom";
import { useRecipeContext } from "../../contexts/RecipeContext";

import { RecipeType } from "../../data/data";

// styles
import "./RecipeItem.css";

// components
// import DeleteIcon from "../../assets/icon-delete.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";

const RecipeItem: React.FC<{ recipe: RecipeType }> = ({ recipe }) => {
  const { deleteRecipe } = useRecipeContext();
  return (
    <li className="card">
      <div className="card-header-wrapper">
        <h2 className="card-header">{recipe.title}</h2>
        <button
          aria-label="delete-recipe"
          className="delete-btn"
          onClick={() => deleteRecipe(recipe.id)}
        >
          <DeleteIcon aria-hidden="true" />
        </button>
      </div>
      <p className="cooking-time">{recipe.cookingTime}</p>
      <p className="card-body">{recipe.method.substring(0, 100)}...</p>
      <Link to={`recipe/${recipe.id}`} className="btn">
        Cook This
      </Link>
    </li>
  );
};

export default RecipeItem;
