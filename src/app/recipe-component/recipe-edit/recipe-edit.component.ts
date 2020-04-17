import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;
  recipeForm:FormGroup

  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit() {


    
    this.route.params.subscribe(
      (params:Params)=>{
          this.id=+params['id']
          this.editMode=params['id']!=null;
          console.log(this.editMode)
          this.initForm()

      }
    )
  }


  OnSubmit(){
    const newRecipe=new Recipe(this.recipeForm.value['name'],this.recipeForm.value['description'],this.recipeForm.value['imagePath'],this.recipeForm.value['ingredients']);
    if(this.editMode){
      
      this.recipeService.updateRecipe(this.id,newRecipe)
     // this.recipeService.updateRecipe(this.id,this.recipeForm.value)
    }
    else
    {
      this.recipeService.addRecipe(newRecipe)
    }

    this.onCancel();
  }

  initForm(){

    let recipeName='';
    let recipeDescription=''
    let imagePath=''
    let recipeIngredients=new FormArray([])

    if(this.editMode){
      const recipe=this.recipeService.getRecipesbyId(this.id);
      recipeName=recipe.name;
      recipeDescription=recipe.description;
      imagePath= recipe.imagePath
      if(recipe.ingredients){
        for(let ingredient of recipe.ingredients){
         
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }
    this.recipeForm=new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'description':new FormControl(recipeDescription,Validators.required),
      'imagePath':new FormControl(imagePath,Validators.required),
      'ingredients':recipeIngredients
    })
  }

  getControls(){
    
    return (<FormArray>this.recipeForm.get('ingredients')).controls
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
              'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onCancel(){
      this.router.navigate(['../'],{relativeTo:this.route})
  }

  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)

    //(<FormArray>this.recipeForm.get('ingredients')).clear();
  }

}
