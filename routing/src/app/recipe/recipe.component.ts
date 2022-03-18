import { Component, OnInit, Input ,Output, ElementRef, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { FoodlistService } from '../foodlist.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent{
  items:any;
  // Alternate Method without service
  // recipe: { id: number, rec_name: string, rec_desc: string }[] = [
  // { "id": 1, "rec_name": "Pizza", "rec_desc": "Dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot" },
  // { "id": 2, "rec_name": "White Sauce Pasta", "rec_desc": "Pasta is a type of food made from a mixture of flour, eggs, and water that is formed into different shapes and then boiled. Spaghetti, macaroni, and noodles are types of pasta." },
  // { "id": 3, "rec_name": "Pancake", "rec_desc": "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread." },
  // { "id": 4, "rec_name": "Paneer Tikka", "rec_desc": "Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish that is widely available in India and countries with an Indian diaspora." },
  // { "id": 5, "rec_name": "Hamburger", "rec_desc": "A hamburger is a food consisting of fillings —usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll." },
  // ];

  constructor(private router:Router){
    let service=new FoodlistService();
    this.items=service.getFoodlist();
  }

  onSelect(r:any){
    this.router.navigate(['/recipe',r.id]);
  }
}
