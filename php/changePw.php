<?php
    include "include/dbConnect.php";
    $memberPw = $_POST['pw'];
    $memberPw = md5($memberPw);
    $memberId = $_POST['id'];
    $sql = "UPDATE library.user set password='{$memberPw}' where id = '{$memberId}'";
    $res = $dbConnect->query($sql);
    if($dbConnect->query($sql)){
      echo json_encode(array('res'=>'good'));

    }else{
      echo json_encode(array('res'=>'bad'));

    }

?>
