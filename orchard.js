///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

//  From my understanding the problem wants me to add up all the numbers of all three arrays
// I can use a for loop for each array and push them into one list
//  and the just use one loop for the addition

// i think i will create a new variable and then push all the arrays into it

const masterAcresList = []

for (let i = 0; i < 7; i++) {
    masterAcresList.push(fujiAcres[i])
}

for (let i = 0; i < 7; i++) {
    masterAcresList.push(galaAcres[i])
}

for (let i = 0; i < 7; i++) {
    masterAcresList.push(pinkAcres[i])
}

console.log("This is my master list: ",masterAcresList) 
console.log("")
//______________________________________________________
//The above gives me one list with all the acres to iterate through
// now i can set the totalAcres variable to 0 and use a for loop to add each number from my masterAcresList to get the total

let totalAcres = 0

for (let i = 0; i < masterAcresList.length; i++) {
    totalAcres += masterAcresList[i]
}

console.log("Total acres picked: ", totalAcres)
// this outputs 63 acres


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/


// to get the average you get the totalAcres and divide it by the number of days
let averageDailyAcres = totalAcres/7
console.log("This is our average per day: " , averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0
// As long as acresLeft is greater than zero we will have days to work.
while (acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
}
console.log("You need : ",days, " left to complete the job!")



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE


//  so each acre gives 6.5 tons. We multiply to get our total. So i need to go through each array and multiply by 6.5 as save each value in a new array.
// const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
// const galaAcres = [5, 2, 4, 3, 6, 2, 4]
// const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

let fujiTons = []
let galaTons = []
let pinkTons = []

for (let i = 0; i < 7; i++) {
    // so do the same thing i did as above but modify it by multiplying in each iteration in the original list and push the product to my new list variables
    fujiTons.push(fujiAcres[i] * 6.5)
}

for (let i = 0; i < 7; i++) {
    galaTons.push(galaAcres[i] * 6.5)
}

for (let i = 0; i < 7; i++) {
    pinkTons.push(pinkAcres[i] * 6.5)
}


console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

//im going to make new variables to save each tons total from each variety first 
let fujiTonsTotal = 0
let galaTonsTotal = 0
let pinkTonsTotal = 0

// now im going to add up each tons total by using a for loop and adding each number in each variety list 

for (let i = 0; i < 7; i++) {
    fujiTonsTotal += fujiTons[i]
}

for (let i = 0; i < 7; i++) {
    galaTonsTotal += galaTons[i]
}

for (let i = 0; i < 7; i++) {
    pinkTonsTotal += pinkTons[i]
}

// print it out and check my work
console.log(fujiTonsTotal, galaTonsTotal, pinkTonsTotal)
 
//now each value needs to be converted into pounds! 1 ton = 2000lbs
// so each value just needs to be multiplied by 20000 and the saved to the variables provided

let fujiPounds = fujiTonsTotal * 2000
let galaPounds = galaTonsTotal * 2000
let pinkPounds = pinkTonsTotal * 2000

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/
// these are the prices given
// const fujiPrice = .89 
// const galaPrice = .64
// const pinkPrice = .55

//to get each about you multiply price per pound

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log("$",fujiProfit)
console.log("$",galaProfit)
console.log("$",pinkProfit)






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/
//so just take the variables above and add the to our new variable totalProfit

let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log("Your total profit from all your apples sold is $",totalProfit)
