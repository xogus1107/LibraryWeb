<?php
    include "include/session.php";

    unset($_SESSION['ses_userid']);
    if($_SESSION['ses_userid'] == null){
      session_destroy();
      header('Location: ../html/main.html');
    }

?>
