const samuel = ["samuel"];
const moneyHeist = [
  "Tokyo","The Professor","Nairobi","Rio","Denver",
  "Raquel","Helsinki","Gradia","Arturo","Monica",
  "samuel","Allision Parker"];

const large = new Array(1000).fill("samuel");

function findSamuel(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "samuel") {
      console.log("Found samuel");
    }
  }
console.log("Found samuel");
}

findSamuel(large);

//O(n) ==========> Linear Time - It takes linear time  to find "SAMUEL"
//The n in O(n) is just the number of array invioked,if it is var samuel it is 0(1),if var
//moneyHeist,it is O(12) and if var large,it is O(1000);
//As the number of inputs increases,the number of operations increases linearly with it.
//O(n) is the most common BigO notation