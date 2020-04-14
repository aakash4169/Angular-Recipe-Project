import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.css'],
  providers:[RecipeService]
})
export class RecipeComponentComponent implements OnInit {
selectedRecipe:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe=recipe;
      }
    )
  }

}
