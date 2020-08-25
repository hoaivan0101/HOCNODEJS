function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

$('.btn').click(function() {
  $.ajax({
    url: '/user',
    type: 'POST',
    data: {
      name: $('#name').val(),
      password: $('#password').val(),
    },
  })
      .then((res) => {
        if (res.status =='SUCCES') {
          setCookie('token', res.token, 1);
        } else {
          alert('NOT MATCH');
        }
      });
});

$('#home').click(function() {
  location.assign('/user/home');
});
