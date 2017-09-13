<?php

function promedio($a1){
  $aux_p = 0;
  for ($i = 0; $i < count($a1); $i++){
    $aux_p += $a1[$i];
  }
  $total_p = $aux_p/count($a1);
return $total_p;
}

function mediana($a1){
      sort($a1);
      $aux_mediana = ceil(count($a1)/2);
      return $a1[$aux_mediana];


}
function enlistado($a1){
  $salida_L = "<table class ="."ui celled table"."><thead><tr><th>Lista</th></tr></thead><tr><td><ul>";
  for ($i= 0; $i  < count($a1) ; $i++) {
    $salida_L = $salida_L."<li>".$a1[$i]."</li>";
  }
    $salida_L = $salida_L."</ul></td><tr><td><ul>";
    $salida_L = $salida_L."<li>Promedio = ".promedio($a1)."</li>";
    $salida_L = $salida_L."<li>Mediana = ".mediana($a1)."</li>";
    $salida_L = $salida_L."<li>Low to High = ".Low_High($a1)."</li>";
    $salida_L = $salida_L."<li>High to Low = ".High_Low($a1)."</li>";
    $salida_L = $salida_L."</ul></td></tr></table>";



  return $salida_L;
}

function Low_High($a1){
  sort($a1);
  $low = "";
  for ($i=0; $i < count($a1); $i++) {
    $low = $low.$a1[$i]." ";
  }
  return $low;

}
function High_Low($a1){
  rsort($a1);
  $high = "";
  for ($i=0; $i < count($a1); $i++) {
    $high = $high.$a1[$i]." ";
  }
  return $high;

}

function tabla_ncc($num){
  $ncc = "<table class ="."ui celled table"."  id ="."table1"."><thead><th>Numero</th><th>Cuadrado</th><th>Cubo</th></thead>";
  for ($i=1; $i <= $num; $i++) {
    $ncc = $ncc."<tr><td>".$i."</td><td>".$i*$i."</td><td>".$i*$i*$i."</td></tr>";
  }
  $ncc = $ncc."</table>";
  return $ncc;
}




include("page1.html");


 ?>
