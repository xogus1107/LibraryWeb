$(document).ready(function(){
  var name = document.getElementById('name');
  var birthday = document.getElementById('birthday');
  var address = document.getElementById('address');
  var phone_number = document.getElementById('phone_number');

  var book_name = document.getElementById('book_name');
  var writer = document.getElementById('writer');
  var publisher = document.getElementById('publisher');
  var rented_day = document.getElementById('rented_day');
  var late_fee = document.getElementById('late_fee');

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd='0'+dd
  }
  if(mm<10) {
      mm='0'+mm
  }
  today = yyyy * 10000+mm * 100+dd;


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

$.ajax({
  type: 'post',
  dataType: 'json',
  url: '../php/loadRentBookInfo.php',
  data: {
  },
  success: function(json) {
    if (json.res == 'bad') {
      book_name.innerHTML += '대여중인 책이 없습니다.';
    } else {
      book_name.innerHTML += json.title;
      writer.innerHTML += json.writer;
      publisher.innerHTML += json.publisher;
      rented_day.innerHTML += json.rented_day;
      console.log(today);
      var late_day = today - json.rented_day;
      late_day -= 7;
      console.log(late_day);

      if(late_day > 0) {
        late_day *= 1000;
      }
      else {
        late_day = '';
      }
      console.log(late_day);
      late_fee.innerHTML += late_day;
      console.log('성공');
    }
  },
  error: function() {
    console.log('failed');
  }
})

})
