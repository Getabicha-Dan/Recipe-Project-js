// Task: 9. edit a recipe - make it vegan / make it non-vegan
let recipes=[{name: "salmon soup",vegan: false,ingredients: [{name: "salmon",quantity: 1,}, {name: "cream",quantity: 2,}, {name: "milk",quantity: 1,}]}, {
    name: "carbonara",vegan: false,ingredients: [{name: "pasta",quantity: 1,}, {name: "cheese",quantity: 5,}, {name: "milk",quantity: 1,}]}, {
      name: "rice bowl",vegan: false,ingredients: [{name: "rice",quantity: 2,}, {name: "water",quantity: 1,}]}];
  
  const toggleVeganStatus = (recipes, recipeName) => {
    const toBeEditedRecipe=recipes.find(recipe=>{
      if(recipe.name=== recipeName){
        return recipe;
      }    
    })
    if (toBeEditedRecipe.vegan=== true){
      return toBeEditedRecipe.vegan= false;
    } else{
      return toBeEditedRecipe.vegan=true;
    }
}
  
  console.log(toggleVeganStatus(recipes,"rice bowl"));
  
