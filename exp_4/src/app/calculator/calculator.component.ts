import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent{
  n1:any;
  n2:any;
  result:any;
  add(x:any,y:any){
    if(x==undefined || y==undefined)
        this.result="Please enter both the numbers";
    else
        this.result=x+y;
  }
  subtract(){
    if(this.n1==undefined || this.n1==undefined)
        this.result="Please enter both the numbers";
    else
        this.result=this.n1-this.n2;
  }
  multiply(){
    if(this.n1==undefined || this.n1==undefined)
        this.result="Please enter both the numbers";
    else
        this.result=(this.n1*this.n2).toFixed(3);
  }
  divide(){
    if(this.n1==undefined || this.n1==undefined)
        this.result="Please enter both the numbers";
    else
        this.result=(this.n1/this.n2).toFixed(3);
  }
  clear(){
    this.n1=undefined;
    this.n2=undefined;
    this.result="";
  }
}
