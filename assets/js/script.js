$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }



})
// ========================= login slide script ===============================//
var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");
function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    
}


function check(input){
    if(input.value!=document.getElementById('password').value){
        input.setCustomValidity('Password not Matching.');
} else {
    // input is valid -- reset the error message
    input.setCustomValidity('');
}
}