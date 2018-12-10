function findId(){
  var name = document.getElementById('textbox_idname');
  var idCheck = document.getElementById('idCheck');

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
        console.log(json.res);
        alert('존재하지 않는 사용자의 이름입니다.');
      } else {
        alert('찾으시는 아이디는 ' + json.res + '입니다.');
      }
    },
    error: function() {
      console.log('failed');
    }
  })
}
