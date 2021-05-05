<?php

$nombre = htmlspecialchars($_POST['nombre']);
$apellidos = htmlspecialchars($_POST['apellidos']);
$dni = hash(htmlspecialchars($_POST['dni']));
$fecha = htmlspecialchars($_POST['fecha_nacimiento']);
$domicilio = htmlspecialchars($_POST['domicilio']);
$cp = htmlspecialchars(['codigo_postal']);
$localidad = htmlspecialchars('milocalidad');
$telefono = htmlspecialchars($_POST['telefono']);
$mail = htmlspecialchars($_POST['email']);
$formacion = htmlspecialchars($_POST['formacion-previa']);
$cursos = htmlspecialchars($_POST['cursos']);
$modalidad = htmlspecialchars($_POST['modalidad']);

echo ('Nombre: ' . $nombre . '/n 
    Apellidos: ' . $apellidos . '/n 
    DNI: ' . $dni);

if($fecha != null){
       echo 'Fecha: ' . $fecha;
}else{
    echo 'El campo fecha está vacio';
}

if($domicilio != null){
    echo 'Domicilio: ' . $domicilio;
}else{
 echo 'El campo domicilio está vacio';
}
        
if($cp != null){
    echo 'Domicilio: ', $cp;
}else{
 echo 'El campo código postal está vacio';
}

if($localidad != null){
    echo 'Domicilio: ' . $localidad;
}else{
 echo 'El campo localidad está vacio';
}

echo('Teléfono: '. $telefono. ' /n
    E-mail: ' . $mail);

if($formacion != null){
    echo 'Formación: ' . $formacion;
}else{
    echo 'El campo formación está vacio';
}

if($curos != null){
    echo 'Formación: ' . $cursos;
}else{
    echo 'El campo cursos está vacio';
}

if($modalidad != null){
    echo 'Formación: ' . $modalidad;
}else{
    echo 'El campo formación está vacio';
}



?>