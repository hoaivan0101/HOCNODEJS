
$.ajax({
  url: '/Todo/getdata',
  type: 'GET',
})
    .then((data) =>{
      console.log('DATA : ', data);
      for (let i=0; i<data.length; i++) {
        $('.content').append(`
          <tr>
            <td>${data[i].title}</td>
            <td>${data[i].time}</td>
          </tr>
        `);
      }
    })
    .catch((err) =>{
      console.log(err);
    });
