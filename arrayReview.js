var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

var last = function(){
	return threeItems[2];
}

alert(threeItems);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//Fix 'dicedArray' below so that it's an array full of integers from 0-10
var dicedArray = [0,1,4,5,7,8,10];

dicedArray.splice(2,0,2,3);
dicedArray.splice(6,0,6);
dicedArray.splice(9,0,9);

alert(dicedArray);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

for(var i = evenArray.length -1; i >= 0; i--){
	if(evenArray[i] % 2 !== 0)
		evenArray.splice(i, 1)
}

alert(evenArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30, and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var compareRandom = function(arr) {
	var randomNumb = getRandomArbitrary();
	var flag = false;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === randomNumb) {
			flag = true;
		}
	}
	alert(randomNumb);
	alert(flag);

}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second = first.slice(0,first.length)

second.push(6, 7)

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.

var sentence = "Dev Mountain is the best"
var longest = function(string){
	var arr = string.split(" ");
	var long = arr[0];
	for(var i = 0; i < arr.length; i++){
	if(arr[i].length > long.length){
		long = arr[i];
	}
}
alert(long);
}
longest(sentence);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

var myPoem = 'What is a jQuery but a misunderstood object?'

var capitalize = function(string){
  var array1 = string.split(' ');
  var newarray1 = [];
    
  for(var i = 0; i < array1.length; i++){
      newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newarray1.join(' ');
}
alert(capitalize(myPoem));



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
var theOdyssey = "function expression or function declaration? Tis an obvious choice"
function vowelCounter(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var i = 0; i < str1.length ; i++)
  {
    if (vowel_list.indexOf(str1[i]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
alert(vowelCounter(theOdyssey));








