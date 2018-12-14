<?php
    include "include/session.php";
    include "include/dbConnect.php";
    $memberId = $_POST['id'];


    $sql = "SELECT * FROM library.rental WHERE id = '{$memberId}'";
    $res = $dbConnect->query($sql);
    $row = $res->fetch_array(MYSQLI_ASSOC);
    if ($row != null) {
      echo json_encode(array('res'=>'bad'));
      }
      if($row == null){
        echo json_encode(array('res'=>'good'));
      }
?>
