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
        mp: 36
    }
];

const newMarkList = marksList.filter((student, idx, array) => {
    if (student.mp >= 50) {
        return student;
    }
});

const newMarListForLoop = [];

for (let idx = 0; idx < marksList.length; idx++) {
    if (marksList[idx].mp >= 50) {
        newMarListForLoop.push(marksList[idx])
    }
}

console.log(marksList, newMarkList, newMarListForLoop);

function filterMarks(marksList, callback) {
    const newMarkList = [];

    for (let idx = 0; idx < marksList.length; idx++) {
        if (callback(marksList[idx], idx, marksList)) {
            newMarkList.push(marksList[idx])
        }
    }

    return newMarkList;
}
