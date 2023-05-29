console.log(`===================== Step-1 =============================`);
let professor = {
  name: "Sonalee kulkarni",
  age: 40,
  university: "ABC University",
  department: "Computer Science",
  Subject: "Python",
  degrees: {
    engineering: "CSC",
    PHD: "Adv Computing",
  },
  getTeacherDegrees: function () {
    console.log(
      `Teacher Degrees are total degrees are: ${this.degrees.PHD} , ${this.degrees.engineering}`
    );
  },
};

console.log(`Details of Professor ${professor}`);
console.log(professor);

console.log(
  `===================== Step-2 Add Degrees =============================`
);
console.table(professor);

console.log(
    `=====================Array Add Certificate =============================`
  );
  
  professor.certificates = ["Hacker Rank Parti", "IFE course", "Adv Programming"];
  
  console.table(professor);

console.log(`===================== Step-4 =============================`);
professor.getTeacherDegrees();

console.log(`===================== Step-5 =============================`);

professor.totalExperience = "14 years";

console.table(professor);

console.log(
  `===================== Modifying existing property  =============================`
);

professor.Subject = "JavaScript";
console.table(professor);

console.log(
  `===================== Add one more certificate =============================`
);
professor.certificates[professor.certificates.length] = "Oracle Certified";
console.log(professor);
console.log(
  `===================== Step-8 =============================`
);
console.log(professor.certificates[professor.certificates.length - 1]);

console.log("NOTE: All certificates name create in short");
