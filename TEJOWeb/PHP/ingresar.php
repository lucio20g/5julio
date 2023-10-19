<?php

@include 'config.php';

if(isset($_POST['submit'])) {

   $primer_jugador = mysqli_real_escape_string($conn, $_POST['primer_jugador']);
   $segundo_jugador = mysqli_real_escape_string($conn, $_POST['segundo_jugador']);

   $select = " SELECT * FROM partidas WHERE primer_jugador = '$primer_jugador' && segundo_jugador = '$segundo_jugador' ";

   $result = mysqli_query($conn, $select);

   if(mysqli_num_rows($result) > 0){

    echo '<script language="javascript"> alert("¡El siguiente usuario ya existe!"); 
    window.location.href="../sesion.html" </script>';

   } else {

         $insert = "INSERT INTO partidas(primer_jugador, segundo_jugador) VALUES('$primer_jugador','$segundo_jugador')";
         mysqli_query($conn, $insert);
         header('location:../juego.html');
      
        }
   }


?>