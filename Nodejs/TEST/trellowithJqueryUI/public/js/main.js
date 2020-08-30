/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable no-invalid-this */
$.ajax({
  url: '/todo',
  type: 'GET',
}).then((data) => {
  const arr = data;
  const normalArr = arr.filter(function(items) {
    return items.status == 'Normal';
  });
  const importantArr = arr.filter(function(items) {
    return items.status == 'Important';
  });
  const vipArr = arr.filter(function(items) {
    return items.status == 'GoingtoDie';
  });
  console.log(normalArr);
  console.log(importantArr);
  console.log(vipArr);
  loadData($('#plan'), normalArr);
  loadData($('#doing'), importantArr);
  loadData($('#done'), vipArr);
  pretty();
});

// ------------------------------------------
function loadData(container, data) {
  for (let i = 0; i < data.length; i++) {
    const task = data[i];
    container.append(
        `<div class="portlet">
          <div class="portlet-header">${task.title}</div>
          <div class="portlet-content">${task.date}</div>
        </div>`,
    );
  }
}
// --------------------------------------------
function pretty() {
  $('.column').sortable({
    connectWith: '.column',
    handle: '.portlet-header',
    cancel: '.portlet-toggle',
    placeholder: 'portlet-placeholder ui-corner-all',
  });

  $('.portlet')
      .addClass('ui-widget ui-widget-content ui-helper-clearfix ui-corner-all')
      .find('.portlet-header')
      .addClass('ui-widget-header ui-corner-all')
      .prepend('<span class=\'ui-icon ui-icon-minusthick portlet-toggle\'></span>');

  $('.portlet-toggle').on('click', function() {
    const icon = $(this);
    icon.toggleClass('ui-icon-minusthick ui-icon-plusthick');
    icon.closest('.portlet').find('.portlet-content').toggle();
  });
}
