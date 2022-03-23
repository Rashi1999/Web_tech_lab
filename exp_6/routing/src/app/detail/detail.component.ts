import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FoodlistService } from '../foodlist.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public rid:number;
  items:any;
  constructor(private route:ActivatedRoute) {
    let service=new FoodlistService();
    this.items=service.getFoodlist();
   }

  ngOnInit(){
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    // let iid=parseInt(this.route.snapshot.params['id']);
    // this.route.queryParams.subscribe(params => {
    //   this.rid = parseInt(params['id']);
    // })
    this.rid=id;
    console.log(this.rid);
  }

  pizza_ingredient: { name: string, quan: string }[] = [
    { "name": "all purpose flour", "quan": "2 cup" },
    { "name": "tomato ketchup", "quan": "100 ml" },
    { "name": "tomato", "quan": "1" },
    { "name": "onion", "quan": "2" },
    { "name": "chilli flakes", "quan": "1 teaspoon" },
    { "name": "baking powder", "quan": "1 teaspoon" },
    { "name": "oregano", "quan": "1 teaspoon" },
    { "name": "processed cheese", "quan": "100 gm" },
    ];
    pasta_ingredient: { name: string, quan: string }[] = [
      { "name": "Chopped Broccoli", "quan": "1/4 cup" },
      { "name": "Red Capsicum", "quan": "1/4 cup" },
      { "name": "Oil", "quan": "1/4 teaspoon" },
      { "name": "Butter", "quan": "2 spoon" },
      { "name": "Finely chopped Garlic", "quan": "100 ml" },
      { "name": "Maida", "quan": "1/2 teaspoon" },
      { "name": "Red Chilli Flakes", "quan": "1/4 teaspoon" },
      ];
    paneer_ingredient: { name: string, quan: string }[] = [
      { "name": "Chopped Broccoli", "quan": "1/4 cup" },
      { "name": "Red Capsicum", "quan": "1/4 cup" },
      { "name": "Oil", "quan": "1/4 teaspoon" },
      { "name": "Butter", "quan": "2 spoon" },
      { "name": "Finely chopped Garlic", "quan": "100 ml" },
      { "name": "Maida", "quan": "1/2 teaspoon" },
      { "name": "Red Chilli Flakes", "quan": "1/4 teaspoon" },
      ];
    burger_ingredient: { name: string, quan: string }[] = [
      { "name": "Chopped Broccoli", "quan": "1/4 cup" },
      { "name": "Red Capsicum", "quan": "1/4 cup" },
      { "name": "Oil", "quan": "1/4 teaspoon" },
      { "name": "Butter", "quan": "2 spoon" },
      { "name": "Finely chopped Garlic", "quan": "100 ml" },
      { "name": "Maida", "quan": "1/2 teaspoon" },
      { "name": "Red Chilli Flakes", "quan": "1/4 teaspoon" },
      ];
    pancake_ingredient: { name: string, quan: string }[] = [
      { "name": "Chopped Broccoli", "quan": "1/4 cup" },
      { "name": "Red Capsicum", "quan": "1/4 cup" },
      { "name": "Oil", "quan": "1/4 teaspoon" },
      { "name": "Butter", "quan": "2 spoon" },
      { "name": "Finely chopped Garlic", "quan": "100 ml" },
      { "name": "Maida", "quan": "1/2 teaspoon" },
      { "name": "Red Chilli Flakes", "quan": "1/4 teaspoon" },
      ];
}
