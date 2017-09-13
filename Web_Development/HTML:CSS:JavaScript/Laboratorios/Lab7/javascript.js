var button_used = 0;
var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var buy_b = document.querySelector('#buyb');
var hovertext = document.querySelector('#hpr');
var helpi = document.querySelector('#input_a');
var header_b = document.querySelector('#top_header');
var stock1 = 5
var stock2 = 20
var stock3 = 50
var amount;

button1.addEventListener("click", function() {
  button_used = 1;
  bill();

})
button2.addEventListener("click", function() {
  button_used = 2;
  bill();

})
button3.addEventListener("click", function() {
  button_used = 3;
  bill();

})
buy_b.addEventListener("click", function() {
  buy();


})
hovertext.addEventListener("mouseover", function(){
change_color();

})
helpi.addEventListener("mouseover", function(){
help_noti();

})
header_b.addEventListener("click", function(){
  alert1();
})




function help_noti() {
  document.getElementById("message").style.display = "inherit"

}
function open2() {
  $('.ui.modal')
    .modal('show');
}

function bill() {
  amount  = document.getElementById('amount').value
  var cost;
  var disc;
  var total;
  switch (button_used) {
    case 1:
      cost = 18200 * amount;
      disc = 0.95;
      if (stock1 < amount) {
        alert("not enought");

      } else {


        document.getElementById("buy_t").textContent = "COSMOGRAPH DAYTONA"
        document.getElementById("img_mod").src = "images/cd.png"
        document.getElementById("ct").textContent = " " + cost
        document.getElementById("disc").textContent = " 5%"
        open2();

      }
      break;
    case 2:
      cost = 6700 * amount;
      disc = .90;
      if (stock2 < amount) {
        alert("not enought");

      } else {

        document.getElementById("buy_t").textContent = "AIR-KING"
        document.getElementById("img_mod").src = "images/ak.png"
        document.getElementById("ct").textContent = " " + cost
        document.getElementById("disc").textContent = " 10%"
        open2();




      }
      break;
    case 3:
      cost = 8850 * amount;
      disc = .85;
      if (stock3 < amount) {
        alert("not enought");

      } else {

        document.getElementById("buy_t").textContent = "MILGAUSS"
        document.getElementById("img_mod").src = "images/mila.png"
        document.getElementById("ct").textContent = " " + cost
        document.getElementById("disc").textContent = " 15%"
        open2();

      }
      break;

  }

  var total_preship = (cost * disc) * 1.16;
  if (total_preship == 0) {
    document.getElementById('total').textContent = " No amount no total"
  } else {
    total = total_preship + 30;
    document.getElementById('total').textContent = " $" + total.toFixed(2);
  }


}

function buy(){
  switch (button_used) {
    case 1:
      stock1 -= amount;
      document.getElementById("stock1").textContent = stock1
      break;
    case 2:
      stock2 -= amount;
      document.getElementById("stock2").textContent = stock2
      break;
    case 3:
      stock3 -= amount;
      document.getElementById("stock3").textContent = stock3
      break;
  }
  $('.ui.modal')
    .modal('hide');
}

function change_color() {

    document.getElementById("hpr").style.color = "rgb(62, 133, 240)"
}
function alert1() {
  setTimeout(function(){ alert("I said don't click me"); }, 2000);
}

function allowMove(eve) {
    eve.preventDefault();
}

function move(eve) {
    eve.dataTransfer.setData("text", eve.target.id);
}

function drop(eve) {
    eve.preventDefault();
    var data = eve.dataTransfer.getData("text");
    eve.target.appendChild(document.getElementById(data));
}
