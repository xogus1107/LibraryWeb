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

function modifyBook() {
  var serialNumber = prompt('변경할 책의 일련번호를 입력해 주세요');

  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '../php/loadBookInfo.php',
    data: {
      number: serialNumber
    },
    success: function(json) {
      if (json.res == 'bad') {
        alert('존재하지 않는 일련번호입니다.');
      } else {
        window.location.href="modify_book.html?" + json.serial_number;
        console.log('성공');
      }
    },
    error: function() {
      console.log('failed');
    }
  })
}
