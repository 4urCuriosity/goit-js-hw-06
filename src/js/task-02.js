const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

ingredients.forEach(ingredient => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.textContent = `${ingredient}`;
  ingredientItemEl.classList.add('item');

  const ingredientListEl = document.querySelector('ul#ingredients');
  ingredientListEl.append(ingredientItemEl);
});
