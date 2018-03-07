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

let arr = [5,10,5,2,2,1,653,5,90,5,2,7,9,20,43,92,1,74];

function count(ar){
  ar.sort();
  for (let i = 0; i < ar.length; i++){
    let counter = 1;
    for (let k = i + 1; k < ar.length; k++){
      let variable = ar[i];
      if (ar[i] === ar[k]){
        counter++;
        i++;
      }
    }
    if (counter > 1){
    console.log(ar[i] + ' exists ' + counter + ' times.');
    }else{
      console.log(ar[i] + ' exists ' + counter + ' time.');
    }
  }
}
count(arr);

// #4

let str = "youareadeveloper";
function reverse(strng){
  let newString = '';
  for(let i = strng.length; i >= 0; i--){
    newString = newString + strng.charAt(i);
  }return newString;
}

reverse(str);
