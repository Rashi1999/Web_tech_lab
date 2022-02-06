var n1=document.getElementById("num1");
var n2=document.getElementById("num2");
var n3=document.getElementById("num3");
var add=document.getElementById("ans");
var add_btn=document.getElementById("add");
var mul_btn=document.getElementById("table");
var clr_add_btn=document.getElementById("reset_add");
var clr_mult_btn=document.getElementById("reset_mul");
var tabledet=document.querySelector("ul");

function sum(){
  add.value=parseInt(n1.value)+parseInt(n2.value);
}

function clear1() {
  n1.value="";
  n2.value="";
  add.value="";
}

function cal_table(){
  var tab=[];
  var n=parseInt(n3.value);
  tabledet.innerHTML="";
  for (var i = 1; i <= 10; i++) {
    var pele=document.createElement('li');
    pele.appendChild(document.createTextNode(i+" x "+n+" = "+n*i));
    // var x=i.toString().padEnd(7,'\ ')+" x ".toString().padEnd(5," ")+n+" = "+n*i;
    // console.log(x);
    // pele.appendChild(document.createTextNode(x));
    tabledet.appendChild(pele);
  }
}

function clear2() {
  n3.value="";
  tabledet.innerHTML="";
}

add_btn.addEventListener("click",sum);
clr_add_btn.addEventListener("click",clear1);
mul_btn.addEventListener("click",cal_table);
clr_mult_btn.addEventListener("click",clear2);
