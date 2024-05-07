var items = [2, 4, 6, 8, 10];


function printFirstItemThenFirstHalfThenSayHi100Times(items) {

  console.log(items[0]);   //O(1)
  middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while(index < middleIndex) { // O(n/2)
      console.log(items[index]);
      index++;
  }

  for (var i = 0; i < 100; i++){ //O(100)
      console.log("hi");
  }
  
}



printFirstItemThenFirstHalfThenSayHi100Times(items);

//O(1 + n/2 + 100) => O(n/2 + 101) => O (n/2 + 1) =>  O(n)
// with the BigO rule-2, We drop the constant


