<?php
    include "include/dbConnect.php";
    $serialnumber = $_POST['serialnumber'];
    $sql = "SELECT * FROM library.book WHERE serial_number = '{$serialnumber}'";
    $res = $dbConnect->query($sql);
    if($res->num_rows >= 1){
        echo json_encode(array('res'=>'bad'));
    }else{
        echo json_encode(array('res'=>'good'));
    }
?>
