import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { ListTitle } from '../list-title/list-title';
import { RecipeList } from '../recipe-list/recipe-list';

@Component({
  selector: 'app-home',
  imports: [Hero, ListTitle, RecipeList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
