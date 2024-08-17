// array
// foreach, map, filter, indexAt, find,


// var arr = [1,2,3,4];

// arrForeach =  arr.forEach(function(val){
//     console.log( val + 1);
// })

// newArr = arr.map(function(val){
//     return val*2;
// })

// arrFilter = arr.filter(function(val){
//     if(val<4){
//         return true;
//     }
// })

// arrfind = arr.find(function(val){
//     if(val === 3){
//         return val
//     }
// });

// arrIndex = arr.indexOf(3)

// console.log(`for each: ${arrForeach}`);
// console.log(`Map: ${newArr}`);
// console.log(`Filter: ${arrFilter}`);
// console.log(`Find: ${arrfind}`);
// console.log(`Index: ${arrIndex}`);


// object

var obj = {

    "name":"abc",
    "age":22,
};
Object.freeze(obj);
console.log(obj);
obj["age"] = 24;

