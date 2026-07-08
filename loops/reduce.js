const marksList = [
    {
        name: 'Sundar',
        mp: 70,
    },
    {
        name: 'Harsha',
        mp: 67
    },
    {
        name: 'Gokul',
        mp: 43
    },
    {
        name: 'Rajabeer',
        mp: 100
    }
];

let avg = null;
let sum = 0;

console.log(sum, avg);
for (let i = 0; i < marksList.length; i++) {
    sum += marksList[i].mp;

    // if (marksList.length - 1 === i) {
    //     avg = sum / marksList.length
    // }
}

avg = sum / marksList.length

marksList.reduce((acc, student, idx, array) => {
    acc += student.mp;

    if (array.length - 1 === idx) {
        avg = acc / array.length
    }

    return acc;


}, 0);

console.log(sum, avg);