function arrayOps(arr){
    console.log("Original array: ", arr);

    let mappedArr = arr.map(function(item){
        return item*2;
    });
    console.log("After map: ", mappedArr);

    let filterArr = arr.filter(function(item){
        return item > 3;
    })
    console.log("After filter: ", filterArr);

    let found = arr.find(function(item){
        return item < 3;
    })
    console.log("After find: ", found);

    let sortedArr = arr.sort(function(a, b){
        return a - b;
    })
    console.log("After sort: ", sortedArr);
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrayOps(myArray);