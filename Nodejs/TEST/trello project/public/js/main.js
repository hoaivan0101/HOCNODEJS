/* eslint-disable no-invalid-this */
$.ajax({
  url: '/todo',
  type: 'GET',
})
    .then((data) => {
      const arr = data;
      for (i of arr) {
        $('.content__job').append(
            `<div class="flex content__job--items ${i._id}">
            <p>${i.title}</p>
            <input type="text" placeholder="${i.title}" 
            class=" content__job--input hidden">
            <button id="${i._id}"class="delete__btn">Del</button>
            <button class="confirm hidden">Confirm</button>
            <button id="fix-${i._id}"class="fix__btn">Edit</button>
            </div>`,
        );
      }

      $('.delete__btn').click(function() {
      // eslint-disable-next-line no-invalid-this
        const id = $(this).attr('id');
        console.log(id);
        $.ajax({
          url: '/todo/' + id,
          type: 'DELETE',
        }).then((data) => {
          $('.' + id).remove();
        });
      });
      // ----------------------------------------------------------------
      $('.fix__btn').click(function() {
      // eslint-disable-next-line no-invalid-this
        const fixId = $(this).attr('id').split('-')[1];
        console.log(fixId);
        if ($('.' + fixId + '>p').hasClass('hidden')) {
          $('.' + fixId + '>p').removeClass('hidden');
          $('.' + fixId + '>input').addClass('hidden');
          $('.' + fixId + '>.confirm').addClass('hidden');
        } else {
          $('.' + fixId + '>p').addClass('hidden');
          $('.' + fixId + '>input').removeClass('hidden');
          $('.' + fixId + '>.confirm').removeClass('hidden');
        }

        $('.confirm').click(function() {
          console.log($('.' + fixId + '>input').val());
          $.ajax({
            url: '/todo/' + fixId,
            type: 'PUT',
            data: {
              title: $('.' + fixId + '>input').val(),
            },
          }).then((data) => {
            location.href = '/';
            console.log(data);
          });
        });
      //
      });
    })
    .catch((err) => {
      console.log(err);
    });

// POST
$('.add_btn').click(function() {
  const title = $('.title').val();
  const date = $('.date').val();
  const status = $('.status').val();
  $.ajax({
    url: '/todo',
    type: 'POST',
    data: {
      title: title,
      date: date,
      status: status,
    },
  }).then((data) => {
    $('.content__job').append(
        `<div class="flex content__job--items ${data._id}">
      <p>${data.title}</p>
      <input type="text" placeholder="${data.title}" 
      class=" content__job--input hidden">
      <button id="${data._id}"class="delete__btn">Del</button>
      <button class="confirm hidden">Confirm</button>
      <button id="fix-${data._id}"class="fix__btn">Edit</button>
      </div>`,
    );

    $('.delete__btn').click(function() {
      // eslint-disable-next-line no-invalid-this
      const id = $(this).attr('id');
      console.log(id);
      $.ajax({
        url: '/todo/' + id,
        type: 'DELETE',
      }).then((data) => {
        $('.' + id).remove();
      });
    });

    //
    $('.fix__btn').click(function() {
      const fixId = $(this).attr('id').split('-')[1];
      console.log(fixId);
      if ($('.' + fixId + '>p').hasClass('hidden')) {
        $('.' + fixId + '>p').removeClass('hidden');
        $('.' + fixId + '>input').addClass('hidden');
        $('.' + fixId + '>.confirm').addClass('hidden');
      } else {
        $('.' + fixId + '>p').addClass('hidden');
        $('.' + fixId + '>input').removeClass('hidden');
        $('.' + fixId + '>.confirm').removeClass('hidden');
      }

      $('.confirm').click(function() {
        console.log($('.' + fixId + '>input').val());
        $.ajax({
          url: '/todo/' + fixId,
          type: 'PUT',
          data: {
            title: $('.' + fixId + '>input').val(),
          },
        }).then((data) => {
          location.href = '/';
          console.log(data);
        });
      });
      //
    });
    //
  });
});