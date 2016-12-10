<?php

//Cabeceras HTTP para autorizar el acceso desde el móvil.
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// configuration
$dbhost 	= "mysql11.000webhost.com";
$dbname		= "a7503308_stiven";
$dbuser		= "a7503308_stiven";
$dbpass		= "futbolista123";

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$jsonFutbolista = file_get_contents("php://input");    
	$futbolistaObj = json_decode($jsonFutbolista);
	

    // database connection
    $conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);

    // query
    $sql = "INSERT INTO futbolista (id, nombre, apellidos, cedula, talla, peso, posicion) VALUES (:id, :nombre, :apellidos, :cedula, :talla, :peso, :posicion)";
    $q = $conn->prepare($sql);

    $result = $q->execute(array(':id'=>NULL,
                      ':nombre'=>$futbolistaObj->nombre,
                      ':apellidos'=>$futbolistaObj->apellidos,
                      ':cedula'=>$futbolistaObj->cedula,
					  ':talla'=>$futbolistaObj->talla,
					  ':peso'=>$futbolistaObj->peso,
					  ':posicion'=>$futbolistaObj->posicion
                ));
				
	 if($result){
        //Todo salió bien
        echo json_encode(array(
            resultado => 1,
            mensaje => 'El registro del futbolista se guardo'
        ));
    }else{
        //Hubo un error
        echo json_encode(array(
            resultado => 0,
            mensaje => 'No se guardo el registro',
            exception => $q->errorInfo()
        ));
    }	
}

if($_SERVER['REQUEST_METHOD']=='GET')
{
	$conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
	$consultaSQL= $conn->prepare("SELECT * FROM futbolista");
	$futbolista= $consultaSQL->execute();
	$arregloFutbolista= $consultaSQL-> fetchALL(PDO::FETCH_ASSOC);
	$json=json_encode($arregloFutbolista);
	echo $json;
}
?>
