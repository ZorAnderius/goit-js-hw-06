const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsArray = [];

const listIngredientsEl = document.getElementById("ingredients");

// const ingredientItemEl1 = document.createElement("li");
// ingredientItemEl1.classList.add("item-task2");
// ingredientItemEl1.textContent = ingredients[0];

// const ingredientItemEl2 = document.createElement("li");
// ingredientItemEl2.classList.add("item-task2");
// ingredientItemEl2.textContent = ingredients[1];

// const ingredientItemEl3 = document.createElement("li");
// ingredientItemEl3.classList.add("item-task2");
// ingredientItemEl3.textContent = ingredients[2];

// const ingredientItemEl4 = document.createElement("li");
// ingredientItemEl4.classList.add("item-task2");
// ingredientItemEl4.textContent = ingredients[3];

// const ingredientItemEl5 = document.createElement("li");
// ingredientItemEl5.classList.add("item-task2");
// ingredientItemEl5.textContent = ingredients[4];

// const ingredientItemEl6 = document.createElement("li");
// ingredientItemEl6.classList.add("item-task2");
// ingredientItemEl6.textContent = ingredients[5];

// listIngredientsEl.append(
//   ingredientItemEl1,
//   ingredientItemEl2,
//   ingredientItemEl3,
//   ingredientItemEl4,
//   ingredientItemEl5,
//   ingredientItemEl6
// );

console.log(listIngredientsEl);

const createIngredient = (ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.classList.add("item-task2");
  ingredientItemEl.textContent = ingredient;
  return ingredientItemEl;
};

const elements = ingredients.map(createIngredient);

listIngredientsEl.append(...elements);
