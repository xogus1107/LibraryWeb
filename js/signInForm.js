function checkSubmit() {
  var form = document.forms['login_input'];

  if (form['memberId'].value.length < 1) {
    alert('아이디를 입력해 주세요.');
    return false;
  }
  if (form['memberPw'].value.length < 1) {
    alert('비밀번호를 입력해 주세요.');
    return false;
  }
  return true;
}
