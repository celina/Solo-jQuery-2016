var colorsArray = ['Red', 'Yellow', 'Green', 'Blue'];

function Colors(name) {
  this.name = name;
}

$(document).ready(function() {
  console.log('Ready!');

  init();
  buildColorCube();

});

function init() {

}

function buildColorCube() {
  $('button').on('click', function() {
    var pickedColor = $(this).data().color;

    console.log('Box ' + $(this).data().color + ' was clicked!'); // this calls out a property on the object

    var newDiv = $('<div class="color-cube" data-color="' + $(this).data().color + '" style="background-color: ' + $(this).data().color + '"></div>');
    newDiv.text();
    $('.colorcontainer').append(newDiv);
    $('#green').text('1');
    $(this).data().color
    $(span).id($(this).data().color).text('1');



//     div = $( "div" )[ 0 ];
// switch ( $( "button" ).index( this )

    // $(this).data().color$
    // $('span').attr($(this).data().color).text('test');
    // $('span').id($(this).data().color).text('test');
    // $('span').id('green').text('test');
    // $('green').text('0');
    // $('span').find('id').attr('green').replace('1');

    // ​$('span').id().text('1');
  //     if ($(this).data('count')) { // already been clicked
  //         $(this).data('count', $(this).data('count') + 1); // add one
  //     } else { // first click
  //         $(this).data('count', 1); // initialize the count
  //     }
  //     $(this).html($(this).data('count')); // show it
});
}


// $function numColors() {
// 	$('.container').click(function(){
//         if ($(this).data('count')) { // already been clicked
//             $(this).data('count', $(this).data('count') + 1); // add one
//         } else { // first click
//             $(this).data('count', 1); // initialize the count
//         }
//         $(this).html($(this).data('count')); // show it
//     });
// });
