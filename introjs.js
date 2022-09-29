
// console.log("hello")

var carName = "toyota";
let stdName = 'sakda';
const pi = 3.14;

const a = 1;
// console.log(a)
{
    let a = 3;
    // console.log(a);
}
// console.log(a)
// a = 6


var name = "sakda"
var id = 123456789

var arr = ["sakda", "homhuan", 1, 4.56, name, id]

// console.log(arr[0], arr[1]);

var obj = {
    name: "sakda",
    lastname: "homhuan",
    id: 12345678
}

// console.log(obj.name, obj["lastname"]);

// function

function myFunction() {
    console.log("hello from function");
}
// myFunction()

function add(a) {
    var b = 1;
    console.log(a + b);
}

// add(1)

function plus(x) {
    return 1 + x
}
var plus = (x) => { return 1 + x }

// var b = plus(1)
// console.log(plus(1))

// if
var x = 76;
if (x > 80) {
    console.log("A");
} else if (x > 70) {
    console.log("B");
} else if (x > 60) {
    console.log("C");
} else {
    console.log("D");
}

// for loop
// var i;
for (var i = 0; i <= 10; i += 2) {
    // console.log("i = " + i);
}

// while loop
var i = 0;
while (i <= 10) {
    var b = i * 2
    console.log("2 * " + i + "=" + b);
    i++;
}

var arr = ["a", "b", "c", "d", "e", "f"]

arr.forEach(i => {
    // console.log("i = " + i)
});