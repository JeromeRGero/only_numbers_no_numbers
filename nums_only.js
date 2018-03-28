var newArray = [1, "apple", -3, "orange", 0.5];
// newArray is [1, -3, 0.5]

var newerArray = numbersOnly(newArray);
console.log(newerArray);

function numbersOnly( arr ){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function noNums( arr ){
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            arr[i] = "No Numbers!";
        }
    }
}

noNums(newArray);

console.log(newArray);