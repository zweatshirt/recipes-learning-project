import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-list';
import { Router } from '@angular/router';
import { RecipesService } from '../../services/recipesService';
import { RecipeInfo } from '../recipe-info/recipe-info';

@Component({
  selector: 'app-recipe-card',
  imports: [RecipeInfo],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css',
})
export class RecipeCard {
  @Input() recipe!: Recipe;

  constructor(private router: Router, private recipesService: RecipesService) {}

  goToRecipe() {
    this.recipesService.emitRecipe(this.recipe);
    this.router.navigate(['/recipe', this.recipe.id]);
  }
}
