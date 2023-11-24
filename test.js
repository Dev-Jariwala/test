let students = [
  { name: "Dev Jariwala", rollNumber: 59, marks: 100 },
  { name: "Riddhi Khaptawala", rollNumber: 9, marks: 0 },
  { name: "Himank Khaptawala", rollNumber: 10, marks: 1 },
  { name: "Bony Bandhara", rollNumber: 60, marks: 10 },
];

const toppers = students
  .filter((stu) => stu.marks >= 10)
  .map((stu) => stu.name);
console.log(toppers);
