//Drop Non Dominants
var numbers = [1,2,3,4];



function printAllNumbersThenAllpairsSum(numbers){
    numbers.forEach(function(number){ // O(n)
        console.log(number);
    });

    numbers.forEach(function(firstNumber){ // O(n^2)
    numbers.forEach(function(secondNumber){
        console.log(firstNumber + secondNumber);
    });
});
}


printAllNumbersThenAllpairsSum(numbers);

/* The BigO here is // O(n + n^2),since we are dropping the non dominant => O(n^2) */