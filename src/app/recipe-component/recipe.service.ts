import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected=new EventEmitter<Recipe>()
constructor(private slList:ShoppingListService){

}
   private recipes:Recipe[]=[

        new Recipe("Tasty Schnitzel","Super Tasty",'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',[
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe("Big Fat burger","What else do you need",'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',[
            new Ingredient('Buns',1),
            new Ingredient('Meat',20)
        ])
      ];


      getRecipes(){
          return this.recipes.slice();
      }

      getRecipesbyId(id:number){
        return this.recipes[id];
    }

      addToShoppingList(ingredients:Ingredient[]){
        this.slList.addToShoppingList(ingredients)
      }
}