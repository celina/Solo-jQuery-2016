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
    newDiv.text('Test');
    $('.colorcontainer').append(newDiv);
  });
}
