<?php
	header('Content-Type: text/html; charset=UTF-8');
	include "include/session.php";
	include "include/dbConnect.php";



	$abc = $_POST['input_text'];

	$return_array = array();


	$sql = "
	SELECT name, birthday, address, phone_number, title
	FROM library.user
	LEFT JOIN (
		SELECT * 
		FROM library.book
		NATURAL JOIN library.rental
		)CNT
	ON library.user.id = CNT.id
	where library.user.name like '%".$abc."%'";

//	$sql = "select * from library.user";
	$result = $dbConnect->query($sql);
	$row_array = array();
	while ($row = $result->fetch_array(MYSQLI_ASSOC)){
		$row_array = $row;
		array_push($return_array, $row_array);
	}


	$encoded = to_han(json_encode($return_array));


	echo $encoded;

	function han ($s) { return reset(json_decode('{"s":"'.$s.'"}')); }
	function to_han ($str) { return preg_replace('/(\\\u[a-f0-9]+)+/e','han("$0")',$str); }

?>
