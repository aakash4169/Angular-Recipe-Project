import { Routes, RouterModule } from '@angular/router';
import { RecipeComponentComponent } from './recipe-component.component';
import { AuthGuard } from '../auth/auth-guard';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesResolver } from './recipe-list/reciper-resolver.service';
import { NgModule } from '@angular/core';

const routes:Routes=[
    {path:'',component:RecipeComponentComponent,canActivate:[AuthGuard],children:[
        {path:'',component:RecipeStartComponent},
        {path:'new',component:RecipeEditComponent},
        {path:':id',component:RecipeDetailComponent,resolve:[RecipesResolver]},
        {path:':id/edit',component:RecipeEditComponent,resolve:[RecipesResolver]},
    ]},
]


@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class RecipesRoutingModule{

}