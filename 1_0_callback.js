function processData(calback) {
    console.log("Data is processing");
    setTimeout(() => {
        calback();
    }, 1000);
}
function fetchData() {
    console.log("data has been fetched");
}
console.log("before");
processData(fetchData);
console.log("after");
//2nd programm
const students = [{ name: "nair", subject: "javascript" }];
function enrollStudent(student, calback) {
    setTimeout(() => {
        students.push(student);
        console.log("Studend has been enrolled");
        console.log(students);
        calback();
    }, 3000);
}
function getStudent(student) {
    setTimeout(() => {
        console.log("Studend has been geted");
    }, 3000);
}
const student = { name: "khalid", subject: "Python" };
enrollStudent(student, getStudent);
console.log(students);
export {};
