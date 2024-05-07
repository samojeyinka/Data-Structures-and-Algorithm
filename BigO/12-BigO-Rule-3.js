var boxes1 = [1,2,3,4,5];
var boxes2 = [4,8,12,16];



function compressBoxes(boxes1, boxes2){
    boxes1.forEach(function(box){
        console.log("box",box);
    });

    boxes2.forEach(function(box){
        console.log("box",box);
    });
}


compressBoxes(boxes1,boxes2);

/* When we loop through the same boxes in the both forEach,we can say the BigO is O(2n)=> O(n) 
but in the situation above where two different boxes are being looped through. The BigO is O(a + b)

*/