// Laster inn innholdet
$(document).on('click', '.nav-link', function (e) {
  'use strict';

  e.preventDefault();

  let allCollapsible = $('.collapse');
  let href = $(this).attr('href');

  allCollapsible.removeClass('show');
  $(href).addClass('show');
});