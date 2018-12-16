<?php
	header('Content-Type: text/html; charset=UTF-8');
	include "include/session.php";
	include "include/dbConnect.php";

	$abc = $_POST['input'];



	//echo "input".$abc."<br>";

	$return_array = array();

	$sql = "delete FROM library.book where title like '".$abc."'";
	$result = $dbConnect->query($sql);


?>