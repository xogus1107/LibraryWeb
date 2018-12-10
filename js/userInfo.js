$(document).ready(function(){
  var name = document.getElementById('name');
  var birthday = document.getElementById('birthday');
  var address = document.getElementById('address');
  var phone_number = document.getElementById('phone_number');

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
        name.innerHTML += json.name;
        birthday.innerHTML += json.birthday;
        address.innerHTML += json.address;
        phone_number.innerHTML += json.phone_number;
        console.log('성공');
      }
    },
    error: function() {
      console.log('failed');
    }
  })




})
