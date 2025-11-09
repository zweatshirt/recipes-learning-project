import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-list';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-recipe-info',
  imports: [NgIf],
  templateUrl: './recipe-info.html',
  styleUrl: './recipe-info.css',
})
export class RecipeInfo {
  @Input() recipe!: Recipe | null;
}
