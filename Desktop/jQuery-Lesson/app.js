// $(function () {
//   $('.box1').slideDown(4000, function () {
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '200px'
//     }).slideUp(5000);
//   });
// });

//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function () {
//   $('.box1').mouseover(function () {
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function () {
//     $('.box1').removeClass('box1-ext');
//   });
// });

// $(function () {
//   $('.box1').on('click', function () {
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function () {
//     $('.box1').removeClass('box1-ext');
//   });
// });

// $(function () {
//   $('.bg1').on('click', function () {
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function () {
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function () {
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function () {
//     $('.bg4').slideUp();
//   });
// });

$(function () {
  $('.box1').on('click', function () {
    $(this).slideUp();
  });
});