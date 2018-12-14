<?php
    $prevPage = $_SERVER['HTTP_REFERER'];
    include "include/session.php";
    include "include/dbConnect.php";
    $serialNumber = $_SESSION['ses_book_number'];
    $title = $_POST['input_title'];
    $writer = $_POST['input_writer'];
    $publisher = $_POST['input_publisher'];
    $bookcount = $_POST['input_bookcount'];

    if($title == '' || $writer == '' || $publisher == '' || $bookcount == ''){
        echo '빈 값이 있습니다.';
        header('location:'.$prevPage);
    }
    $sql = "UPDATE library.book set title='{$title}', writer='{$writer}', publisher='{$publisher}', book_count='{$bookcount}' where serial_number = '{$serialNumber}'";

    if($dbConnect->query($sql)){
      header('Location: ../html/admin_page_book.html');
    } else{
      header('location:'.$prevPage);
    }
    echo $sql;
?>
