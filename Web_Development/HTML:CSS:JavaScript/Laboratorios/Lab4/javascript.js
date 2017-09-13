
var ans = document.querySelector('#ans')
var pregunta = document.querySelector('#tdleft')

//Arreglos del ejercicio 2
var a1 = [1, 0, 0, -3, -4, 10, 14, 2];
var a2 = [3, 4, 5, 0, 0, 0, -2, 105, -600, 0, 0, 1, 2, 3];
//Arreglos del ejercicio 3
var c1r1 = [5, 7, 2, 10, 10];
var c1r2 = [7, 4, 3];
var c1r3 = [2, 2, 2, 5, 6, 7, 2];
var c1r4 = [10, 10, 10];

var c2r1 = [8, 9, 6, 9, 9, 7];
var c2r2 = [5, 5];
var c2r3 = [8, 4, 3, 10, 5];
var c2r4 = [7, 8, 10, 2, 1];




function tabla_num() {
  pregunta.textContent = "El usuario escoge un número y el programa despliega de 1 a n con sus cuadrados y cubos"
  var num = prompt("Escoge un número", "número");



  var string = ("<table><tr><td>Numero</td><td>Cuadrado</td><td>Cubo</td></tr>");


  for (var i = 1; i <= num; i++) {

    var cuadrado = (i * i);
    var cubo = (i * i * i)
    string = string + "<tr><td>" + i + "</td><td>" + cuadrado + "</td><td>" + cubo + "</td></tr>";

  }

  string = string + "</table>";
  ans.innerHTML = string;

}

function sum_random() {
  var time = new Date();

  var t1 = time.getSeconds();

  pregunta.textContent = "Usar prompt para preguntarle una suma al usuario y contar su tiempo"

  var r1 = Math.floor(Math.random() * 101);
  var r2 = Math.floor(Math.random() * 101);
  var numo = prompt("Cuanto es " + r1 + " + " + r2, "respuesta");
  var respuesta = (r1 + r2);

  var time2 = new Date();
  var t2 = time2.getSeconds();
  var tfinal;

  if (t1 < t2) {
    tfinal = t2 - t1;
  } else if (t2 < t1) {

    var aux = 60 - t1;
    tfinal = aux + t2;

  }

  if (numo == r1 + r2) {

    ans.innerHTML = ("Correcto la suma de " + r1 + " + " + r2 + " es = " + respuesta + "<br>El tiempo que tomo fue = " + tfinal + "s");
  } else {
    ans.innerHTML = "Incorrecto" + "<br> El tiempo que tomo fue = " + tfinal + "s";
  }

}

function arreglo1() {

  var opcion = prompt("Escoje entre la prueba 1 o 2, 1 o 2");

  if (opcion == 1) {
    pregunta.innerHTML = "Darle al usuario un anlisis de un arreglo ya definido. La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.  <br> a1 = [1,0,0,-3,-4,10,14,2]";
    contador(a1);
  }
  if (opcion == 2) {
    pregunta.innerHTML = "Darle al usuario un anlisis de un arreglo ya definido. La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.  <br> a2 = var a2 = [3,4,5,0,0,0,-2,105,-600,0,0,1,2,3]";
    contador(a2);
  }


}

function contador(a) {


  var zeros = 0;
  var positiv = 0;
  var negativ = 0;

  var string = ("<table><tr><td>Ceros</td><td>#Negativos</td><td>#Positivos</td></tr>");


  for (var i = 0; i <= a.length; i++) {

    if (a[i] == 0) {
      zeros++;
    } else if (a[i] < 0) {
      negativ++;
    } else if (a[i] > 0) {
      positiv++;
    }
  }

  string = string + "<tr><td>" + zeros + "</td><td>" + negativ + "</td><td>" + positiv + "</td></tr></table>";


  ans.innerHTML = string;


}



function arreglo2() {
  var opcion = prompt("Escoje entre la prueba 1 o 2, 1 o 2");

  if (opcion == 1) {
    pregunta.innerHTML = "Darle al usuario el promedio de arreglos en un arreglo, opción a";
    promedios(c1r1, c1r2, c1r3, c1r4);
  }
  if (opcion == 2) {
    pregunta.innerHTML = "Darle al usuario el promedio de arreglos en un arreglo, opción b";
    promedios(c2r1, c2r2, c2r3, c2r4);
  }

}

function promedios(a1, a2, a3, a4) {
  var colum = [a1, a2, a3, a4];
  var aux = 0;
  for (var i = 0; i < colum.length; i++) {


    for (var x = 0; x < colum[i].length; x++) {
      aux += colum[i][x];


    }
    aux = aux / colum[i].length;
    var lol = aux.toFixed(2);
    colum[i] = lol;
    aux = 0;
  }
  var string = ("<table><tr><td>a1</td><td>a2</td><td>a3</td><td>a4</td></tr><tr><td>" + colum[0] + "</td><td>" + colum[1] + "</td><td>" + colum[2] + "</td><td>" + colum[3] + "<td></tr>");
  ans.innerHTML = string



}



function reverse() {
  pregunta.innerHTML = "pedir un número y luego dar El número con sus dígitos en orden inverso."
  var rev = 0;
  var num = prompt("Escoja un número que quiera voltear, número");
  var i = num;

  //Encontre esto en unos forums y pues fue bastante útil pero no se si es "Cheating"
  num = num + ""
  rev = num.split("").reverse().join("");

ans.innerHTML = ("El número que usted escogio fue = " + i + " <br> El número al reves = " + rev);



}
