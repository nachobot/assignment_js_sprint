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

  loudSnakeCase: function(){  
    // your code here
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