<!Doctype html>   
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Recepci&oacuten de datos del formulario</title>
        <link rel="stylesheet" type="text/css" href="../styles/style.css">
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
        <nav class="nav" id="menu">
            <a href="../index.html" class="activa">Inicio</a>
            <div class="desplegable">Qué ofrecemos
                <i class="fa fa-caret-down"></i>
                <div class="desp-contenido">
                    <a href="../content/servicios.html">Servicios</a>
                    <a href="../content/cursos.html">Cursos</a>
                </div>
            </div>
            <a href="../content/about.html">Quiénes somos</a>
            <a href="../content/contact.html">Contacto</a>
            <button class="icono" onclick="despliega()">&#9776;</button>
        </nav>
<?php
error_reporting(0);
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$dni = md5(md5(htmlspecialchars($_POST['dni'])));
$fecha = $_POST['fecha_nacimiento'];
$domicilio = $_POST['domicilio'];
$cp = $_POST['codigo_postal'];
$localidad = $_POST[('milocalidad')];
$telefono = $_POST['telefono'];
$mail = $_POST['email'];
$formacion = $_POST['formacion-previa'];
$cursos = is_array($_POST['cursos']);
$checked_cont = count($cursos);
//Recorremos el Bucle para almacenar y visualizar los valores activos.
$mostrar = '';
foreach ($cursos as $key => $seleccion){
    if($mostrar != $checked_cont-1){
        $mostrar .= $seleccion .', ';
    }else{
        $mostrar .= $seleccion.'.';
    }
}
$modalidad = $_POST['modalidad'];
?>
        <main class="main-index">
            <section class="main-section">
                <ul class="datos">
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
        <footer>
            <section class="footer-section-1">
                <a href="#"><img src="../images/svg/facebook-f-brands.svg" alt="icono facebook" class="icono-redes"></a>
                <a href="#"><img src="../images/svg/twitter-brands.svg" alt="icono twitter" class="icono-redes"></a>
                <a href="#"><img src="../images/svg/pinterest-brands.svg" alt="icono pinterest" class="icono-redes"></a>
                <a href="#"><img src="../images/svg/instagram-brands.svg" alt="icono instagram" class="icono-redes"></a>
                <a href="#"><img src="../images/svg/youtube-brands.svg" alt="icono youtube" class="icono-redes"></a>
            </section>

            <section class="footer-section-2">
                <ul>
                    <li><a href="#">Términos y condiciones</a></li>
                    <li><a href="#">Trabaja con nosotros</a></li>
                    <li><a href="#">Política de privacidad</a></li>
                </ul>
            </section>

            <section class="footer-section-3">
                <p id="copy"></p>
            </section>
        </footer>                    
    </body>
    </head>    
</html>
