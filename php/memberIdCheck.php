<?php
    include "include/dbConnect.php";
    $memberId = $_POST['memberId'];
    $sql = "SELECT * FROM library.user WHERE id = '{$memberId}'";
    $res = $dbConnect->query($sql);
    if($res->num_rows >= 1){
        echo json_encode(array('res'=>'bad'));
    }else{
        echo json_encode(array('res'=>'good'));
    }
?>
