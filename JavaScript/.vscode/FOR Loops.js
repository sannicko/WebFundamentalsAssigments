// FOR Loops

// for (var num = 10; num >-1; num = num - 1)
// {
//   console.log("I'm counting! The number is ", num);
// }
// console.log("We are done. Goodbye world!")


// WHILE Loops

// var num = 1; 
// while (num < 6) 
// {
//   console.log("I'm counting! The number is " + num); 
//   num = num + 1;                                    
// }
// console.log("We are done. Goodbye world!");      

// While You Wait

// Create a birthday countdown.
// For every day, print how many days left.
// If it's more than 30 days, print a sad message.
// If it's less than 30 days, print a message that sounds excited!
// If it's less than 5 days, SCREAM IT!
// ONCE IT'S YOUR BIRTHDAY HAVE PARTY!


// var daysUntilMyBirthday =60;
// for (var daysUntilMyBirthday = 60; daysUntilMyBirthday>0; daysUntilMyBirthday = daysUntilMyBirthday -1)
// if (daysUntilMyBirthday > 30) 
// {
//     console.log (daysUntilMyBirthday + " days until my birthday. Such a long time...:(")
// }
// else if (daysUntilMyBirthday <=30>0)
// {
//     console.log (daysUntilMyBirthday + " it is getting closer :)...:(")
// }
// // else
// {
//     console.log (daysUntilMyBirthday + " YAHOOOOOOO :)...:(")
// }

// console.log("IT'S YOUR BIRTHDAY HAVE A PARTY")

// var index = 2;
// index = index + 1; 
// index++;
// console.log(index)

// // FOR Loops Backwards

// for (var num = 10; num > 2; num = num - 1) 
// {
//   console.log('num is currently', num);
// }

// var num = 1;
// while (num < 5) 
// {
//   if (num == 3) 
//   {
//     break;
//     // if you have additional code down here, it will never run!
//   }
//   console.log("I'm counting! The number is ", num);
//   num = num + 1;          // if we break, we leave the WHILE loop so these lines won’t run
// }

// for (var num = 1; num < 5; num += 1) 
// {
//   if (num == 3) 
//   {
//     continue;
//     // if you have additional code down here, it will never run!
//   }
//   console.log("I'm counting! The number is ", num);
// }

// var earnings=.01;
// var amount=.01;

// var num = 0.01;;
// for (var i = 1; i < 30; i++) {
//     if (num =* 2)

// console.log(sum++)
    

//     if (min > max) {
// max = sum*2;
// }
// if (max < min) {
// min = min
// }
// sum = sum ++;
// // }
// var earnings = .01;
// var amount = .01;
// for (var i = 2; i <= 10; i++) {
//     earnings = earnings * 2
//     console.log("earnings", earnings)
//     amount = amount + earnings
//     console.log("amount", amount)
//     if(amount == Infinity){
//         console.log(i)
//         break
//     }
// }

// var num = 23;
// var name = 'Todd';
// var booly = false; 
// var und = undefined;
// var arr = [1, 'words', [1,2,3], (0 === 1), true];
// console.log(arr[2][2]);
// var myInfo = {
//     name: 'Todd',
//     age: 33,
//     hobbies: ['sports', 'coding', 'brewing']
// }
// console.log(myInfo.name);


// // For numbers 1 thru 100, print "fizz" if the number is evenly divisible by 3, "buzz" by 5, "fizzbuzz" by both,
// // or just the number if nothing else happens.
// function fizzbuzz(start, end){
//     var num = 50;
//     for (var i = start; i <= end; i++){
//         if (i % 3 == 0 && i % 5 == 0){
//             console.log('fizzbuzz');
//         }
//         else if (i % 3 == 0){
//             console.log('fizz');
//         }
//         else if (i % 5 == 0){
//             console.log('buzz');
//         }
//         else{
//             console.log(i);
//         }
//     }
// }

// fizzbuzz(50, 79);

// arr = [2, 10, 6, 8];
// temp = arr[1]; // arr == [2, 10,6, 8], temp == 10
// arr[1] = arr[3]; // arr == [2, 8, 6, 8], temp == 10
// arr[3] = temp; // arr == [2, 8, 6, 10], temp == 10
// console.log(arr); // displays [2,8,6,10]

// arr = ["hello", 10, 6, 8];
// temp = arr[1]; // arr == [2, 10,6, 8], temp == 10
// arr[1] = arr[3]; // arr == [2, 8, 6, 8], temp == 10
// arr[3] = temp; // arr == [2, 8, 6, 10], temp == 10
// console.log(arr); // displays [2,8,6,10]


// var arr = [];         // create empty array
// for (var val = 3; val <= 99999; val += 3) // val will be 3,6,...99999
// {
//   arr.push(val);      // add each val to arr
// }
// console.log(arr);     // [3,6,9,12,..., 99999]


// var nums = [1,3,5,7];     // set up our loop
// for (var idx = 0; idx < nums.length; idx++)  // for each index in arr...
// {
//   console.log(nums[idx]);    // ...print the value
// }

// var array = ["James", "Jill", "Jane", "Jack"];
// function fancyPrint(arr){
//     for (var i = 0; i < arr.length; i++) {
//         console.log(`${i} -> ${arr[i]}`)
//     }
// }
// fancyPrint(array, "-")

// function randomChance(quarters){
//     var winnings = 0; // how much you won
//     var play = Math.floor(Math.random() * (100 - 1)) + 1;  //the chances of winning
//     var win = Math.floor(Math.random() * (100 - 50)) + 50; //chances of how much you win
//         for(i=0; i<quarters; i++){
//         if(play === 1){
//           winnings += win;
//         }
//       }
//       return winnings;
//   }
  
//   randomChance(34);

