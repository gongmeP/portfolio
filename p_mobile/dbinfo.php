<?php
$host = "localhost";
$user = "pjk5002"; 
$pwd = "di2qjsdldi!";
$dbname = "pjk5002";

$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);
?>