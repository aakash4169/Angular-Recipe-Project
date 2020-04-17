import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, ɵɵsetNgModuleScope, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f',{static:true}) slForm:NgForm
  subscription:Subscription
  editMode=false;
  editedItemIndex:number
  editedItem:Ingredient

  /*
@ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
@ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;*/

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{
          this.editMode=true;
          this.editedItemIndex=index;
          this.editedItem=this.shoppingListService.getIngredientById(index);
          this.slForm.setValue({
            name:this.editedItem.name,
            amount:this.editedItem.amount
          })
      }

    )
  }

  onAddItem(form:NgForm)
  {
    /*const inpName=this.nameInputRef.nativeElement.value;
    const inpAmount=this.amountInputRef.nativeElement.value*/
    const value=form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient)
    }
    else
    this.shoppingListService.onIngredientAdded(newIngredient);
    this.editMode=false
    form.reset()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  OnClear(){
    this.editMode=false;
    this.slForm.reset()
  }

  OnDelete(){
    this.OnClear()
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
  }

}
