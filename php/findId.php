<?php
    include "include/dbConnect.php";
    $memberName = $_POST['name'];
    $sql = "SELECT * FROM library.user WHERE name = '{$memberName}'";
    $res = $dbConnect->query($sql);
    $row = $res->fetch_array(MYSQLI_ASSOC);
    if ($row != null) {
      echo json_encode(array('res'=>$row['id']));
      }
      if($row == null){
        echo json_encode(array('res'=>'bad'));
      }

?>
