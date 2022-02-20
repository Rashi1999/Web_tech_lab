var period_btn=document.getElementById("period_submit");
var list_btn=document.getElementById("add_list_item");
var money_btn=document.getElementById("add_expense");
var reset_per_btn=document.getElementById("reset");
var reset_exp_btn=document.getElementById("reset_exp");
var reset_todo_btn=document.getElementById("reset_todo");
// var list=document.querySelectorAll("ul")[0];
// var expense=document.querySelectorAll("ul")[1];
var amt_type=document.querySelector("select");
var exp=0;
var inc=0;

function periodTrack(){
    var start_date=document.getElementById("period_start_date").value;
    var duration=parseInt(document.getElementById("period_cycle").value);
    var d = new Date(start_date);
    d.setDate(d.getDate()+duration);
    var diff=Math.floor((d.getTime()-Date.now())/(1000 * 3600 * 24));
    document.getElementById("next_cycle").innerHTML = "Next cycle from : "+d.toDateString()+" <br><br>Days left : "+diff;
}

function addItemInList(){
    var item=document.getElementById("item");
    if(item.value.length !=0){

        // Alternate method with list
        // var li=document.createElement("li");
        // li.appendChild(document.createTextNode(item.value.padEnd(50,'\u00A0')));
        // li.innerHTML=item.value.padEnd(100,'\u00A0');
        // li.className="display";
        // list.append(li);
        // var del=document.createElement("span");
        // del.className="fa fa-duotone fa-trash fa-lg del_btn";
        // del.addEventListener("click", function(){del.parentNode.remove();});
        // li.append(del);
        var table = document.getElementById("shop_list");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        row.insertCell(0).innerHTML= item.value;
        row.insertCell(1).innerHTML= '<span class="fa fa-duotone fa-trash fa-lg" onClick="deleteListRow(this)"></span>';
        item.value="";
    }
}

function deleteListRow(obj){
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("shop_list");
  table.deleteRow(index);
}

function addExpenseRow(){
    var t = document.getElementById("type");
    var d = document.getElementById("amount_desc");
    var a = document.getElementById("amount");
    var table = document.getElementById("exp_tab");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    
    row.insertCell(0).innerHTML= t.value;
    row.insertCell(1).innerHTML= d.value;
    row.insertCell(2).innerHTML= a.value;
}


function trackMoney(){
    var item=document.getElementById("amount_desc");
    var amt=document.getElementById("amount");
    if(item.value.length !=0 && amt.value.length!=0){
        if(amt_type.value=="expense"){
          exp+=parseInt(amt.value);
          inc-=parseInt(amt.value);
        }else{
          inc+=parseInt(amt.value);
        }
        addExpenseRow();
        item.value="";
        amt.value="";
    }
    var xValues = ["Expense","Income"];
    var yValues = [exp,inc];
    var barColors = ["#351923","#1e7145"];
    
    new Chart("myChart", {
        type: "pie",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: barColors,
            data: yValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "Money Tracker"
          }
        }
      });
}
function clear_period(){
  document.getElementById('next_cycle').innerHTML=' ';
}
function clear_todo(){
  document.getElementById('shop_list').innerHTML=' ';
}

function clear_expense(){
  document.getElementById('exp_tab').innerHTML='';
  // document.getElementById('myChart').innerHTML='&nbsp;'; 
  // document.getElementById("myChart").destroy();
  // document.getElementById("myChart").innerHTML = '<canvas id="myChart"></canvas>';
// var ctx = document.getElementById("myChart").getContext("2d");
  // document.getElementById('myChart').destroy(); 
  var parent = document.getElementById('contain_canvas');
  var child = document.getElementById('myChart');  
  parent.removeChild(child);            
  parent.innerHTML ='<canvas id="myChart"></canvas>';             
  exp=0;
  inc=0;
}

period_btn.addEventListener("click",periodTrack);
list_btn.addEventListener("click",addItemInList);
money_btn.addEventListener("click",trackMoney);
reset_per_btn.addEventListener("click",clear_period);
reset_exp_btn.addEventListener("click",clear_expense);
reset_todo_btn.addEventListener("click",clear_todo);
