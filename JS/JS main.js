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

let conter = 0;
while(conter <=5){ //true
    conter = conter +1; 
    console.log("while:",conter);
}

for(let i =0; i<= 4 ; i=i+1){
    console.log("for:",i);
}