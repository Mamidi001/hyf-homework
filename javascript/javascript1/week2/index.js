
//function that gives fullname
/*
function getFullname(firstname, surname ){
return ('"'+firstname+" "+surname+'"'); 
}

const fullname1= getFullname("Benjamin", "Hughes");
const fullname2= getFullname('swetha','mamidi');
console.log (`FamilyName : ${fullname1}`);
console.log(`FirstName:${fullname2}`);
*/
//function that add onemore parameter

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
