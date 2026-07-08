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

// name:mp
marksList.forEach((student, idx, array) => {
    console.log(`${idx + 1}: ${student.name} >> ${student.mp + 1}`);
    // add 1 mark to this person
    if (student.mp < 100) {
        student.mp = student.mp + 1;
    }
});

console.log(marksList);