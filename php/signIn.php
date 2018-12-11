<?php
    include "include/session.php";
    include "include/dbConnect.php";

    $memberId = $_POST['memberId'];
    $memberPw = md5($memberPw = $_POST['memberPw']);
    $sql = "SELECT * FROM library.user WHERE id = '{$memberId}' AND password = '{$memberPw}'";
    $res = $dbConnect->query($sql);
    $row = $res->fetch_array(MYSQLI_ASSOC);
    if ($row != null) {
      $_SESSION['ses_userid'] = $row['id'];
      if($row['user_type'] == 'admin') {
        header('Location: ../html/admin_page.html');
      }
      else{
        header('Location: ../html/user_page.html');
      }
      }
      if($row == null){
        header('Location: ../html/main.html');
      }
?>
