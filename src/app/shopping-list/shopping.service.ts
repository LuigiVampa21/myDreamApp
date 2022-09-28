import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  getShoppingList(){
    return this.ingredients.slice();
  }

  onNewIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient) 
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  onAddNewIngredientsFromRecipe(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}