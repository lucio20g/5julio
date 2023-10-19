<!--===== Vinculación a la conexión de la base de datos =====-->

<?php

@include 'PHP/config.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<!--===== Tabla de encuestadores =====-->

<div class="table">
    <div class="table-header">
      <p> Partidas jugadas </p>
    </div>
  </div>
  
  <div class="table-section">
    <table>
      <thead>
        <tr>
          <th> Primer jugador </th>
          <th> Puntaje </th>
          <th> Segundo jugador </th>
          <th> Puntaje </th>
        </tr>
      </thead>
  
      <?php 
  
      $sql = "SELECT * FROM partidas";
      $result = mysqli_query($conn, $sql);
  
      while($mostrar = mysqli_fetch_array($result)) {
      
      ?>
  
      <tbody>
        <tr>
          <td> <?php echo $mostrar['primer_jugador'] ?> </td>
          <td> <?php echo $mostrar['Puntaje_j1'] ?> </td>
          <td> <?php echo $mostrar['segundo_jugador'] ?> </td>
          <td> <?php echo $mostrar['Puntaje_j2'] ?> </td>
        </td>
        </tr>
      </tbody>
  
      <?php
  
    }
  
      ?>
  
    </table>
  
  </div>

</body>
</html>