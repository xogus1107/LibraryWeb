function findId(){
  var name = document.getElementById('textbox_idname');

  console.log(name.value);
  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '../php/findId.php',
    data: {
      name: name.value
    },
    success: function(json) {
      if (json.res == 'bad') {
        alert('존재하지 않는 사용자의 이름입니다.');
      } else {
        alert('찾으시는 아이디는 ' + json.res + '입니다.');
        window.location.href="main.html";
      }
    },
    error: function() {
      console.log('failed');
    }
  })
}

function findPw(){
  var name = document.getElementById('textbox_pwname');
  var id = document.getElementById('textbox_pwid');

  console.log(name.value);
  console.log(id.value);

  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '../php/findPw.php',
    data: {
      name: name.value,
      id:  id.value
    },
    success: function(json) {
      if (json.res == 'bad') {
        alert('존재하지 않는 사용자의 이름 혹은 아이디입니다.');
      } else {
        var pw = prompt('변경할 비밀번호를 입력해 주세요');
        changePw(id,pw);
      }
    },
    error: function() {
      console.log('failed');
    }
  })
}

function changePw(id, pw){
  if(!pw) {
    alert ('비밀번호를 입력해주세요');
    return;
  }
  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '../php/changePw.php',
    data: {
      id: id.value,
      pw: pw
    },
    success: function(json) {
      if (json.res == 'bad') {
        alert('비밀번호 변경에 실패했습니다.');
      } else {
        alert('비밀번호 변경에 성공했습니다.');
        window.location.href="main.html";
      }
    },
    error: function() {
      alert('비밀번호 변경에 실패했습니다.');
      console.log('failed');
    }
  })
}
