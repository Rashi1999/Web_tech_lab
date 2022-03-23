import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent{
    title = 'exp_5';
    item:any;
    quan:any;
    total:number=0;
    items : string[] = [];
    quantity:number[]=[];
    addToList(){
      if (this.item == '' || this.item == undefined) {
        alert("Please add Item !");
      }
      if (this.quan == '' || this.quan == undefined) {
        alert("Please add Quantity !");
      }
      else {
          let temp=this.item.padEnd(50,'_')+"   "+this.quan;
          // push() method appends the given element(s) in the last of the array and returns the length of the new array.
          this.items.push(this.item);
          this.quantity.push(this.quan);
          this.item = '';
          this.quan='';
      }
      // reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
      this.total = this.quantity.reduce(function(a, b){
        return a + b;
    }, 0);

    }

    deleteTask(index:any) {
      // splice() method changes the content of an array, adding new elements while removing old elements.
      // array.splice(index, howMany, [element1][, ..., elementN]);
      this.items.splice(index, 1);
      this.quantity.splice(index, 1);
      this.total = this.quantity.reduce(function(a, b){
        return a + b;
    }, 0);
  }
  

}

