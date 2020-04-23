import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        ShoppingListComponent,
    ShoppingEditComponent,

    ],
    imports:[
        RouterModule,
        
        FormsModule,
        ReactiveFormsModule,
        ShoppingListRoutingModule,
        SharedModule
        /*

        if module is small...this can be done instead of creating new routing module
            RouterModule.forChild(
                {path:'shopping-list',component:ShoppingListComponent}
            )*/
        
        
    ]
})
export class ShoppingListModule{

}