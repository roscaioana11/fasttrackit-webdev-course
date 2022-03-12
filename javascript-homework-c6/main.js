const studentsList = [
    {
        studentName: 'Sharleen',
        phoneNumber: '0123456789',
        age: 20,
        hobbies: ['footbal']
    },
    {
        studentName: 'Della',
        phoneNumber: '0123456789',
        age: 22,
        hobbies: ['music', 'book']
    },
    {
        studentName: 'Ryana',
        phoneNumber: '0123456789',
        age: 30,
        hobbies: ['music']
    },
    {
        studentName: 'Lydia',
        phoneNumber: '0123456789',
        age: 25,
        hobbies: ['book']
    },
    {
        studentName: 'Mikey',
        phoneNumber: '0123456789',
        age: 25,
        hobbies: ['gaming']
    },
    {
        studentName: 'Chester',
        phoneNumber: '0123456789',
        age: 21,
        hobbies: ['painting', 'cooking']
    }
]

let allStudents = [];

for (let i = 0; i < studentsList.length; i++) {
    let student = new Student(studentsList[i].studentName, studentsList[i].phoneNumber, studentsList[i].age);
    student.setHobbies(studentsList[i].hobbies);
    // console.log(student);
    allStudents[allStudents.length] = student;  
}

console.log(allStudents);

console.log('Student Message: ' + allStudents[5].greetings());

for (let i = 0; i < allStudents.length; i++){
    if (allStudents[i].getHobbies().includes('music') || allStudents[i].getHobbies().includes('book')) {
        console.log(allStudents[i].greetings())
    }
}
