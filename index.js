
const uniqueNumbers = new Set();

uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(2); // Dublikatas nebus pridėtas

//console.log(uniqueNumbers); // Output: Set(3) { 1, 2, 3 }
const a =[2,2,3,3,4,4,5,5,5];
function countElementFrequency(arr) {
  const frequencyMap = new Map();
  arr.forEach(element => {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  });
  return frequencyMap;
}

  //console.log(countElementFrequency(a));


  const vehicles = ['car', 'truck', 'car', 'bike', 'car', 'bike', 'truck'];
  
// Call the function to count element frequency
const elementFrequency = countElementFrequency(vehicles);
elementFrequency.forEach((count, element) => {
  console.log(`${element}: ${count} time(s)`);
});




function walkDog(){
  return new Promise((resolve, reject) => {
      setTimeout(() => {

          const dogWalked = true;

          if(dogWalked){
              resolve("You walk the dog ");
          }
          else{
              reject("You DIDN'T walk the dog");
          }
      }, 1500);
  });
}

function cleanKitchen(){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          
          const kitchenCleaned = true;

          if(kitchenCleaned){
              resolve("You clean the kitchen ");
          }
          else{
              reject("You DIDN'T clean the kitchen");
          }
      }, 2500);
  });
}

function takeOutTrash(){
  return new Promise((resolve, reject) => {
      setTimeout(() => {

          const trashTakenOut = true;

          if(trashTakenOut){
              resolve("You take out the trash ");
          }
          else{
              reject("You DIDN'T take out the trash");
          }

      }, 500);
  });
}

function takeOutTrash(){
  return new Promise((resolve, reject) => {
      setTimeout(() => {

          const trashTakenOut = true;

          if(trashTakenOut){
              resolve("You take out the trash ");
          }
          else{
              reject("You DIDN'T take out the trash");
          }

      }, 500);
  });
}

async function doChores(){
try{
  const walkDogResult = await walkDog();
  console.log(walkDogResult);

  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);

  const takeOutTrashResult = await takeOutTrash();
  console.log(takeOutTrashResult);
  
  console.log("You finsihed all the chores!");
}
catch(error){
  console.error(error);
}}
doChores();

function generateEmail(length, includeLowercase, includeUppercase, includeNumbers) {
  let characters = '';
  if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumbers) characters += '0123456789';

  let email = '';
  for (let i = 0; i < length; i++) {
      email += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return email;
}

// Options
const emailNameLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;

const email = generateEmail(emailNameLength, includeLowercase, includeUppercase, includeNumbers);

console.log(`Generated email: ${email}@bit.lt`);
