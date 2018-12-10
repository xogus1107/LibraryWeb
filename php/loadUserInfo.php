<?php
    include "include/session.php";
    include "include/dbConnect.php";
    $memberId = $_SESSION['ses_userid'];

    $sql = "SELECT * FROM library.user WHERE id = '{$memberId}'";
    $res = $dbConnect->query($sql);
    $row = $res->fetch_array(MYSQLI_ASSOC);
    if ($row != null) {
      echo json_encode(array('res'=>'good','name'=>$row['name'], 'birthday'=>$row['birthday'], 'address'=>$row['address'], 'phone_number'=>$row['phone_number']));
      }
      if($row == null){
        echo json_encode(array('res'=>'bad'));
      }
?>
