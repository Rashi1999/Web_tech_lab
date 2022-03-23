var uname=document.getElementsByName("userName")[0];
var sub1_btn=document.getElementById("submit1");
var sub2_btn=document.getElementById("submit1");

function name_validations(){
    // First Name Validations
    if(uname.value.length==0)
        console.log("! Empty field not allowed");
    else{
        for( var i of fname.value)
        if(!((i>='a' && i<='z') || (i>='A' && i<='Z') || i==' ')){
            console.log("! Only alphabets are allowed");
            break;
        }
    }
}

sub1_btn.addEventListener("click", name_validations);