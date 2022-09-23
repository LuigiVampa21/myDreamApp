import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() onShowRecipe = new EventEmitter<Recipe>()
  recipeName: string = '';
  recipeDescription: string = '';
  recipeImagePath: string = '';
  @Output() recipeToShow: {name:string,description:string,imagePath:string}

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(e:Recipe){
    this.onShowRecipe.emit(e)
  }
}
