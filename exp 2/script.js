var sub_btn=document.getElementById("submit");
var reset_btn=document.getElementById("reset");
var fname=document.getElementById("fname");
var mname=document.getElementById("mname");
var lname=document.getElementById("lname");
var pass=document.getElementById("pass");
var cpass=document.getElementById("cpass");
var email=document.getElementById("email");
var val_fname=document.getElementById("val_fname");
var val_lname=document.getElementById("val_lname");
var val_mname=document.getElementById("val_mname");
var val_email=document.getElementById("val_email");
var val_pass=document.getElementById("val_pass");
var val_cpass=document.getElementById("val_cpass");
var myInput=document.getElementById("pass");
var letter=document.getElementById("letter");
var capital=document.getElementById("capital");
var number=document.getElementById("number");
var length=document.getElementById("length");
var ssym=document.getElementById("symbol");
var show_chk=document.getElementById("show_pass");
var show_cchk=document.getElementById("show_cpass");
var p=document.querySelectorAll("p");

// Validations

function validations(){
    var temp;
    var x=0;
    clear();

    // First Name Validations
    if(fname.value.length==0)
        val_fname.appendChild(document.createTextNode("! Empty field not allowed"));
    else{
        for( var i of fname.value)
        if(!((i>='a' && i<='z') || (i>='A' && i<='Z'))){
            temp=document.createTextNode("! Only alphabets are allowed");
            val_fname.appendChild(temp);
            break;
        }
    }

    // Middle Name Validations
    for( var i of mname.value)
        if(!((i>'a' && i<'z') || (i>'A' && i<'Z'))){
            temp=document.createTextNode("! Only alphabets are allowed");
            val_mname.appendChild(temp);
            break;
        }

    // Last Name Validations
    for( var i of lname.value)
        if(!((i>'a' && i<'z') || (i>'A' && i<'Z'))){
            temp=document.createTextNode("! Only alphabets are allowed");
            val_lname.appendChild(temp);
            break;
        }
    
    // Password Required Validations
    if(pass.value.length==0)
        val_pass.appendChild(document.createTextNode("! Empty field not allowed"));
    // Confirm Password Required Validations
    if(cpass.value.length==0)
        val_cpass.appendChild(document.createTextNode("! Empty field not allowed"));

    // Validating confirm password
    if(pass.value!==cpass.value){
        temp=document.createTextNode("! Password and Confirm Passwords do not match");
        val_cpass.appendChild(temp)
    }
    
    // Email Validations   
    
    if(ValidateEmail()==0)
        alert("Great ! You successfully fiiled the form. Press ok to submit.");
    
}

// Reset Button

function clear(){
    console.log(p);
    for(var i=0;i<p.length;i++){
        console.log(p[i].innerHTML);
        p[i].innerHTML="";
    }
}

// Adding Event Listeners
sub_btn.addEventListener("click", validations);
reset_btn.addEventListener("click", clear);


// Show Password
show_chk.onclick=function showpass() {
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

// Show Confirm Password
show_cchk.onclick=function showpass() {
    if (cpass.type === "password") {
      cpass.type = "text";
    } else {
      cpass.type = "password";
    }
  }

// Email Validations 
function ValidateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.length==0){
        val_email.appendChild(document.createTextNode("! Empty field not allowed"));
        return -1;
    }
    else if(!(email.value.match(validRegex))){
        val_email.appendChild(document.createTextNode("! Invalid Email Id"));
        return -1;
    }
    else 
        return 0;
  }

//   show_chk.onclick=showpass();

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  
  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  
  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(myInput.value.length >= 5 && myInput.value.length <= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }

     // Validate special symbol
     var sym = /[!@#$%^&*<>?"';:_]/g;
     if(myInput.value.match(sym)) {  
       ssym.classList.remove("invalid");
       ssym.classList.add("valid");
     } else {
        ssym.classList.remove("valid");
        ssym.classList.add("invalid");
     }
  }