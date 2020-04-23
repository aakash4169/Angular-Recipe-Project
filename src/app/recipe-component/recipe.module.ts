import { NgModule } from '@angular/core';
import { RecipeComponentComponent } from './recipe-component.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';




@NgModule({
    declarations:[
        RecipeComponentComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeStartComponent
   
    
    ],
    imports:[
        RouterModule,
       SharedModule,
        FormsModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
    
})


export class RecipesModule{

}