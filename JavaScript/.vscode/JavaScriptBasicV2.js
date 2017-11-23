    var age = 21;
   if( age > 21 ){
      console.log("Ready to have a drink.");
   }
   else
   {console.log('Not ready, tooo young to have drinks')}



var weather = "rain"
var distanceToStadium = 2
if (weather != "rainy") 
{
  if (distanceToStadium < 3) 
  {
    console.log("I think I’ll walk to the game.");
  } 
  else 
  {
    console.log("It’s a bit far, so maybe I’ll fly.");
  }
} 
else 
{
  console.log("Hey, I’m a duck! A little water is OK. I’ll swim.");
}
var HOUR = 7;
var MINUTE = 15;
var PERIOD = "AM"
var str = "It's ";
if(MINUTE > 30){
    str += "almost " + (HOUR + 1)
}else{
    str += "just after " + HOUR
}
if(PERIOD == "PM"){
    str += " in the evening."
}else{
    str += " in the morning."
}
console.log(str)

// Add functionality for "quarter after", "half past", "5 after" ...
// Distinguish between "in the afternoon", "at night", "noon", "midnight" ...

var HOUR = 7;
var MINUTE = 30;
var PERIOD = "AM"
var str = "It's ";
if(MINUTE === 05){
    str += "5 after " + (HOUR)
}
if(MINUTE === 15){
    str += "quarter after " + (HOUR)
}
if(MINUTE === 30){
    str += "half past " + HOUR
}
if (MINUTE > 30){
    str += "almost " + (HOUR +1)
}
else{
    str += "just after " + HOUR
}
if(PERIOD == "PM"){
    if(HOUR >6){
    str += " in the evening."
}
else{
str += " in the afternoon."
}
}else{
str+=" in the morning."
}
console.log(str)