import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeList } from './components/recipe-list/recipe-list';
import { HttpClient } from '@angular/common/http';
import { ListTitle } from './components/list-title/list-title';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { RecipePage } from './components/recipe-page/recipe-page';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, RecipePage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('recipe-app');
}
