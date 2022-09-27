
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
    if(recipe.name != null && recipe.vegan != null ){
         recipes.push(recipe);
    }
    return recipes;
}
 
// Task: 2. delete a recipe that matches a given name
const deleteRecipe = (recipes, recipeName) => {
  const updatedList = recipes.filter((recipe)=>{
    if(recipeName !== recipe.name){
      return true;
    } else {
      return false;
    }
  })
  return updatedList;
}

//Task: 3. get only vegan recipes

/*const onlyVeganRecipes = (recipes) => {
    return recipes.filter((recipe) => {
      return recipe.vegan === true;
    })
}*/
const onlyVeganRecipes = (recipes) => {
  const veganRecipes = recipes.filter(recipe => {
      if(recipe.vegan === true){
        return recipe;
      }
  })
  return veganRecipes;
}

// Task: 4. get the names of the ingredients of a recipe

const getIngredientNames = () => {
  const myRecipe = recipes.find(recipe => {
    return recipe.name === recipeName;
  })
  return myRecipe.ingredients.map(ingredient =>
    ingredient.name)
}

//Task: 5. add a recipe to favorites

/* const addToFavorites = (favorites, recipe) => {
    favorites.push(recipe);
    return favorites;
}*/


/*const recipeToFavourites = (recipes, recipeName) => {
  const filteredRecipe= recipes.find(recipe=>{
      if(recipe.name === recipeName){ 
          return true;
      }
  })

  return filteredRecipe;
}

const addToFavorites = (recipes,favorites, recipeName) => {
  const recipe = recipeToFavourites(recipes, recipeName);
  if(recipe){
      favorites.push(recipe);
  }



  return favorites;
}*/
const addToFavorites = (recipes,favorites, recipeName) => {
  const recipeToFavourites = searchByRecipeName(recipes, recipeName);
  if(recipeToFavourites){
     favorites.push(recipeToFavourites);
  }
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

//Task: 7. get the list of names of the items in favorites

const itemsNameInFavourites = (favorites) => {
  return favorites.map(recipe => recipe.name)
}

//Task: 8. edit a recipe - change the name

const editRecipe = (recipes, oldName, newName) => {
 const edited = recipes.map(recipe => {
    if(recipe.name === oldName){
      recipe.name = newName;
    } 
    return recipe
  })
  return edited;
}


// Task: 9. edit a recipe - make it vegan / make it non-vegan

const toggleVeganStatus = (recipes, recipeName) => {
  const editedRecipes = recipes.map(recipe => {
    if(recipe.name === recipeName ){
      if (recipe.vegan === true){
          recipe.vegan = false;
      } else{
        recipe.vegan = true;
      }
          
    } 
    return recipe;
  })
  return editedRecipes;
  
}

// Task: 10. get one recipe by name - return the recipe that matches the exact name of the recipe

const searchByRecipeName = (recipes, recipeName) => {
 const myRecipeByName = recipes.find(recipe=>{
    if(recipe.name === recipeName){
      return recipe;
    }   
  })
  return myRecipeByName;
}

// Task: 11. search by ingredient name - return all recipes that contain a given ingredient name

const searchByIngredientName = (recipes, ingredientName) => {
  const newRecipesWithIngredient = recipes.filter(recipe =>{
    const ingredientList = recipe.ingredients.filter(ingredient=>{
      if(ingredient.name === ingredientName ) {
        return true;
      }
    })

    if(ingredientList.length !== 0){
      return true;
    } else{
      return false;
    }
   
  })
  return newRecipesWithIngredient;
}

// Task: 12. add an ingredient to a recipe

const addIngredient = (recipes, recipeName,ingredient) => {
      
  const updatedRecipes = recipes.map(recipe => {
      if(recipe.name == recipeName){
          recipe.ingredients.push(ingredient);
      }
      return recipe;
  })

  return updatedRecipes;
}

// Task: 13. delete an ingredient from a recipe, 

/*const deleteIngredient = (recipes, recipeName, ingredientName) => {
  
  const myRecipeToBeChanged = recipes.find(recipe => {
    if(recipe.name === recipeName){
      return true;
    }
  })
    const ingredientToChange = myRecipeToBeChanged.ingredients.filter(ingredient => {
      if(ingredient.name !== ingredientName){
        return true;
      }
    });
    return ingredientToChange;
}*/


const deleteIngredient = (recipes, recipeName, ingredientName) => {
  
  const ingredientChangedRecipes = recipes.map(recipe => {
      if(recipe.name === recipeName){
          const newIngredients =  recipe.ingredients.filter(ingredient => {
              if(ingredient.name !== ingredientName){
                  return true;
              }
          })
          recipe.ingredients = newIngredients;
      } 

      return recipe;
             
  })
   return ingredientChangedRecipes;
}

// Task: 14. edit a recipe - change the quantity of an ingredient
   
/*const editIngredientQuantity = (recipes, recipeName, ingredientName, newQuantity) => {
  
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

const updatedNewRecipes = (recipes,recipeName) => recipes.map(recipe=>{
  if(recipe.name != recipeName){
    return recipe;
  } else{
    recipe.ingredients = editIngredientQuantity();
    return recipe;
  }
})
*/
const editIngredientQuantity = (recipes, recipeName, ingredientName, newQuantity) => {
const newRecipesWithQuanityChange = recipes.map(recipe => {
  if(recipe.name === recipeName){
    recipe.ingredients.map(ingredient => {
      if(ingredient.name == ingredientName){
        ingredient.quantity = newQuantity;
      }
      return ingredient;
    });
  }

  return recipe;
})

return newRecipesWithQuanityChange;
}
 
// Task: 15. Execute the functions you implemented above as required below
const main = () => {
  let recipes = getRecipes();
  
  let favorites = [];

// Task: 15.1
// Add the following recipes to the recipes array using the function from Task-1
// Lentil Bolognese, vegan, & Ingredients: 1 lentil; 3 tomatoes; 1 pasta; 1 onion

  
  const lentilBolognese = {name: "Lentil Bolognese",
  vegan: true,
  ingredients: [{
      name: "lentil",
      quantity: 1,
    }, {
      name: "tomatoes",
      quantity: 3,
    }, {
      name: "pasta",
      quantity: 1,
    },
    {
      name: "onion",
      quantity: 1,
    }
  ]
};
recipes = addRecipe(recipes, lentilBolognese); 

const OzzoChicken = {name: "Ozzo Chicken",
vegan: false,
ingredients: [{
    name: "spinach",
    quantity: 1,
  }, {
    name: "chicken",
    quantity: 1,
  }, {
    name: "sour cream",
    quantity: 1,
  },
  ]
};

recipes = addRecipe(recipes, OzzoChicken);

// Task: 15.2
// Delete the recipe named "carbonara" using the function from Task-2 

recipes = deleteRecipe(recipes,"carbonara");

// Task: 15.3
// Add ingredient "garlic with quantity: 3" to the recipe "salmon soup"
// Add ingredient "lentil with quantity: 1" to the recipe "rice bowl"

recipes = addIngredient(recipes, "salmon soup",{name: "garlic", quantity: 3,} );
recipes = addIngredient(recipes, "rice bowl",{name: "lentil", quantity: 1,} );

// Task: 15.4
// Delete ingredient named "water" from the recipe "rice bowl"

recipes = deleteIngredient (recipes, "rice bowl", "water");

// Task: 15.5
// Get the recipe by the name "Ozzo Chicken" and Add it to favorites
// Get the recipe by the name "salmon soup" and Add it to favorites
// Get the recipe by the name "Lentil Bolognese" and Add it to favorites

favorites = addToFavorites(recipes,favorites, "Lentil Bolognese");
favorites = addToFavorites(recipes,favorites, "salmon soup");
favorites = addToFavorites(recipes,favorites, "Ozzo Chicken");


// Task: 15.6

// Delete the recipe "Lentil Bolognese" from the favorite

favorites = removeFavorite (favorites,"Lentil Bolognese");

// Task: 15.7
// Change the name of the recipe "rice bowl" to "Japanese Rice Bowl"

recipes = editRecipe(recipes,"rice bowl", "Japanese Rice Bowl");

// Task: 15.8
// change "rice bowl" to be vegan

recipes = toggleVeganStatus(recipes,"Japanese Rice Bowl");

// Task: 15.9
// change the quantity of the Ingredient lentil to be 2, in  Lentil Bolognese

recipes = editIngredientQuantity(recipes,"Lentil Bolognese", "lentil", 2);

// Task: 15.10
// call the function you implemented on task-5 to get the list of ingredients of "salmon soup"
// console.log these Ingredients
// TEST 1: it should print these ingredients: salmon, cream, milk, garlic

//ingredients = getIngredientNames (recipes, "salmon soup");
//console.log(ingredients);

// Task: 15.11
// console.log all the vegan recipes
// TEST 2: It should print the recipe Japanese Rice Bowl

recipes = onlyVeganRecipes (recipes);

// Task: 15.12
// console.log all the recipes that contain the ingredient "lentil"
// TEST 3: It should print the recipes Japanese Rice Bowl and Lentil Bolognes

recipes = searchByIngredientName (recipes,"lentil");

//console.dir(recipes, {depth: null});
//console.dir(favorites, {depth: null});
console.log(itemsNameInFavourites (favorites));

}

main();




  
  

