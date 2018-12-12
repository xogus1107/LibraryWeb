$(document).ready(function(){

  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '../php/loadUserInfo.php',
    data: {
    },
    success: function(json) {
      if (json.res == 'bad') {
        alert('로그인 해주세요.');
        window.location.href="main.html";
      } else {
        console.log('성공');
      }
    },
    error: function() {
      console.log('failed');
    }
  })
})

function bookCheck() {
  var form = document.forms['add_book_input'];
  var serialnumber = form['input_serialnumber'];

  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '../php/bookCheck.php',
    data: {
      serialnumber: serialnumber.value
    },
    success: function(json) {
      if (json.res == 'bad') {
        console.log(json.res);
        return false;
      }
        },
    error: function() {
      console.log('failed');
      return false;
    }
  })
  return true;
}


function checkSubmit() {
  var form = document.forms['add_book_input'];
  var serialnumber = form['input_serialnumber'];

  if(!bookCheck()) {
    alert('이미 존재하는 일련 번호 입니다.');
    serialnumber.focus();
    return false;
  }

  if (form['input_serialnumber'].value.length < 1) {
    alert('일련 번호를 입력해 주세요.');
    return false;
  }
  if (form['input_title'].value.length < 1) {
    alert('제목을 입력해 주세요.');
    return false;
  }
  if (form['input_writer'].value.length < 1) {
    alert('저자를 입력해 주세요.');
    return false;
  }
  if (form['input_publisher'].value.length < 1) {
    alert('출판사를 입력해 주세요.');
    return false;
  }
  if (form['input_bookcount'].value.length < 1) {
    alert('책 수를 입력해 주세요.');
    return false;
  }

  return true;
}
