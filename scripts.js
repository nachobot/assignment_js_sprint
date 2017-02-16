// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
   largestEl: function(myArray){  
    // your code here
    myArray.sort(function descending(a,b){
		return (b-a);
        });
    return myArray[0];  
  },

//sprintFunctions.largestEl([90,2]);


  reversed: function(myString){  
    // your code here
    var reversedString ="";
    if (myString.length == 0)
    {
	return myString;
    }
    for (let i=myString.length- 1; i >= 0 ; i--)
    {
      reversedString += myString[i];
    }

    return reversedString;
  },

  loudSnakeCase: function(mySentence){  
     
    // your code here
    // 1. Seperate out the words 
    var re= /\w+\s*/g;
    var myArray = mySentence.match(re);
   
    var loudString = "";

    // 2. Strip out the spaces
    for (let i =0; i < myArray.length; i++){
        var trimmedString = myArray[i].trim();
        var modString = (trimmedString.charAt(0)).toUpperCase() + trimmedString.slice(1);
        if (i != myArray.length - 1){
	  modString +=  "_";
	}
        
        loudString += modString;
      
    }
    return modString;  
  
  },

  compareArrays: function(){ 
    // your code here (replace the return)
    return "Finish compareArrays first!" 
  },

  fizzBuzz: function(){  
    // your code here
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },

}