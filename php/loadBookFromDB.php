<?php

	header('Content-Type: text/html; charset=UTF-8');
	include "include/session.php";
	include "include/dbConnect.php";

	$abc = $_POST['input_text'];

	echo "input".$abc."<br>";

	$sql = "SELECT * FROM library.book";
	$result = $dbConnect->query($sql);
	while($row = $result->fetch_array(MYSQLI_ASSOC)){
		echo "title: ".$row[title]." writer: ".$row[writer]."<br>";
	}



?>