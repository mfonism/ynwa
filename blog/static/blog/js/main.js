// offcanvas

$(function () {
  'use strict'

  $('#navbarToggler').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('#navbarCollapse').toggleClass('open');
  });
})