<?php
    include "include/session.php";
    include "include/dbConnect.php";
    $number = $_POST['number'];
    $_SESSION['ses_book_number'] = $number;

    $sql = "SELECT * FROM library.book WHERE serial_number = '{$number}'";
    $res = $dbConnect->query($sql);
    $row = $res->fetch_array(MYSQLI_ASSOC);
    if ($row != null) {
      echo json_encode(array('res'=>'good','serial_number'=>$row['serial_number'], 'title'=>$row['title'], 'writer'=>$row['writer'], 'publisher'=>$row['publisher'], 'book_count'=>$row['book_count'], 'rented_book_count'=>$row['rented_book_count'], 'image_path'=>$row['image_path']));
      }
      if($row == null){
        echo json_encode(array('res'=>'bad'));
      }
?>
