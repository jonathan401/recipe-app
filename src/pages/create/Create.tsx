import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// context
import { useRecipeContext } from "../../contexts/RecipeContext";

// styles
import "./Create.css";

export default function Create() {
  const { addRecipe } = useRecipeContext();
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [method, setMethod] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredientList, setIngredientList] = useState<string[]>([]);
  const ingredientRef = useRef(null);
  const navigate = useNavigate();

  const deleteIng = (id: string) => {
    const newIng = ingredientList.filter((ing) => ing !== id);
    setIngredientList(newIng);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ingredientList.length > 0) {
      // add new recipe
      addRecipe({
        id: crypto.randomUUID(),
        title: title,
        ingredients: ingredientList,
        method,
        cookingTime: `${cookingTime} minutes`,
      });

      // redirect user
      navigate("/");
    }
  };

  const addIngredient = (ingredient: string) => {
    let lowerCaseList = [...ingredientList].map((ingredient) =>
      ingredient.toLowerCase()
    );
    if (ingredient && !lowerCaseList.includes(ingredient.toLowerCase())) {
      setIngredientList((prevIngredients) => [
        ...prevIngredients,
        ingredient.trim(),
      ]);
      setNewIngredient("");
      ingredientRef.current.focus();
    }
  };
  return (
    <>
      <h1 className="header">Add new recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title-field">Recipe Title:</label>
          <input
            autoComplete="off"
            id="title-field"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* ingredient field */}
        <div className="form-group">
          <label htmlFor="ingredients-field">Ingredients:</label>
          <div className="ingredients-wrap">
            <input
              autoComplete="off"
              type="text"
              id="ingredients-field"
              value={newIngredient}
              ref={ingredientRef}
              onChange={(e) => setNewIngredient(e.target.value)}
            />
            <button
              aria-controls="#ingredients-field"
              onClick={() => addIngredient(newIngredient)}
              type="button"
              className="btn"
            >
              Add
            </button>
          </div>
          <div className="ingredient-list-wrap">
            <p id="current-ingredients">current ingredients:&nbsp;</p>
            <ul
              aria-labelledby="#current-ingredients"
              className="ingredient-list"
            >
              {ingredientList.length > 0 &&
                ingredientList.map((ingredient) => (
                  <div className="tag" key={crypto.randomUUID()}>
                    <li>{ingredient}</li>
                    <span onClick={() => deleteIng(ingredient)}>x</span>
                  </div>
                ))}
            </ul>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="method-field">Recipe method:</label>
          <textarea
            autoComplete="off"
            id="method-field"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cooking-time-field">Cooking time (minutes):</label>
          <input
            autoComplete="off"
            id="cooking-time-field"
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </>
  );
}
