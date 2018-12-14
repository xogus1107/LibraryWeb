$(document).ready(function(){
  var serialNumber = document.getElementById('serialNumber');
  var title = document.getElementById('title_input_textbox');
  var writer = document.getElementById('writer_input_textbox');
  var publisher = document.getElementById('publisher_input_textbox');
  var book_count = document.getElementById('bookcount_input_textbox');

  var temp=location.href.split("?");
  var number = temp[1];

  $.ajax({
    type: 'post',
    dataType: 'json',
    url: '../php/loadBookInfo.php',
    data: {
      number: number
    },
    success: function(json) {
      if (json.res == 'bad') {
        alert('로그인 해주세요.');
        window.location.href="main.html";
      } else {
        serialNumber.innerHTML = json.serial_number;
        title.value = json.title;
        writer.value = json.writer;
        publisher.value = json.publisher;
        book_count.value = json.book_count;
        console.log('성공');
      }
    },
    error: function() {
      console.log('failed');
    }
  })
})

function checkSubmit() {
  var form = document.forms['modify_book_input'];

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
