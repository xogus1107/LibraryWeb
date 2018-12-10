<?php
    include "include/session.php";
    include "include/dbConnect.php";
    $memberId = $_SESSION['ses_userid'];
    $name = $_POST['input_name'];
    $birthday = $_POST['input_birthday'];
    $address = $_POST['input_address'];
    $phone_number = $_POST['input_phone'];

    $sql = "SELECT * FROM library.user WHERE id = '{$memberId}'";
    $sql = "UPDATE library.user set name='{$name}', birthday='{$birthday}', address='{$address}', phone_number='{$phone_number}' where id = '{$memberId}'";

    $res = $dbConnect->query($sql);
    if($dbConnect->query($sql)){
      header('Location: ../html/user_page.html');
    } else{
      header('location:'.$_SERVER['HTTP_REFERER']);
    }
?>
