let obj = {
    "data": {
        "name": "Giang",
        "age": 20,
        "is_admin": true
    },
    "string": "hello"
};

let temp = JSON.stringify(obj);
let obj2 = JSON.parse(temp);
delete obj2.string;
console.log(obj);
console.log(obj2);

// obj.data.name = "Tuan";
// delete obj.string;
// console.log(obj);

// let {
//     data: { name: anotherName, age, is_admin }
// } = obj;

// console.log(anotherName);
// console.log(age);
// console.log(is_admin);
