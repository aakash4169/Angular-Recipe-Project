import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe.service';


@Injectable({providedIn:'root'})
export class RecipesResolver implements Resolve<Recipe[]>{
    constructor(private dataStorageService:DataStorageService,private recipeService:RecipeService){

    }
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        const recipes=this.recipeService.getRecipes();
        if(recipes.length===0){
            return this.dataStorageService.fetchRecipes()
        }
        else{
            return recipes
        }
        
    }
}