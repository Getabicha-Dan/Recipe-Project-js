
// Prerequisites:
// - functions, objects, conditionals
/*let Recipes=[{name: "salmon soup",vegan: false,ingredients: [{name: "salmon",quantity: 1,}, {name: "cream",quantity: 2,}, {name: "milk",quantity: 1,}]}, {
  name: "carbonara",vegan: false,ingredients: [{name: "pasta",quantity: 1,}, {name: "cheese",quantity: 5,}, {name: "milk",quantity: 1,}]}, {
    name: "rice bowl",vegan: false,ingredients: [{name: "rice",quantity: 2,}, {name: "water",quantity: 1,}]}];*/
// - arrow functions
// - array functions map, filter, find..



function getRecipes() {
  return [{
    name: "salmon soup",
    vegan: false,
    ingredients: [{
        name: "salmon",
        quantity: 1,
      }, {
        name: "cream",
        quantity: 2,
      }, {
        name: "milk",
        quantity: 1,
      }
    ]
  }, {
    name: "carbonara",
    vegan: false,
    ingredients: [{
        name: "pasta",
        quantity: 1,
      }, {
        name: "cheese",
        quantity: 5,
      }, {
        name: "milk",
        quantity: 1,
      }
    ]
  }, {
    name: "rice bowl",
    vegan: false,
    ingredients: [{
        name: "rice",
        quantity: 2,
      }, {
        name: "water",
        quantity: 1,
      }
    ]
  }];
}

// Implement functions that perform the following tasks

// Task: 1. Add a new recipe
const addRecipe = (recipes, recipe) => {

    if(recipe.name!=null && recipe.vegan !=null ){
         recipes.push(recipe);
    }
    return recipes;
  // check if recipe has name and vegan status
  // add recipe to recipes
  // return recipes array
}
// Task: 2. delete a recipe that matches a given name
const deleteRecipe = (recipes, recipeName) => {
  const updatedList= recipes.filter((recipe)=>{

    if(recipeName!==recipe.name){
      return true;
    } else {
      return false;
    }
  })
   
  return updatedList;
}

//Task: 3. get only vegan recipes

const onlyVeganRecipes=()=>{
    return recipes.filter((recipe)=>{
      return recipe.vegan===true;
    })
}

// Task: 4. get the names of the ingredients of a recipe
const getIngredientNames = (recipes, recipeName) => {
  const myRecipe = recipes.find(recipe => {
    return recipe.name === recipeName;
  })
  return myRecipe.ingredients.map(ingredient=>
    ingredient.name)
}

//Task: 5. add a recipe to favorites
const addToFavorites = (favorites, recipe) => {
    favorites.push(recipe);
    return favorites;
}

//Task: 6. remove a recipe from favorites
const removeFavorite = (favorites, recipeName) => {
 const  updatedFavorites = favorites.filter(recipe=>{
    if(recipe.name === recipeName){
      return false;
    } else {
      return true;
    }
  })
  return updatedFavorites;
}

// Task: 7. get the list of names of the items in favorites

const itemsNameInFavourites = (favorites) => {
  return favorites.map(recipe => recipe.name)
}

// the recipes array 
let Recipes=[{name: "salmon soup",vegan: false,ingredients: [{name: "salmon",quantity: 1,}, {name: "cream",quantity: 2,}, {name: "milk",quantity: 1,}]}, {
  name: "carbonara",vegan: false,ingredients: [{name: "pasta",quantity: 1,}, {name: "cheese",quantity: 5,}, {name: "milk",quantity: 1,}]}, {
    name: "rice bowl",vegan: false,ingredients: [{name: "rice",quantity: 2,}, {name: "water",quantity: 1,}]}];*/

//Task: 8. edit a recipe - change the name

const editRecipe = (recipes, oldName, newName) => {
 const edited = recipes.map(recipe => {
    if(recipe.name === oldName){
      recipe.name = newName;
    } 
    return recipe
  })
  return edited;
  

  // find the recipe by oldName
  // change the name to newName
  // this can be done by map
  // map each recipe to itself. If the name matches, map it to a new object with newName
}


// Task: 9. edit a recipe - make it vegan / make it non-vegan

let recipes = [{name: "salmon soup",vegan: false,ingredients: [{name: "salmon",quantity: 1,}, {name: "cream",quantity: 2,}, {name: "milk",quantity: 1,}]}, {
  name: "carbonara",vegan: false,ingredients: [{name: "pasta",quantity: 1,}, {name: "cheese",quantity: 5,}, {name: "milk",quantity: 1,}]}, {
    name: "rice bowl",vegan: false,ingredients: [{name: "rice",quantity: 2,}, {name: "water",quantity: 1,}]}];

const toggleVeganStatus = (recipes, recipeName) => {
    const toBeEditedRecipe = recipes.find(recipe => {
      if(recipe.nam === recipeName){
        return recipe;
      }   
        return toBeEditedRecipe; 
    })
  if (toBeEditedRecipe.vegan === true){
    return toBeEditedRecipe.vegan = false;
  } else{
    return toBeEditedRecipe.vegan=true;
  }
}

console.log(toggleVeganStatus(recipes,"rice bowl"));