//student score, total possible score
//15/20 --> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

//define a function to calculate percentage
const gradeCalc = function(studentScore = 18, totalScore = 20) {
    if (typeof studentScore === 'number' && typeof totalScore === 'number') {
        const percent = (studentScore / totalScore) * 100;
    //define letter grade variable    
        let letterGrade;
    //use if statements to assign letter values from percentage    
        if(percent >= 90) {
            letterGrade = 'A';
        } else if(percent >= 80) {
            letterGrade = 'B';
        } else if(percent >= 70) {
            letterGrade = 'C';
        } else if(percent >= 60) {
            letterGrade = 'D';
        } else {
            letterGrade = 'F';
        }
    //use string template to return grade phrase    
        return `You got a ${letterGrade} (${percent}%)!`
    } else {
        throw Error('Arguments must be numbers!');
    }
}

//call function with various arguments
const yourGrade0 = gradeCalc()
const yourGrade1 = gradeCalc(48, 50)
const yourGrade2 = gradeCalc(26, 30)

try {
    const yourGrade3 = gradeCalc('hi', true)
    console.log(yourGrade3)
} catch (e) {
    console.log(`We caught the error! ${e.message}`)
}

//print function
console.log('**********GRADE CALCULATOR**********')

console.log(yourGrade0)
console.log(yourGrade1)
console.log(yourGrade2)
