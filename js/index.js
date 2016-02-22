// random greeting

// store greeting
var msg0 ='Someone stole your goods!';
var msg1 = 'Wut?! no not here :[ ';
var msg2 = 'What went wrong meow?!';
var msg3 = "Its not under there..";


// get random greeting

var limit = 4;

var numRand = Math.floor(Math.random()*limit );

console.log( numRand );

// show random greetings

$('h1').text( eval( 'msg' + numRand) );
console.log('msg' + numRand)





$('h1').fadeOut(4000).fadeIn();



$('img.gifplayer').slideToggle(7000);

$('h3').lettering();