

var buttonf = document.querySelector("#buttonf");
buttonf.addEventListener("click", function(){

  done();

})


function done(){
  var firstn = document.getElementById("firstn").value
  var secondn = document.getElementById("secondn").value
  var addr = document.getElementById("address").value
  var month = document.getElementById("month").value
  var year = document.getElementById("year").value

  document.getElementById("nm").textContent = firstn;
  document.getElementById("sn").textContent = secondn;
  document.getElementById("adrs").textContent = addr;
  document.getElementById("mo").textContent = month;
  document.getElementById("ye").textContent = year;


  document.getElementById("anse").style.visibility = "visible";

}
