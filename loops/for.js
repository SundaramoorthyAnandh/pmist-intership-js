const marksList = [
    {
        name: 'Sundar',
        mp: '70',
        calculateAge: () => { }
    },
    {
        name: 'Harsha',
        mp: '67'
    },
    {
        name: 'Gokul',
        mp: '43'
    },
    {
        name: 'Rajabeer',
        mp: '99'
    }
];

// name:mp
// init, condition, iterator
for (let index = 0; index < marksList.length; index++) {
    console.log(`${marksList[index].name}:${marksList[index].mp}`)
}