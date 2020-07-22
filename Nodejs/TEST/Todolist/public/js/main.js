$.ajax({
    url:'/api',
    type:'GET'
})
    .then(data=>{
        for (let i=0;i<data.length;i++){
            $('#tbody').append(`          
                <tr>
                    <td><strong>${i+1}</td>
                    <td><strong>${data[i].name}</td>
                    <td>${data[i].date}</td>
                    <td><button id="${data[i]._id}">Delete</button></td>
                </tr>
            `)
        }
    })
    .catch(err => {
        console.log(err);
    })

$('#btn').click(function(){
    $.ajax({
        url:'/api',
        type:'POST',
        data:{
            name:$('#name').val(),
            date:$('#date').val()
        }
    })
        .then(data=>{
            $('#tbody').append(`          
            <tr>
                <td><strong></td>
                <td><strong>${data.name}</td>
                <td>${data.date}</td>
                <td><button id="${data._id}">Delete</button></td>
            </tr>
        `)
            })
        .catch(err =>{
            alert('THAT BAI')
        })
})


