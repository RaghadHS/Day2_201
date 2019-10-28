'use strict';

var colors;
colors = ['white', 'black' , 'red'];
var secondElement = colors[1];

document.write(colors[0]);
document.write('<br>' + 'Second element of the array is' + '  ' + secondElement );

var ColorArray = new Array ('Green', 'Blue' , 'Yellow');
document.write('<br>' + '<br>' + 'Third element of the second array is' + '  ' + ColorArray[2] );
document.write('<br>' + '<br>' + 'Fourth element of the second array is' + '  ' + ColorArray[3] );
document.write('<br>' + '<br>' + 'The length of the second array is ' + '  ' + ColorArray.length + ' items' );

//Trying to replace a color in first array and print out the new item

colors[2] = ColorArray[0];
document.write('<br>' + '<br>' + '<br>' + 'The new color in the third element of the first array is ' + '  ' + colors[2] );

//loop to print the colors of the first array
document.write('<br>' + '<br>' + '<br>' + 'Contents of First Array' + '  ' );

for (var i = 0 ; i < 3 ; i++)
{
  document.write('<br>' + colors[i]);
}

//loop to print the colors of the second array
document.write('<br>' + '<br>' + '<br>' + 'Contents of second Array' + '  ' );

for (var y = 0 ; y < 3 ; y++)
{
  document.write('<br>' + ColorArray[y]);
}