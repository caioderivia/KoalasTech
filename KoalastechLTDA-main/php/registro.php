<?php
include('conexao.php');

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm-password'];

if ($password === $confirm_password) {
    
    // Insere os dados no banco de dados
    $sql = "INSERT INTO registro (username, email, senha) VALUES ('$username', '$email', '$password')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Usuário registrado com sucesso!";
    } else {
        echo "Erro ao registrar usuário: " . $conn->error;
    }
} else {
    echo "Erro: As senhas não coincidem!";
}

// Fecha a conexão com o banco de dados
$conn->close();

?>
