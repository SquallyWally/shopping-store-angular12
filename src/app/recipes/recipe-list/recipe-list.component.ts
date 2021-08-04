import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple description',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-fried-rice-009-1543877224.jpg'), new Recipe('A Test Recipe', 'This is a simple description',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-fried-rice-009-1543877224.jpg')
  ] //only recepies will be stored
  constructor() {
  }

  ngOnInit(): void {
  }

}
