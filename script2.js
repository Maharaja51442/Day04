//how to compare  the two json have the same properties without order ?
//a.let obj1={name:"person1",age:5}; 
//b.let obj2={age:5,name:"person1"};   
//Answer;
let obj1 = {name: "person1", age: 5};
let obj2 = {age: 5, name: "person1"};

if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log("The two JSON objects are equal");
} else {
    console.log("The two JSON objects are not equal");
}
