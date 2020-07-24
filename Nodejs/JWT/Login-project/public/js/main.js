function login(){
    $.ajax({
        url: '/user',
        type: 'POST',
        data: {
            name: $('#name').val(),
            password: $('#password').val(),
        }
    })
        .then(res => {
            console.log(res);
        })
}

$('#home').click(function(){
    $.ajax({
        url: '/user',
        type: 'POST',
        data: {
            name: $('#name').val(),
            password: $('#password').val(),
        }
    })
        .then(res => {
            location.assign("/user/home/"+res.token)
        })
})
