// #1

let prices = [33, 26, 99, 120, 12, 45];
let sum = 0;
for (let i = 0; i < prices.length; i++) {
  sum = sum + prices[i];
}
console.log("The sum is: ", sum);

// #2

let j = 99;

while (j > 0) {
  if (j > 2) {
    console.log(j + " crows on the wall. " + j + " crows.");
    console.log("1 fell down and became a wight.");
    console.log(j-1 + " crows on the wall");
    j--;
  }else if (j === 2){
    console.log(j + " crows on the wall. " + j + " crows.");
    console.log("1 fell down and became a wight.");
    console.log(j-1 + " crow on the wall");
    j--;
  }else {
    console.log("1 crow on the wall. 1 single crow.");
    console.log("It fell down and became a wight.");
    console.log("There's no one left to defend Westeros now.");
    j--;
  }
}

// #3

let array1 = [5,10,5,2,2,1,653,5,90,5,2,7,9,20,43,92,1,74];

function count(arr){
  //puts the array in order
  arr.sort();
  //i is the index we want to see whether it repeats
  for (let i = 0; i < arr.length; i++){
    //counter counts how many times a number shows up
    let counter = 1;
    //k is what we're comparing i to
    for (let k = i + 1; k < arr.length; k++){
      //is there a match?
      if (arr[i] === arr[k]){
        //if yes, we add one to the counter
        counter++;
        //we also are adding to the index of i so that we don't double count
        i++;
      }
    }
    //checking grammar
    if (counter > 1){
    console.log(arr[i] + ' exists ' + counter + ' times.');
    }else{
      console.log(arr[i] + ' exists ' + counter + ' time.');
    }
  }
}
// count(array1);

// #4

let str = "youareadeveloper";
function reverse(strng){
  let newString = '';
  for(let i = strng.length; i >= 0; i--){
    newString = newString + strng.charAt(i);
  }return newString;
}

// reverse(str);

// #3 Hash solution (stolen from Alex)

let numberAndTimes = {}

for (i = 0; i < arr.length; i++) {
  let num = arr[i]
  if (numberAndTimes.hasOwnProperty(num)) {
    numberAndTimes[num] = (numberAndTimes[num] + 1)
  } else {
    numberAndTimes[arr[i]] = 1;
  }
}

console.log(numberAndTimes)

// #3 cool array solution (stolen from Olga)

let arr = [5,10,5,2,2,1,653,5,90,5,2,7,9,20,43,92,1,74];
let used = [];
for (i=0; i<arr.length; i++) {
    let m = arr[i]
    if (used.indexOf(m)==-1) {
        let count = 1
        for (k=i + 1; k <arr.length; k++){

            if (arr[i]==arr[k]) {
                count++
                k++
            } else {}
        }
        used.push(m);
        console.log(m.toString() + " exists " + count.toString());
    }
}

// # 4 Better solution to 4

let str = "youareadeveloper";
function reverse(strng){
  let newString = '';
  for(let i = strng.length - 1; i >= 0; i--){
    newString = newString + (strng[i]);
  }return newString;
}

reverse(str);
