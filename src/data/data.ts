const testString = `
|1. Pre-heat the oven to 200C/3C/gas 5. |Place the 
      carrot, leek and tofu in a large bowl. Add the stock and mix well. |2. Add the rest of the ingredients and mix
      well. |3. Place the mixture in a large bowl and cover with a lid. |4. Place the lid on the oven and 
      cook for 40 minutes. |5. Serve with a slaw of your choice
`;

export type RecipeType = {
  id: string;
  title: string;
  ingredients: string[];
  method: string;
  cookingTime: string;
};

const recipeList: RecipeType[] = [
  {
    id: "1",
    title: "Veggie Stew",
    ingredients: ["1 Carrot", "1 Leek", "200g Tofu", "300ml Veg stock"],
    method: `1. Pre-heat the oven to 200C/3C/gas 5. Place the 
      carrot, leek and tofu in a large bowl. Add the stock and mix well. 2. Add the rest of the ingredients and mix
      well. 3. Place the mixture in a large bowl and cover with a lid. 4. Place the lid on the oven and 
      cook for 40 minutes. 5. Serve with a slaw of your choice`,
    cookingTime: "45 minutes",
  },
  {
    id: "2",
    title: "Veggie Pizza",
    ingredients: [
      "1 Base",
      "Tomata pasata",
      "1 Green pepper",
      "100g Mushrooms",
    ],
    method: `1. Pre-heat the oven to 200C/3C/gas 5. Add the pasata, green pepper and mushrooms to the base.
    Place the lid on the oven and cook for 30 minutes. 2. Serve with a slaw of your choice`,
    cookingTime: "35 minutes",
  },
  {
    id: "3",
    title: "Green Salad",
    ingredients: [
      "1 Onion",
      "1 Block of Feta",
      "Olives",
      "Tomatoes",
      "Olive Oil",
    ],
    method: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facilis nostrum qui 
    deleniti accusamus reiciendis possimus dolore. Deleniti voluptates consequuntur 
    consequatur expedita iste ab ipsam dolorum numquam culpa velit.`,
    cookingTime: "35 minutes",
  },
];

// fake api calls
// get all recipies
export function getRecipies() {
  return recipeList;
}

// get recipie
export function getRecipe(id: number | string) {
  let recipe = recipeList.filter((recipe) => recipe.id === id);
  return recipe;
}

// delete recipie
export function deleteRecipe(id: number | string) {
  let newRecipes = recipeList.filter((recipe) => recipe.id !== id);
  return newRecipes;
}

export default recipeList;
