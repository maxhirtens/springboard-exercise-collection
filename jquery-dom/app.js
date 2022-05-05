// 1.
$(function() {
  console.log("Let's get ready to party with jQuery!");
});

// 2.
$('article img').addClass('image-center');

// 3.
$('article p:last-child').remove();

// 4.
$('#title').css('font-size', `${(Math.random()*100)}px`);

// 5.
$('ol').append($('<li>testing!</li>'))

// 6.
$('aside').text('sorry for the unnecessary list')

// 7.
$('.form-control').on('keyup', function () {
let red = $('.form-control').eq(0).val();
let green = $('.form-control').eq(1).val();
let blue = $('.form-control').eq(2).val();
$('body').css('background-color', `rgb(${red}, ${green}, ${blue})`);
});

// 8.
$('img').on('click', function() {
  $(this).remove();
});
