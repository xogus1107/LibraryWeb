<?php
    include "include/dbConnect.php";
    $id = $_POST['id'];
    $serial_number = $_POST['number'];
    $today = date("Ymd");



    $sql = "INSERT into library.rental values('{$id}','{$serial_number}','{$today}')";
    if($dbConnect->query($sql)){
      echo json_encode(array('res'=>'good'));
      $sql2 = "SELECT * FROM library.book WHERE serial_number = '{$number}'";
      $res = $dbConnect->query($sql2);
      $row = $res->fetch_array(MYSQLI_ASSOC);

      if ($row != null) {
        $rented_book_count = $row[rented_book_count] + 1;
        $sql = "UPDATE library.book set rented_book_count='{$rented_book_count}' where serial_number = '{$serialNumber}'";
        }
        if($row == null){
          echo json_encode(array('res'=>'bad'));
        }


      $sql = "UPDATE library.book set title='{$title}', writer='{$writer}', publisher='{$publisher}', book_count='{$bookcount}' where serial_number = '{$serialNumber}'";

    } else{
      echo json_encode(array('res'=>'bad'));
    }
?>
