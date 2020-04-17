import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs';

export class ShoppingListService{

    ingredientsChanged=new Subject<Ingredient[]>()
    startedEditing= new Subject<number>();
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

          getIngredientById(index:number){
              return this.ingredients[index]
          }

          addToShoppingList(ingredients:Ingredient[]){
              this.ingredients.push(...ingredients)
              this.ingredientsChanged.next(this.ingredients.slice())
          }

          updateIngredient(index:number,ingredient:Ingredient){
                this.ingredients[index]=ingredient
                this.ingredientsChanged.next(this.ingredients.slice())
          }

          deleteIngredient(index:number){
              this.ingredients.splice(index,1);
              this.ingredientsChanged.next(this.ingredients.slice())
          }
}