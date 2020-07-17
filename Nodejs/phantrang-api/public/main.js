function LoadPage(page){
$.ajax({
    url:'./data?page='+page,
    type:'GET'
})
    .then(data => {
        $('#content').html('')
        for (let i=0;i<data.length;i++){
        $('#content').append($(`
            <h3>${data[i].name}</h3>
            <h3>${data[i].age}</h3>
        `))
    }
    })
    .catch(err => {
        console.log(err);
    })
}
