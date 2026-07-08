// int -> fn
function multiplier(factor) {
    return (n) => n * factor;
}
const double = multiplier(2);
double(5);

// HOF
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
// greaterThan10 = m => m > 10
console.log(greaterThan10(11));
//greaterThan10 = 11 => 11 > 10 => true

