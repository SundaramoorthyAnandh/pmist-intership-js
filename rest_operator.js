function add(a,b, ...numbers) {
    console.log(numbers); // Output: [1, 2, 3] or [4, 5, 6, 7]
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(add(1, 2, 3)); // Output: 6
console.log(add(4, 5, 6, 7)); // Output: 22



