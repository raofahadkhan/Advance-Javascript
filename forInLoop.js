// FOR IN LOOP WORKS ON OBJECTS AND ARRAYS BUT IT RETRUNS KEYS AND INDEXES SIMULTANEOUSLY
// BUT NOT RECOMMENDED FOR USE WITH ARRAY

// const object = {a: 1, b:2, c:3};
// for(const key in object){
//     console.log('key', key);
// }

// const object = {a: 1, b:2, c:3};
// for(const key in object){
//     console.log(key + ' ',object[key]);
// }

// const array = [1,2,3];
// for(const index in array){
//     console.log(index,' ', array[index]);
// }


// var obj = {a:1, b:2, c:2};
// for(const prop in obj){
//     console.log(`obj.${prop} = ${obj[prop]}`);
// }