
//Flight booking fullname function

function getFullname(firstname, surname, useFormalName, gender){
  let fullName= firstname+" " +surname;
  
  if(firstname===" "&& surname===" "){
      return "firstname and last should not be empty";
  }
  if(gender==="female"){
      
  
  if (useFormalName===true && useFormalName!==" "){
 return "mrs "+ fullName;
  }
  else{
      return fullName;
  }
  }
  else {
      if (useFormalName===true && useFormalName!==" "){
          return "mr "+ fullName;
           }
           else{
               return fullName;
           }
           }
      
  }


const fullname2= getFullname(" mamidi","swetha ", true, "male");
console.log (fullname2);


// Event application
const weekdays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
function getEventWeekday(numofdays){
    const day = new Date();
    let today = day.getDay();
    const eventDay = today+numofdays;
    const weekDay= eventDay%7;
    console.log(eventDay);
    console.log(weekDay);
    console.log(weekdays[ weekDay]);
    return weekdays[ weekDay];
}
console.log(getEventWeekday(10));

//weather wear

function clothesToWear(temperature){
  if(temperature<=10){
      console.log ("wear fleece jacket");
   }
      else if(temperature>15 && temperature<=20){
          console.log('wear sweatshirt');
      }
      else if (temperature>20){
          console.log('wear tshirt and short');
      }
      else{
          console.log('wear as you wish')
      }
}
clothesToWear(5);
clothesToWear(25);

//student manager
/*const classStudents = ['Ananth','Aarush','Aneesh']
const class07Students=['swetha','queen']
classStudents.push(...class07Students);
console.log(classStudents);*/


const class07Students = [];
function addStudentToClass(studentName) {
    if (!class07Students.includes(studentName))
   if(class07Students.length<=6 || studentName==='Queen'){
    class07Students.push(studentName); 
   }
  else if(class07Students.length>=6){
      console.log('cannot add more than 7');
  }
  
  else{
      console.log(`${studentName}is in the class`);
  }
  else{
      console.log (`student name should be filled`);

  }
}


function getNumberOfStudents() {
    console.log(class07Students)
    return class07Students.length;
  }
addStudentToClass('swetha');
addStudentToClass('Ananth');
addStudentToClass('Aneesh');
addStudentToClass('aarush');
addStudentToClass('shilpa');
addStudentToClass('Queen');
addStudentToClass('mac');
addStudentToClass('puppy');
addStudentToClass('')


console.log(class07Students);

  




  