//   var myArr = [42,"hi"];  // myArr.length == 2
//   myArr.push("true");        // myArr == [42,"hi",true], now length == 3
//   console.log(myArr)


//   function randomChance(quarters){
//     var winnings = 0; // how much you won
//     var play = Math.floor(Math.random() * (100 - 1)) + 1;  //the chances of winning
//     var win = Math.floor(Math.random() * (100 - 50)) + 50; //chances of how much you win
  
//       for(i=0; i<quarters; i++){
//         if(play === 1){
//           winnings += win;
//         }
//       }
//       console.log(winnings);
//   }
  
//   function playSlots(numOfQuarters){
//     while(numOfQuarters > 0){
//         var win = Math.floor(Math.random()*100);
//         if(win == 1){
//             var amountWon = Math.random()*50 + 50
//             return amountWon + numOfQuarters
//         }
//     }
//     return 0
// }

// function playSlotsBonus(numOfQuarters, goal){
//     while(numOfQuarters > 0){
//         var win = Math.floor(Math.random()*100);
//         if(win == 1){
//             var amountWon = Math.floor(Math.random()*50 + 50)
//             if(amountWon + numOfQuarters > goal){
//                 return amountWon + numOfQuarters 
//             }else{
//                 numOfQuarters += amountWon;
//                 console.log("won:", numOfQuarters)
//             }
//         }
//     }
//     console.log("lossed")
//     return 0
// }
// playSlotsBonus(100, 200);

// var a = 1
// var b = 2
// function multiply(a, b){
//     console.log(a * b)
// }

// var Dany = ['Daenerys', 'Targaryen', 22, 'House Targaryen', 'Valyrian', 'Queen of the Andals the Rhoynar and the First Men', 'Lady Regnant of the Seven Kingdoms', 'Protector of the Realm', 'Khaleesi of the Great Grass Sea', 'Breaker of Chains', 'Mother of Dragons', 'Queen of Meereen']
// console.log(Dany[3]); // Valyrian
// console.log(Dany.last_name); // Targaryen

// var Dany = {
//     first_name: 'Daenerys',
//     last_name: 'Targaryen',
//     age: 22,
//     allegiance: 'House Targaryen',
//     ancestry: 'Valyrian',
//     titles: ['Queen of the Andals, the Rhoynar and the First Men', 'Lady Regent of the Seven Kingdoms', 'Protector of the Realm', 'Khaleesi of the Great Grass Sea', 'Breaker of Chains', 'Mother of Dragons', 'Queen of Meereen']
//   }
// console.log(Dany.age);
// console.log(Dany.first_name); 
// console.log(Dany.ancestry); 
  


// console.log(typeof(numbersOnly))
// //run through the array
// //test each element to see what type it is
// //if it is a number, add to my new array
// function numbersOnly(arr){
//     var new_array = [];
//     for (var i = 0; i < arr.length; i++) {
//         if(typeof(arr[i]) == "number"){
//             new_array.push(arr[i])
//         }
//     }
//     console.log(new_array);
//     return new_array;
// }
// numbersOnly([1, "apple", -3, "orange", 0.5]); // [1, -3, "orange", .5]

// function numbersOnlyRemove(arr){
//     for (var i = 0; i < arr.length; i++) {
//         while(typeof(arr[i]) != "number"){
//             for (var k = i; k < arr.length; k++) {
//                 arr[k] = arr[k+1]
//             }
//             arr.pop()
//         }
//     }
//     console.log(arr);
// }
// numbersOnlyRemove([1, "apple", -3, "orange", 0.5])

// var myName="Nicko";
// console.log(myName);

// var myName = "nicko"
// if (myName=="nicko");{
//     console.log("Hey there nicko, how's it going?")};
// else if(myName ==!"Beth");{
//     console.log("You look fabulous toaday!")};
// //         else{
// //             console.log("Greetings Earthling. Have a great day!");
// //                 }
// //             }
// //         }
// // }

// for(var num=10; num>2;num=num-1){
//     console.log('I am counting! The number is', num)
// }
// console.log('We are done. Goodbye world!');


// var students = [ 
//     {first_name : 'Michael', last_name : 'Jordan'},
//     {first_name : 'John', last_name : 'Rosales'},
//     {first_name : 'Mark', last_name : 'Guillen'},
//     {first_name : 'KB', last_name : 'Tonel'}
// ];
// for(var i = 0; i < students.length; i++){
//     console.log(students[i].first_name + " " + students[i].last_name)
// }




// //Create a program that outputs:
// Michael Jordan
// John Rosales
// Mark Guillen
// KB Tonel
// console.log(students[1]);
// console.log(students[0].first_name + " " + students[0].last_name)
// ;

// var users = {
//     'Students': [ 
//         {first_name:  'Michael', last_name : 'Jordan'},
//         {first_name : 'John', last_name : 'Rosales'},
//         {first_name : 'Mark', last_name : 'Guillen'},
//         {first_name : 'KB', last_name : 'Tonel'}
//      ],
//     'Instructors': [
//         {first_name : 'Michael', last_name : 'Choi'},
//         {first_name : 'Martin', last_name : 'Puryear'}
//      ]
//     }
//    function printThings(){
//        for (var group in users) {
//            console.log(group)
//            for (var i = 0; i < users[group].length; i++) { //users["students"] -> users.students
//                var fullname = users[group][i].first_name + users[group].last_name
//                console.log(`${i} - ${users[group][i].first_name} ${users[group][i].last_name} - ${fullname.length}`)
//            }
//        }
//    }
//    printThings();

// console.log(document.body);

// var bod = document.body;
// for (var i = 0; i < 10; i ++){
//   bod. innerHTML += "<p>This has gone through the loop completely: " +i+ " times</p>";
// }


