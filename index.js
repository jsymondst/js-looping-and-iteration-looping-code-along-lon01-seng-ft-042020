// Code your solutions in this file
function countDown(){
    let counter = 10;
    while (counter >=0){
        console.log(counter);
        counter--;
    }
}

function writeCards(arr){
    const result = []
    for (let i = 0; i < arr.length; i++ ){
        result.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    }
    return result
}