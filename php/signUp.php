<?php
    $prevPage = $_SERVER['HTTP_REFERER'];
    include "include/dbConnect.php";
    $memberId = $_POST['input_id'];
    $memberName = $_POST['input_name'];
    $memberPw = $_POST['input_password'];
    $memberPw2 = $_POST['input_password_check'];
    $memberBirthDay = $_POST['input_birthday'];
    $memberAddress = $_POST['input_address'];
    $memberPhoneNumber = $_POST['input_phone'];
    //PHP에서 유효성 재확인
    //아이디 중복검사.
    $sql = "SELECT * FROM library.user WHERE id = '{$memberId}'";
    $res = $dbConnect->query($sql);
    if($res->num_rows >= 1){
        echo '이미 존재하는 아이디가 있습니다.';
        exit;
    }
    //비밀번호 일치하는지 확인
    if($memberPw !== $memberPw2){
        echo '비밀번호가 일치하지 않습니다.';
        exit;
    }else{
        //비밀번호를 암호화 처리.
        $memberPw = md5($memberPw);
    }
    //닉네임, 생일 그리고 이름이 빈값이 아닌지
    if($memberBirthDay == '' || $memberAddress == '' || $memberPhoneNumber == ''){
        echo '빈 값이 있습니다.';
    }
    $sql = "INSERT into library.user values('{$memberId}','{$memberPw}','{$memberName}','{$memberBirthDay}','{$memberAddress}','{$memberPhoneNumber}','user')";
    if($dbConnect->query($sql)){
      header('Location: ../html/main.html');
    } else{
      header('location:'.$prevPage);
    }
    echo $sql;
?>
