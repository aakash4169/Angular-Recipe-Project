import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
   subscription:Subscription

recipes:Recipe[]

  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute,private ds:DataStorageService) {

    
   }

  ngOnInit() {
    this.subscription=this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes
      }
    )

   // this.subscription=this.ds.fetchRecipes().subscribe()
    this.recipes=this.recipeService.getRecipes();
  }

onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
}

ngOnDestroy(){
  this.subscription.unsubscribe()
}
  
}
