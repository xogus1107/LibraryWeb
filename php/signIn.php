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
      echo $_SESSION['ses_userid'].'님 안녕하세요';
      echo '로그아웃 하기';
      }
      if($row == null){
        echo '로그인 실패 아이디와 비밀번호가 일치하지 않습니다.';
      }
?>
