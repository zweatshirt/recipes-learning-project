import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipesService';
import { NgFor } from '@angular/common';
import { RecipeCard } from '../recipe-card/recipe-card';

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  mealType: string[];
  prepTimeMinutes: number;
  rating: number;
  reviewCount: number;
  servings: number;
  tags: string[];
  userId: number;
  caloriesPerServing: number;
  image: string;
}

@Component({
  selector: 'app-recipe-list',
  imports: [NgFor, RecipeCard],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css',
})
export class RecipeList {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService.recipes.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }
}
