import { NgModule } from '@angular/core';
import {RouterModule,Routes, PreloadAllModules} from '@angular/router'
import { AppComponent } from './app.component';
import { RecipeComponentComponent } from './recipe-component/recipe-component.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-component/recipe-detail/recipe-detail.component';

import { RecipeEditComponent } from './recipe-component/recipe-edit/recipe-edit.component';
import { RecipesResolver } from './recipe-component/recipe-list/reciper-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth-guard';


const appRoutes:Routes=[
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',loadChildren:'./recipe-component/recipe.module#RecipesModule'},
    
   //new syntax is different
    {path:'auth',component:AuthComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}