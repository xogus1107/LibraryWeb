<?php
    $prevPage = $_SERVER['HTTP_REFERER'];
    include "include/dbConnect.php";
    $serialNumber = $_POST['input_serialnumber'];
    $title = $_POST['input_title'];
    $writer = $_POST['input_writer'];
    $publisher = $_POST['input_publisher'];
    $bookcount = $_POST['input_bookcount'];

    $sql = "SELECT * FROM library.book WHERE serial_number = '{$serialNumber}'";
    $res = $dbConnect->query($sql);
    if($res->num_rows >= 1){
        echo '이미 존재하는 일련 번호 입니다.';
        header('location:'.$prevPage);
    }

    if($title == '' || $writer == '' || $publisher == '' || $bookcount == ''){
        echo '빈 값이 있습니다.';
        header('location:'.$prevPage);
    }
    $sql = "INSERT into library.book values('{$serialNumber}','{$title}','{$writer}','{$publisher}','{$bookcount}',0,'empty')";
    if($dbConnect->query($sql)){
      header('Location: ../html/admin_page_book.html');
    } else{
      header('location:'.$prevPage);
    }
    echo $sql;
?>
