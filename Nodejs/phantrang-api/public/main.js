// $('#demo').pagination({
//   dataSource: [1, 2, 3, 4, 5, 6, 7, 8],
//   callback: function(data, pagination) {
//       var html = template(data);
//       dataContainer.html(html);
//   }
// })

function LoadPage(page) {
  $.ajax({
    url: './data?page='+page,
    type: 'GET',
  })
      .then((data) => {
        $('#cont').html('');
        for (let i=0; i<data.length; i++) {
          $('#cont').append($(`
        <div class="card d-inline-flex m-3" style="width: 12rem;">
        <img src="./public/butterfly-grass-on-meadow-night-260nw-1111729556.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"">${data[i].name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
        </div>
        `));
        }
      })
      .catch((err) => {
        console.log(err);
      });
}

