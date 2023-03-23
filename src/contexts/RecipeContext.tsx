import React, { createContext, useState, useContext, useEffect } from "react";

import recipeList, { RecipeType } from "../data/data";
import { useLocalStorage } from "../hooks/useLocalStorage";

type RecipeContextType = {
  recipes: RecipeType[];
  getRecipe: (id: string) => RecipeType | undefined;
  deleteRecipe: (id: string) => void;
  addRecipe: (newRecipe: RecipeType) => void;
};

export const RecipeContext = createContext<RecipeContextType | null>(null);

type RecipeStoreProp = {
  children: React.ReactNode;
};

const RecipeProvider = ({ children }: RecipeStoreProp) => {
  const [recipes, setRecipes] = useLocalStorage("recipes", recipeList);
  // useEffect(() => {
  //   // add recipes to local storage;
  //   localStorage.setItem("recipes", JSON.stringify(recipes));
  // }, [recipes]);

  // get the item when page loads

  // functions
  const getRecipe = (id: string) => {
    let recipe = recipes.filter((recipe) => recipe.id === id);
    return recipe[0];
  };

  const deleteRecipe = (id: string) => {
    const newRecipeData = [...recipes].filter((recipe) => recipe.id !== id);
    setRecipes(newRecipeData);
  };

  const addRecipe = (newRecipe: RecipeType) => {
    setRecipes((prevRecipeData) => [...prevRecipeData, newRecipe]);
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, getRecipe, deleteRecipe, addRecipe }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context)
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  return context;
};

export default RecipeProvider;
