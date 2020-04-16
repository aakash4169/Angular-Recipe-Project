import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs';

export class ShoppingListService{

    ingredientsChanged=new Subject<Ingredient[]>()
    ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
        ];

        onIngredientAdded(ingredient:Ingredient){
            this.ingredients.push(ingredient);
            this.ingredientsChanged.next(this.ingredients.slice())
            
          }


          getIngredients(){
              return this.ingredients.slice();
          }

          addToShoppingList(ingredients:Ingredient[]){
              this.ingredients.push(...ingredients)
              this.ingredientsChanged.next(this.ingredients.slice())
          }
}