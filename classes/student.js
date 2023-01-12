const express = require('express');

class Student {
    constructor(fName, lName, address){
        this.fName = fName;
        this.lName = lName;
        this.address = address;
    }

    getName() {
        return this.fName;
    }
}

module.exports = Student;