const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");


function checkBrdyDateIsLucky(){
const dob = dateOfBirth.value;
const num = luckyNumber.value;
const sum= calculateSum(dob);

if(sum && dob )
 compareValues(sum , luckyNumber.value);
 
 if(sum && num)
 compareValues(sum , luckyNumber.value);
 
 else
 outputBox.innerText="Please put both the fields😡!";

}

function compareValues(sum , luckyNumber){
// console.log(sum , luckyNumber);
if(sum % luckyNumber == 0){
    outputBox.innerText="Your Birthday is lucky ! 🥳❤️";
}else{
    outputBox.innerText="Your Birthday is not lucky ! 😢";
}
}

function calculateSum(dob){
dob = dob.replaceAll("-","");
let sum=0;
for( let index = 0 ; index < dob.length ; index++ ){
    sum = sum + Number(dob.charAt(index));
}
return sum;
}

checkButton.addEventListener('click' , checkBrdyDateIsLucky)