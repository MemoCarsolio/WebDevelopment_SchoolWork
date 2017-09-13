
var button = document.querySelector('#logbut');
button.addEventListener("click",function(){
  validate_password();
  open();
})
var buttonmod = document.querySelector('#backbut');
buttonmod.addEventListener("click",function(){
  close();


})




function validate_password(){

  var passw1 = document.getElementById("p1").value;
  var passw2 = document.getElementById("p2").value;



  if (passw1 == "" && passw2 == "") {
    document.getElementById("icon1").className = "smile icon"
    document.getElementById("answer").textContent = "Input a password please"

  }

  else if (passw1 == passw2) {

document.getElementById("icon1").className = "circle check icon"
document.getElementById("answer").textContent = "They are the same Password"

  }
  else {
    document.getElementById("icon1").className = "remove circle icon"
    document.getElementById("answer").textContent = "They are different passwords"
  }



}
function open(){

  $('.ui.basic.modal')
    .modal('show')
  ;

}
function close(){
  $('.ui.basic.modal')
    .modal('hide')
  ;

}
