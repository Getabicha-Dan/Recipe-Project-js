// Task: 9. edit a recipe - make it vegan / make it non-vegan
let recipes=[{name: "salmon soup",vegan: false,ingredients: [{name: "salmon",quantity: 1,}, {name: "cream",quantity: 2,}, {name: "milk",quantity: 1,}]}, {
    name: "carbonara",vegan: false,ingredients: [{name: "pasta",quantity: 1,}, {name: "cheese",quantity: 5,}, {name: "milk",quantity: 1,}]}, {
      name: "rice bowl",vegan: true,ingredients: [{name: "rice",quantity: 2,}, {name: "water",quantity: 1,}]}];


  // Task: 14. edit a recipe - change the quantity of an ingredient
const editIngredientQuantity = (recipes, recipeName, ingredientName, newQuantity) => {
  // find the recipe by name
  const myRecipeToBeChanged = recipes.find(recipe => {
    if(recipe.name === recipeName){
      return true;
    }
  })
  const ingredientToChange =myRecipeToBeChanged.ingredients.filter(ingredient=>{
    if(ingredient.name == ingredientName){
      ingredient.quantity = newQuantity;
    }
    return ingredient;
  });
  return ingredientToChange;
}


  // update the ingredients of the recipe you found to have newQuantity

  // use map to map each recipe to itself, but if the name matches the recipeName, update the ingredients
  // return the updated recipes array 

 const updatedNewRecipes = (recipes,recipeName) => recipes.map(recipe=>{
  if(recipe.name != recipeName){
    return recipe;
  } else{
    recipe.ingredients = editIngredientQuantity(recipes,"salmon soup" , "cream", 2);
    return recipe;
  }
})
 
console.log(updatedNewRecipes(recipes,"salmon soup"));
  
 
   
   

  

