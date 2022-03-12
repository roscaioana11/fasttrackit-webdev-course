class Student {
    constructor (studentName, phoneNumber, age) {
        this.studentName = studentName;
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.hobbies = [];
    }

    setHobbies (hobbies) {
        this.hobbies = hobbies;
    }

    getHobbies () {
        return this.hobbies;
    }

    greetings () {
        return `Hello, my name is ${this.studentName} and I am ${this.age} of age.`
    }
}
