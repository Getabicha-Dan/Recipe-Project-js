// Task: 9. edit a recipe - make it vegan / make it non-vegan
let recipes=[{name: "salmon soup",vegan: false,ingredients: [{name: "salmon",quantity: 1,}, {name: "cream",quantity: 2,}, {name: "milk",quantity: 1,}]}, {
    name: "carbonara",vegan: false,ingredients: [{name: "pasta",quantity: 1,}, {name: "cheese",quantity: 5,}, {name: "milk",quantity: 1,}]}, {
      name: "rice bowl",vegan: true,ingredients: [{name: "rice",quantity: 2,}, {name: "water",quantity: 1,}]}];
  
     // Task: 11. search by ingredient name - return all recipes that contain a given ingredient name
const searchByIngredientName = (recipes, ingredientName) => {
  const newRecipes=recipes.filter(recipe =>{
    recipe.ingredients.filter(ingredient =>{
      if(ingredient.name === ingredientName ){
        return true;
      }
    return recipe;
    })
   
  })
  return newRecipes;
}
console.log(searchByIngredientName(recipes,"milk"));

 
  
  

  
