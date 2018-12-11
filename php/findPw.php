<?php
    include "include/dbConnect.php";
    $memberName = $_POST['name'];
    $memberId = $_POST['id'];
    $sql = "SELECT * FROM library.user WHERE name = '{$memberName}' and id = '{$memberId}'";
    $res = $dbConnect->query($sql);
    $row = $res->fetch_array(MYSQLI_ASSOC);
    if ($row != null) {
      echo json_encode(array('res'=>'good'));
      }
      if($row == null){
        echo json_encode(array('res'=>'bad'));
      }

?>
