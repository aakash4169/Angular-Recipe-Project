import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    
constructor(private slList:ShoppingListService){

}

recipesChanged=new Subject<Recipe[]>()
  /* private recipes:Recipe[]=[

        new Recipe("Tasty Schnitzel","Super Tasty",'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',[
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe("Big Fat burger","What else do you need",'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',[
            new Ingredient('Buns',1),
            new Ingredient('Meat',20)
        ])
      ];
*/
private recipes:Recipe[]=[]

      getRecipes(){
        console.log(this.recipes)
          return this.recipes.slice();
      }

      getRecipesbyId(id:number){
        return this.recipes[id];
    }

      addToShoppingList(ingredients:Ingredient[]){
        this.slList.addToShoppingList(ingredients)
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
      }
      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice())

      }

      deleteRecipe(index:number){
        this.recipes.splice(index,1)
        this.recipesChanged.next(this.recipes.slice())
      }

      setRecipes(recipe:Recipe[]){
        this.recipes=recipe
        this.recipesChanged.next(this.recipes.slice())
      }
      
}