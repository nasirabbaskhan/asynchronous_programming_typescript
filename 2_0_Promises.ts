// function processData() {
//   return new Promise((resolve, reject) => {
//     console.log("Data is processing");
//     let data = "data hase been fetched";
//     setTimeout(() => {
//       if (data) {
//         resolve(data);
//       } else {
//         reject("Data is not fetched");
//       }
//     }, 1000);
//   })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("This will run always");
//     });
// }

// console.log("before");
// processData();
// console.log("after");

//2nd programm
// function fun1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let err = false;
//       if (!err) {
//         resolve("your request has been resolved");
//       } else {
//         reject("your request has not resolved");
//       }
//     }, 2000);
//   });
// }
// fun1()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("thanks for response");
//   });

const students = [{ name: "nair", subject: "javascript" }];
type Student = {
  name: string;
  subject: string;
};
function enrollStudent(student: Student) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      students.push(student);
      console.log("Studend has been enrolled");
      console.log(students);
      const err = true;
      resolve(student);
    }, 3000);
  });
}
function getStudent(student: Student) {
  setTimeout(() => {
    console.log("Studend has been geted");
  }, 3000);
}

const student = { name: "khalid", subject: "Python" };
enrollStudent(student)
  .then(() => {
    getStudent(student);
  })
  .catch(() => {
    console.log("some error has been occure");
  });
