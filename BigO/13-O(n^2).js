const boxes = ['a', 'b', 'c', 'd', 'e'];

function logPairsOfArrays(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        console.log(array[i],array[j]);
    }
  }
}

logPairsOfArrays(boxes);

/* Because the loop is nested,the BigO is O(a * b) => O(n^2) */