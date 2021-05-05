<?php
$nombre = htmlspecialchars($_POST['nombre']);
$apellidos = htmlspecialchars($_POST['apellidos']);
$dni = md5(md5(htmlspecialchars($_POST['dni'])));
$fecha = htmlspecialchars($_POST['fecha_nacimiento']);
$domicilio = htmlspecialchars($_POST['domicilio']);
$cp = htmlspecialchars($_POST['codigo_postal']);
$localidad = htmlspecialchars('milocalidad');
$telefono = htmlspecialchars($_POST['telefono']);
$mail = htmlspecialchars($_POST['email']);
$formacion = htmlspecialchars($_POST['formacion-previa']);
if(isset($_POST['enviar'])){
   if(is_array($_POST['cursos'])){
    $cursos= '';
    //Contamos el n�mero de inputs seleccionados con "checked"
    $checked_cont = count($_POST['cursos']);
    //Recorremos el Bucle para almacenar y visualizar los valores activos.
    foreach ($_POST['cursos'] as $key => $seleccion){
        if($cursos != $checked_cont-1){
            $cursos .= $value .', ';
        }else{
            $cursos .= $seleccion.'.';
        }
    }
}else{
    $cursos = 'No se ha seleccionado ning�n curso.';
} 
}

$modalidad = htmlspecialchars($_POST['modalidad']);
?>
<!Doctype html>   
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Recepci�n de datos del formulario</title>
        <link rel="stylesheet" type="text/css" href="../styles/style.css">
        <link rel="stylesheet" href="../styles/formCursos.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet">
        <link rel="icon" type="image/svg+xml" href="../images/svg/icono.svg" sizes="any">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.slim.min.js"></script>
    <body class="container">
        <header>
            <a href="../index.html">
                <img class="logo-header" src="../images/logo-svg.svg" alt="logo TERRITORIO WEB">
            </a>
        </header>
        <main>
            <section>
                <ul>
                    <h2>Datos recogidos por POST desde el formulario</h2>
                    <li><?php echo 'Nombre: ' . $nombre ?></li>
                    <li><?php echo 'Apellidos: ' . $apellidos?></li>
                    <li><?php echo 'DNI: ' . $dni?></li>
                    <li><?php if($fecha != null){
                                echo 'Fecha: '. $fecha;
                         }else{
                             echo 'El campo fecha está vacio';
                         }?></li>
                    <li><?php if($domicilio != null){
                                echo 'Domicilio: '. $domicilio;
                            }else{
                             echo 'El campo domicilio está vacio';
                            }?></li>
                    <li><?php if($cp != null){
                                echo 'Domicilio: '. $cp;
                            }else{
                             echo 'El campo código postal está vacio';
                            }?></li>
                    <li><?php if($localidad == 'milocalidad'){
                                echo 'El campo localidad está vacio';
                            }else{
                                echo 'Domicilio: '. $localidad;
                            }?></li>
                    <li><?php echo 'Teléfono: '. $telefono?></li>
                    <li><?php echo 'E-mail: '. $mail?></li>
                    <li><?php if($formacion != null){
                                echo 'Formación: '. $formacion;
                            }else{
                                echo 'El campo formación está vacio';
                            }?></li>
                    <li><?php if($cursos != null){
                                echo 'Cursos: '. $cursos;
                            }else{
                                echo 'El campo cursos está vacio';
                            }?></li>
                    <li><?php if($modalidad != null){
                                echo 'Modalidad: '. $modalidad;
                            }else{
                                echo 'El campo modalidad está vacio';
                            }?></li>
                </ul>
            </section>
        </main>


    </body>
    </head>    
</html>
