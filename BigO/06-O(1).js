function compressFirtBox(boxes){
    console.log(boxes[0]);
}



//O(1) - Constant Time => The no matter how many boxes we have
//we are just grabbing the first box in the array,even if it is boxes[9],its still 0(1) 
//bcs we are just taking out one box

const boxes = [0,1,2,3,4,5,6,7,8,9,10];

function logFirstTwoBoxes(boxes){
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2) -The number of operations is two  no matter  how big the array is

//NOTE: We do not care of O(2),O(3),0(19) here, we run down to O(1) - constant time
// - It doesnt matter how many elements we have,its always going to run the same (predictability)