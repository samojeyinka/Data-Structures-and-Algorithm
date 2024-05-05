const nemo = ['nemo']

function findNemo(array){
        for(let i = 0; i < array.length; i++){
            if(array[i] === 'nemo'){
                    console.log('Found Nemo at index ' + i);
            } 
        }
}

findNemo(nemo);




// We called this the RUNTIME - How long does it take to run 
// a certain problem through a function or a task