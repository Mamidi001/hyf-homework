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

  
