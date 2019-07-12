// Select color input and store
var color = document.getElementById('colorPicker').value;

// Select size input and store
var sizePicker = document.getElementById('sizePicker');

// Define and store variables for other DOM elements
var canvas = document.getElementById('pixelCanvas');
var height = document.getElementById('inputHeight').value;
var width = document.getElementById('inputWidth').value;

// When size is submitted by the user, call makeGrid()
function makeGrid() {

    var canvas = document.getElementById('pixelCanvas');
    
    var height = document.getElementById('inputHeight').value;
    
    var width = document.getElementById('inputWidth').value;
    //loop over each row    
    for (var m = 0; m < height; m++) {

        var row = document.createElement('tr');
        
        canvas.appendChild(row);
        
        for (var n = 0; n < width; n++) {

            var column = document.createElement('td');
            
            canvas.appendChild(column);

            column.addEventListener('click', function (event) {
            // color when a cell is clicked
            event.target.style.backgroundColor = color.value; 
        });
    }

sizePicker.addEventListener('submit', function (event) {
    // prevent created grid from being erased
    event.preventDefault(); 
    canvas.innerHTML = null;
    makeGrid();
});