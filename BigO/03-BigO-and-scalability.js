// In JavaScript performance.now() method can be used to check the performance of your code.
//  You can check the execution time of your code using this method.

const samuel = ["samuel"];
const moneyHeist = [
  "Tokyo","The Professor","Nairobi","Rio","Denver",
  "Raquel","Helsinki","Gradia","Arturo","Monica",
  "samuel","Allision Parker"];

const large = new Array(1000).fill("samuel");

function findSamuel(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "samuel") {
      console.log("Found samuel");
    }
  }

  let t1 = performance.now();
  console.log("The program takes " + (t1 - t0) + " millieseconds to execute");
}

findSamuel(large);


//How faster program execution or runtime/performance depend on perworful the CPU  in the
//system the computer is and what other programs are in your computer and what programing language you
//are using and many other factors.


// When we talk about BigO and scalabilty of ConvolverNode.We simply mean when we grow bigger and bigger
// with our InputDeviceInfo. How much does the algorithm or function slow down,as our characters increaes in the array,How
// many more operaions do we have to do - This is called Algorithmic Efficiency

// One way to measure the efficiency of an algorithm is to count how many operations it 
// needs in order to find the answer across different input sizes.

