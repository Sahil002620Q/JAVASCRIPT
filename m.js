let name = "Sahil";
let rollNo = 101;
let maths = 85;
let physics = 72;
let computer = 91;
let english = 78;

function getTotal() {
    return maths + physics + computer + english;
}

let total = getTotal()

function getPercentage() {
    return (total/400)*100;
}

let percentage = getPercentage()

function getResult() {
    if(maths < 33 || physics < 33 || computer < 33 || english < 33) {
        return "Fail";
    }
    else {
        return "Pass";
    }
}

function getGrade() {
    if(percentage >= 90){
        return "A+";
    }
    else if(percentage <= 89 && percentage >= 80){
        return "A";
    }
    else if(percentage <= 79 && percentage >= 70){
        return "B";
    }
    else if(percentage <= 69 && percentage >= 60){
        return "C";
    }
    else if(percentage <= 59 && percentage >= 50){
        return "D";
    }
    else if(percentage < 50){
        return "E";
    }
}

console.log("Name :",name);
console.log("Roll number :",rollNo);
console.log("Maths :",maths);
console.log("Physics :",physics);
console.log("Computer",computer);
console.log("English",english);
console.log("Total : ",getTotal());
console.log("Percentage :",getPercentage());
console.log("Result :",getResult());
console.log("Grade :",getGrade())