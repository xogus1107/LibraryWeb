<?php
	header('Content-Type: text/html; charset=UTF-8');
	include "include/session.php";
	include "include/dbConnect.php";

	$abc = $_POST['input_text'];

	//echo "input".$abc."<br>";

	$return_array = array();

	$sql = "SELECT * FROM library.book where title like '%".$abc."%' or publisher like '%".$abc."%'";
	$result = $dbConnect->query($sql);
	$row_array = array();
	while($row = $result->fetch_array(MYSQLI_ASSOC)){
		$row_array = $row;
		array_push($return_array, $row_array);

		//echo "title: ".$row[title]." writer: ".$row[writer]."<br>";

	}

	$encoded = json_encode($return_array);


	echo $encoded;

function han ($s) { return reset(json_decode('{"s":"'.$s.'"}')); }
function to_han ($str) { return preg_replace('/(\\\u[a-f0-9]+)+/e','han("$0")',$str); }


?>
