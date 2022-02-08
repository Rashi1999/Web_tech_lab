var n1=document.getElementById("num1");
var n2=document.getElementById("num2");
var n3=document.getElementById("num3");
var add=document.getElementById("ans");
var add_btn=document.getElementById("add");
var sub_btn=document.getElementById("sub");
var mul_btn=document.getElementById("table");
var clr_add_btn=document.getElementById("reset_add");
var clr_mult_btn=document.getElementById("reset_mul");
var tabledet=document.querySelector("ul");

function sum(){
  if(n1.value.length==0 || n2.value.length ==0)
    add.value="Please enter number(s) !";
  else
    add.value=parseFloat(n1.value)+parseFloat(n2.value);
}

function subtract(){
  if(n1.value.length==0 || n2.value.length ==0)
    add.value="Please enter number(s) !";
  else
    add.value=parseFloat(n1.value)-parseFloat(n2.value);
}

function clear1() {
  n1.value="";
  n2.value="";
  add.value="";
}

function cal_table(){
  var tab=[];
  var n=parseFloat(n3.value);
  tabledet.innerHTML="";
  if(n3.value.length==0){
    var pele=document.createElement('li');
    pele.appendChild(document.createTextNode("Please enter a number !"));
    tabledet.appendChild(pele);
  }
  else{
    for (var i = 1; i <= 10; i++) {
      var pele=document.createElement('li');
      pele.appendChild(document.createTextNode(i+" x "+n+" = "+n*i));
      // var x=i.toString().padEnd(7,'\ ')+" x ".toString().padEnd(5," ")+n+" = "+n*i;
      // console.log(x);
      // pele.appendChild(document.createTextNode(x));
      tabledet.appendChild(pele);
    }
  } 
}

function clear2() {
  n3.value="";
  tabledet.innerHTML="";
}

add_btn.addEventListener("click",sum);
sub_btn.addEventListener("click",subtract);
clr_add_btn.addEventListener("click",clear1);
mul_btn.addEventListener("click",cal_table);
clr_mult_btn.addEventListener("click",clear2);
