import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private router:Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params)=>{
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipe(this.id);
      })
    
  }


  toShoppingList(recipe:Recipe){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
