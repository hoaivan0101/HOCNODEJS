$('#content').pagination({
  dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  pageSize: 3,
  afterPageOnClick: function(event, page) {
    loadpage(page);
    console.log('Page onClick là', page);
  },
});

function loadpage(page) {
  $.ajax(
      url='/data?page='+page,
      type = 'GET',
  )
      .then((data) => {
        console.log(data);
        $('#datacontainer').html('');
        for (let i=0; i<data.length; i++) {
          $('#datacontainer').append(`<div class="card d-inline-flex m-3" style="width: 12rem;">
        <img src="./public/butterfly-grass-on-meadow-night-260nw-1111729556.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"">${data[i].name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
        </div>`);
        }
      },
      );
}

loadpage(1);
