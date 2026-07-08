const student = {
    name: 'John',
    marks: {
        tamil: 80,
        english: 70
    },
};

const student1 = student; // reference copy
const student2 = { ...student }; // shallow copy
const student3 = structuredClone(student); // deep copy
student.name = 'Joy';

console.log(student); // Output: 80
console.log(student2); // Output: 80


const arr = [1, 2, 3, 4, 5];
const arr1 = arr; // reference copy
const arr2 = [...arr]; // shallow copy
const arr3 = structuredClone(arr); // deep copy
arr[0] = 10;

console.log(arr); // Output: [10, 2, 3, 4, 5]
console.log(arr1); // Output: [10, 2, 3, 4, 5]
console.log(arr2); // Output: [1, 2, 3, 4, 5]

