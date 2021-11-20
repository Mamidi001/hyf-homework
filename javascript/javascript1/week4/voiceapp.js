

let toDoList = [];
let myName = [];



function getReply(command){
    
    


if (command.includes('Hello my name is') || command.includes( 'i am ')){
    
    let text =command.split('');
     console.log(text);
    
     const InputName= text[text.length-1];
     myName.push(InputName);
     console.log(`nice to meet you${InputName}`)
    
     
    }
    if (command==='what is my name?'&& myName.length>=1){
        console.log(`your name is ${myName[0]}`);
    }
    else if (myName.length===0){
        console.log('your name is not yet here');
    }
    

// used unshit and push 

if(command.includes('Add fishing to my todo')){
   toDoList.unshift('fishing');
    console.log('fishing added to your todo');
    
}


if(command.includes('Remove fishing to my todo')){
    toDoList.shift('fishing');
    console.log('fishing removed from your todo');

} 

 if (command.includes('Add singing in the shower to my todo')){
    toDoList.push('singing in the shower');
    console.log(' singing in the shower added to your list');
}

if (command.includes('what is on my todo')){
    for(let i=0; i<toDoList.length; i++){
    
        console.log(`Your list contains : ${toDoList[i]}`);
}
}  
} 
// I use the simple code but i don't no whether i can use like this or not

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let today = new Date();

let month = (today.getMonth());
let date = (today.getDate());
let year = today.getFullYear();

console.log(`${date}. of ${months[month]} ${year} `);





getReply('Add singing in the shower to my todo');
getReply('Add fishing to my todo');
getReply('what is on my todo');
getReply('what is my name?');



    



