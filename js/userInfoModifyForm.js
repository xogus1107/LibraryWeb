function checkSubmit() {
  var form = document.forms['sign_up_input'];

  if (form['input_name'].value.length < 1) {
    alert('이름을 입력해 주세요.');
    return false;
  }
  if (form['input_birthday'].value.length < 1) {
    alert('생일을 입력해 주세요.');
    return false;
  }
  if (form['input_address'].value.length < 1) {
    alert('주소를 입력해 주세요.');
    return false;
  }
  if (form['input_phone'].value.length < 1) {
    alert('전화번호를 입력해 주세요.');
    return false;
  }

  return true;
}
