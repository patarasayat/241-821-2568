/*
console.log("Hello Word");
console.log("This is a test JavaScript file.");

/*
console.log("Logging some information to the console.");
console.log("Another log entry.");
*/
//string, Number, Boolean, Object, Array

//String
//let name = "John"; //String

//Number

/** 
let age=30; //Number
let height = 5.9 //Number

fname="Alice";
console.log("Name:",name);

fanme="Bob";
console.log("Name:",name);
console.log("Age:",age);
console.log("Height:",height);


/** 
+=บวก
-ล=บ
*=คูณ
/=หาร
%=หารเอาเศษ
*/

/** 
let number1= '10';
let number = '3';

let result1 = number1+ number2;
console.log("ผลบวก=", result);

/**
 == เท่ากับ
 != ไม่เท่ากับ
 > มากกว่า
 < น้อยกว่า
 >= มากกว่าเท่ากับ
 <= น้อยกว่าเท่ากับ
 */

/** 
 let number =23;
 let number2 =21;
 let condition =number < number2; //Boolean ค่าความจริง true fals
 console.log("condition:",condition);

 let number1= 3;
 let number2= 5;

 //if-else condition
 if (number1>=number2){
    console.log('this is if');
 } else if(number1 == number2){
    console.log('this is else if')
 }else {
    console.log('this is else');        
 }

 /**
  Grade
  >=80 เป็นเกรด A    
  >=70 เป็นเกรด B
  >=60 เป็นเกรด C
  >=50 เป็นเกรด D
  <50  เป็นเกรด F
  */

  /** 
  if(Score>=80){
    console.log('this is A');
  }else if(Score>=70){
    console.log('this is B');
  }else if(Score>=60){
    console.log('this is C');
  }else if(Score>=50){
    console.log('this is D');
  }else{
    console.log('this is F');
  }
    
/**
* && และ
* || หรือ
* ! not หรือ ไม่
*
 */

/** 
let number1= 5
let number2 =10

let condition = (number >0) && (number2 > 0) //true && true = true
console.log("condition1:",condition)

let age = 25
let gender ="female"
if(age >= 18 && gender =="female") {
    console.log(" ");
}
  

/** 
let number = 20

if(number %2 !=) {
   console.log("เป็นเลขคู่")
}
else{
    console.log("เป็นเลขคี่")
}

/**
 * while
 * for
 */
 
/** 
let conter = 0;
while(conter <=5){ //true
    conter = conter +1; 
    console.log("while:",conter);
}

for(let i =0; i<= 4 ; i=i+1){
    console.log("for:",i);
}

/**
  array
 */

  /** 
let age1= 25
let age2= 30
let age3= 35

let age =[25,30,35];
console.log(ages); //[25,30,35]
console.log(ages[1]); //[25,30,35]

//แทนที่ค่าในอาเรย์
ages=[40,45,50];
console.log(ages); //[40,45,50]

//ต่ออาเรย์
age.push(55);
console.log(ages); //[40,45,50]

//ความยาวของอาเรย์
console.log(age.length); //4

//ลบสมาชิกตัวสุดท้ายของอาเรย์
age.pop();
console.log(ages); //[40,456,50]

if(ages.includes(45)) {//true
   console.log("พบ 45 ในอาเรย์");//พบ 45 ในอาเรย์
}

let number =[90,60,80,40,50];
numberr.sort();
console.log(numbers); //[40,50,60,80,90]

let names =["John","Jane","Doe"];
names.push("Smith");
console.log(names);
console.log(names.length);

console.log(names[0]);
console.log(names[1]);

for (let i =0; i< names.length; i++) {
  console.log(names[i]);
}

/**
 * object
 */

/** 
let student = [{
  age: 20,
  name: "Emma",
  grade: 'A'
},{
  age: 22,
  name: "Liam",
  grade: 'B'
}];

student.pop();

for(let i =0; i < student.length; i++){
console.log("Student" +(i+1) + ":")
console.log("Name:" + student[i].name)
console.log("Grade:" +student[i].grade)
}

student.push({
  age:21,
  name:"Olivia",
  grade:'A'
});
console.log(student);

/**
 function
 */

 //ประกาศฟังก์ชัน

 /** 
 function calculate_grade(score){
  if(score >= 90) {
     grade='A';
  } else if (score >= 80) {
     grade='B';
 }  else if (score >=70) {
     grade='C';
 }  else if (score >=60) {
     grade='D';
 }  else {
     grade = 'F';
 }
 return grade;
 }
 //เรียกใช้ฟังก์ชัน
 let student_scor = 85;
 let student_grade = calculate_grade(student_score);
 console.log("Student's grade is:"+student_grade);

 /**
  array
  */

  /** 
let score =[10,20,30,40,50];
for (let i = 0; i <score.length; i++){
  //console.log('Score at index '+i ' 'is' +score[i]);
  console.log('Score at index ${i} is ${score[i]}');
}

score = score.map((s) => {
  return s *2
})

score.forEach((s) => {
  console.log('new score:',s)
})

let score =[10,20,30,40,50];

for(let index =0; index <score.length; index++){
  console.log('score',score[index])
}

let newScore = score.filter((s) => {
  return s >= 30
})

newScore.forEach((ns) => {
  console.log('new score:',ns)
})

/**
 object +function
 */

 /** 
 let students = [
  {
    name: 'aa',
    score: '50',
    grade: 'A'
  },
  {
    name: 'bb',
    score: '60',
    grade: 'B'
  }
 ]

 console.log('Student :', students[0])

 let student = students.find((s) => {
  if(s.name == 'bb'){
    return true
  }
 })

 let doblescore_student = students.map((s) =>{
  s.score = score *2
  return s
 })

 console.log('student:',student)
 console.log(doblescore_student)

 let highScore_student = students.filter((s) =>{
  if(s.score >= 110) {
    return true
  }
})

console.log('hightScore_student',highScore_students)