// Laster inn innholdet i de ulike skjemaene
$(document).on('click', '.nav-Pro', function (e) {
  'use strict';

  e.preventDefault();
    let allCollapsible = $('.collapse');
    let href = $(this).attr('href');
  
    allCollapsible.removeClass('show');
    $(href).addClass('show');

});

// Laster inn skjemaene
$(document).on('click', '.nav-main', function (e) {
  'use strict';

  e.preventDefault();

  switch ($(this).attr('id')) {

    case 'navProsjektSkjema':
      $('#kontaktSkjema, #firmaSkjema,  #prosjektSide').empty();
      $('#prosjektSkjema').load('html/prosjektSkjema.html');
      break;

    case 'navKontaktSkjema':
      $('#prosjektSkjema,  #firmaSkjema, #prosjektSide').empty();
      $('#kontaktSkjema').load('html/kontaktSkjema.html'); 
      break;

    case 'navFirmaSkjema':
      $('#prosjektSkjema,  #kontaktSkjema, #prosjektSide').empty();
      $('#prosjektSide').load('html/firmaskjema.html'); 
      break;
  
    /*case 'navProsjektSide':
      $('#prosjektSkjema,  #kontaktSkjema, #prosjektSide').empty();
      $('#prosjektSide').load('html/prosjektSide.html'); 
      break;*/
  };

});