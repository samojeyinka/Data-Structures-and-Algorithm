// Memory => Space complexity
/* 
========= What causes space complexity =========
- Variables
- Data structures
- Function call
- Allocations

*/


// function booooo(n){ 
//  for(let i = 0; i < n.length; i++){
//     console.log("booooo!");
//  }
// }


// booooo([1,2,3,4,5]); //O(n)


function arrayOfHintTimes(n){
    let hiArray = [];
    for(let i = 0; i < n; i++){
        hiArray[i] = 'hi';
    }

    console.log(hiArray);
}

arrayOfHintTimes(6); //O(n)