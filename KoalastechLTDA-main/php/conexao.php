<?php

$usuario = 'root'; //alterar se necessario
$senha = 'root'; // alterar se necessario
$database = 'KoalasTech'; //alterar o nome do banco de dados
$host = 'localhost:3306'; // alterar o localhost para o site de hospedagem

$conn = new mysqli($host, $usuario, $senha, $database);

if($conn->error) {
    die("Falha ao conectar ao banco de dados: " . $conn->error);
} else {
    echo "conectado";
}