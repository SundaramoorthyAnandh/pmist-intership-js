const obj = {
    name: "John",
    age: 30,
    city: "New York"
};

obj.name
const { name } = obj;

function displayInfo({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

displayInfo(obj); // Output: Name: John, Age: 30

const arr = [1, 2, 3, 4, 5];
const [one, two, ...rest] = arr;

console.log(one); // Output: 1
console.log(two); // Output: 2
console.log(rest); // Output: [3, 4, 5]

