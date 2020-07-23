$.ajax({
    url: '/api',
    type: 'GET'
})
    .then(data => {
        $('#tbody').html('');
        for (let i = 0; i < data.length; i++) {
            $('#tbody').append(`
                <tr class=${data[i]._id}>
                <td><strong>${i + 1}</td>
                <td><strong><p class="name">${data[i].name}</p></td>
                <td>${data[i].email}</td>
                <td><button type="button"  id=${data[i]._id}  class="deletebtn btn btn-primary">Delete</button></td>
                </tr>
            `)
        }

        $('.deletebtn').click(function () {
            console.log($(this).attr('id'));
            deletebyid($(this).attr('id'));
        })

        $('.name').click(function(){
            console.log($(this).html());
        })
    })


$('#btn').click(function () {
    var name = $('#name').val()
    var email = $('#email').val()
    $.ajax({
        url: '/api',
        type: 'POST',
        data: {
            name: name,
            email: email,
        }
    })
        .then(data => {
            $('#tbody').append(`
                <tr>
                <td><strong></td>
                <td><strong>${data.name}</td>
                <td>${data.email}</td>
                <td><button type="button" id=${data._id} class="deletebtn btn btn-primary">Delete</button></td>
                </tr>
            `)
            $('.deletebtn').click(function () {
                console.log($(this).attr('id'))
            })
        })
})

function deletebyid(id) {
    $.ajax({
        url: '/api/' + id,
        type: 'DELETE'
    })
        .then(data => {
            $('.' + id).remove()
        })
}