<?php
    include "include/session.php";
    include "include/dbConnect.php";
    $memberId = $_SESSION['ses_userid'];


    $sql = "SELECT * FROM library.rental WHERE id = '{$memberId}'";
    $res = $dbConnect->query($sql);
    $row = $res->fetch_array(MYSQLI_ASSOC);
    if ($row == null) {
      echo json_encode(array('res'=>'bad'));
      }
    if($row != null){
      $serial_number = $row['serial_number'];
      $sql2 = "SELECT * FROM library.book WHERE serial_number = '{$serial_number}'";
      $res2 = $dbConnect->query($sql2);
      $row2 = $res2->fetch_array(MYSQLI_ASSOC);
      if ($row2 != null) {
        echo json_encode(array('res'=>'good','rented_day'=>$row['rented_day'],'serial_number'=>$row2['serial_number'], 'title'=>$row2['title'], 'writer'=>$row2['writer'], 'publisher'=>$row2['publisher'], 'book_count'=>$row2['book_count'], 'rented_book_count'=>$row2['rented_book_count'], 'image_path'=>$row2['image_path']));
        }
        if($row2 == null){
          echo json_encode(array('res'=>'bad'));
        }
    }
?>
