import marksList from './utils.js';

// name:mp
const newMarkList = marksList.map((student, idx, array) => {
    if (student.mp < 100) {

        return {
            ...student,
            mp: student.mp + 1
        }
    }//guardrails

    return student;
});

console.log(marksList, newMarkList);