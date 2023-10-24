import Recipes from "./Recipes1";

const categories = [
  {
    id: 1,
    title: "Main",
    recipes: Recipes,
  },
  {
    id: 2,
    title: "Healthy Food",
    recipes: [...Recipes.slice(0, 3)],
  },
  {
    id: 3,
    title: "Fast Food",
    recipes: [...Recipes.slice(3, 6)],
  },
  {
    id: 4,
    title: "Drinks",
    recipes: [...Recipes.slice(6, 8)],
  },
];

export default categories;
