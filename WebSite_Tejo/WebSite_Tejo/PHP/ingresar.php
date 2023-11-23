<?php
@include 'config.php';

// Verificar si el formulario ha sido enviado
if (isset($_POST['submit'])) {
    // Obtener los valores del formulario
    $primer_jugador = $_POST['primer_jugador'];
    $punt1 = $_POST['Puntaje_j1'];
    $segundo_jugador = $_POST['segundo_jugador'];
    $punt2 = $_POST['Puntaje_j2'];

    // Insertar en la base de datos solo si se proporcionan valores para primer_jugador y segundo_jugador
    if (!empty($primer_jugador) && !empty($segundo_jugador)) {
        $sql = "INSERT INTO partidas (primer_jugador, Puntaje_j1, segundo_jugador, Puntaje_j2) VALUES ('$primer_jugador', '$punt1', '$segundo_jugador', '$punt2')";
        mysqli_query($conn, $sql);
        header('location:../index.html');
        exit();
    }
}

// Resto de tu código HTML, incluyendo el formulario
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

    <!-- Stylesheet -->
    <style media="screen">
        @import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap');

        body {
            background-color: #080710;
        }

        .background {
            width: 430px;
            height: 520px;
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
        }

        .background .shape {
            height: 200px;
            width: 200px;
            position: absolute;
            border-radius: 50%;
        }

        .shape:first-child {
            background: rgba(253, 21, 50);
            left: -80px;
            top: -80px;
        }

        .shape:last-child {
            background: rgba(101, 141, 234);
            right: -70px;
            bottom: -90px;
        }

        form {
            height: 520px;
            width: 400px;
            background-color: #111212;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
            padding: 50px 35px;
        }

        form * {
            font-family: 'Silkscreen', sans-serif;
            color: #ffffff;
            letter-spacing: 0.5px;
            outline: none;
            border: none;
        }

        form h3 {
            font-size: 32px;
            font-weight: 500;
            text-align: center;
        }

        label {
            display: block;
            margin-top: 30px;
            font-size: 16px;
            font-weight: 500;
        }

        input {
            display: block;
            height: 50px;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.07);
            border-radius: 3px;
            padding: 0 10px;
            margin-top: 8px;
            font-size: 14px;
            font-weight: 300;
        }

        ::placeholder {
            color: #e5e5e5;
        }

        button {
            margin-top: 30px;
            width: 100%;
            background-color: #ffffff;
            color: #080710;
            padding: 15px 0;
            font-size: 18px;
            font-weight: 600;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form action="" method="POST">
        <h3>iniciar sesión</h3>
        <label for="username">1° Jugador</label>
        <input type="text" placeholder="Ingrese su nombre" name="primer_jugador">
        <label for="username">Puntaje</label>
        <input type="number" placeholder="Ingrese su puntaje" name="Puntaje_j1" max="7">
        <label for="password">2° Jugador</label>
        <input type="text" placeholder="Ingrese su nombre" name="segundo_jugador">
        <label for="username">Puntaje</label>
        <input type="number" placeholder="Ingrese su puntaje" name="Puntaje_j2" max="7">

        <button type="submit" name="submit">Guardar</button>
    </form>
</body>
</html>