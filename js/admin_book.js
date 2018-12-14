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

function rentalBook() {
  var serialNumber = prompt('대여할 책의 일련번호를 입력해 주세요');

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
      }
      else if(json.book_count - json.rented_book_count < 1) {
        alert('책의 대여 가능한 수량이 없습니다.');
      }
      else {
        var id = prompt('대여할 사람의 아이디를 입력해 주세요');
        checkID(id, serialNumber);
        console.log('성공');
      }
    },
    error: function() {
      console.log('failed');
    }
  })

}

function checkID(id, serialNumber) {
  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '../php/findUser.php',
    data: {
      id: id
    },
    success: function(json) {
      if (json.res == 'bad') {
        alert('존재하지 않는 id입니다.');
      } else {
        console.log(id);
        checkRent(id, serialNumber);
        console.log('성공');
      }
    },
    error: function() {
      console.log('failed');
    }
  })
}

function checkRent(id, serialNumber) {
  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '../php/findRentUser.php',
    data: {
      id: id
    },
    success: function(json) {
      if (json.res == 'bad') {
        alert('대여중인 책이 있습니다.');
      } else {
        rentBook(id, serialNumber);
        console.log('성공');
      }
    },
    error: function() {
      console.log('failed');
    }
  })
}

function rentBook(id, serialNumber) {
  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '../php/rentBook.php',
    data: {
      id: id,
      number: serialNumber
    },
    success: function(json) {
      if (json.res == 'bad') {
        alert(' 책 대여에 실패 했습니다.');
      } else {
        console.log('책 대여 성공');
      }
    },
    error: function() {
      console.log('대여 실패');
    }
  })
}
