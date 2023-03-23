import React from "react";
import { useRecipeContext } from "../../contexts/RecipeContext";

// styles
import "./Home.css";

// components
import RecipeList from "../../components/RecipeList/RecipeList";

const Home = () => {
  const { recipes } = useRecipeContext();
  return (
    <main>
      <div className="box">
        <h1>
          Recipes <span className="top">{recipes.length}</span>
        </h1>
      </div>
      <RecipeList />
    </main>
  );
};

export default Home;
