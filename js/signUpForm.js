function resetIdCheck() {
  var form = document.forms['sign_up_input'];
  var idCheck = document.getElementById('idCheck');

  idCheck = '0';
}

function memberIdCheck() {
  var form = document.forms['sign_up_input'];
  var memberId = form['input_id'];
  var idCheck = document.getElementById('idCheck');

  console.log(memberId.value);
  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '../php/memberIdCheck.php',
    data: {
      memberId: memberId.value
    },
    success: function(json) {
      if (json.res == 'good') {
        console.log(json.res);
        alert('사용가능한 아이디 입니다.');
        idCheck.value = '1';
      } else {
        alert('다른 아이디를 입력해 주세요.');
        memberId.focus();
        idCheck.value = '0';
      }
    },
    error: function() {
      console.log('failed');
    }
  })
}

function memberPw2Check() {
  var form = document.forms['sign_up_input'];
  var memberPw = form['input_password'];
  var memberPw2 = form['input_password_check'];

  if (memberPw.value != memberPw2.value) {
    alert('비밀번호가 일치하지 않습니다.');
  }
}

function checkSubmit() {
  var form = document.forms['sign_up_input'];
  var idCheck = document.getElementById('idCheck');
  var memberPw = form['input_password'];
  var memberPw2 = form['input_password_check'];
  var memberBirthDay = form['input_birthday'];
  var memberName = form['input_name'];
  var memberAddress = form['input_address'];
  var memberPhoneNumber = form['input_phone'];

  if (idCheck.value == '0') {
    alert('아이디 중복 검사를 해주세요.');
    return false;
  }
  if (memberPw.value.length < 1) {
    alert('비밀번호를 입력해 주세요.');
    return false;
  }

  if (memberPw.value != memberPw2.value) {
    alert('비밀번호와 비밀번호확인이 다릅니다.');
    return false;
  }
  if (memberName.value.length < 1) {
    alert('이름을 입력해주세요.');
    return false;
  }
  if (memberBirthDay.value.length < 1) {
    alert('생일을 입력해주세요.');
    return false;
  }
  if (memberAddress.value.length < 1) {
    alert('주소를 입력해주세요.');
    return false;
  }
  if (memberPhoneNumber.value.length < 1) {
    alert('핸드폰 번호를 입력해주세요.');
    return false;
  }

  return true;
}
