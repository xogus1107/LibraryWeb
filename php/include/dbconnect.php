<?php
$hostname = "127.0.0.1"; //아아피 혹은 도메인이름
$username= "root";   //아이디 (root)
$password = "apmsetup"; //root 비번
$dbname = "library";   //데이터베이스 이름 중 하나
$dbConnect = new mysqli($hostname, $username, $password, $dbname);
?>
