
//remove name from an array

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const namesToRemove = names.indexOf("Ahmad");
//to remove specific element 
names.splice(namesToRemove,1);
console.log(names);


// travel time calculation
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
const travelTime = getTravelTime(travelInformation);
function getTravelTime(){
    const journeyDuration = travelInformation.destinationDistance/ travelInformation.speed;//8.64
    return Math.floor(journeyDuration)+"hours and "+Math.floor((journeyDuration - Math.floor(journeyDuration))* 60)+"minutes";
    
}
console.log(travelTime); 


//series duration of my life

const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];
  //replace with different index in the array

  seriesDurations[0].title = "BRIDGERTON";
  seriesDurations[0].days = 3;
  seriesDurations[0].hours= 9;
  seriesDurations[0].min=16;
  seriesDurations[2].title = "Westworld";
  seriesDurations[2].days = 4;
  seriesDurations[2].hours = 13;
  seriesDurations[2].minutes = 16;
  
  const lifeSpan = 80*365*24;// assuming lifespan in 80years and converting into hours
  let totalPercentage = 0;
  function caluculateLifeSpanPercentage(){
    for(let i = 0; i<seriesDurations.length; i++){
      percentageValue = (seriesDurations[i].days*24)+(seriesDurations[i].hours)*100/lifeSpan;
      console.log(`${seriesDurations[i].title} took ${percentageValue.toFixed(3)} % of my life`);
      totalPercentage += percentageValue;
    }
    console.log( `In total there is ${totalPercentage.toFixed(3)} & of my life`);
  }
  console.log(caluculateLifeSpanPercentage());

  // Save a note task 
    // create a var called notes with empty array
    const notes = [];
    // create function savenote with  2 parameters
    function saveNote(content,id){
      const object = {//create an object 
          content: content,
          id : id,
        };
        notes.push(object);//push an object 
        
    }
    saveNote("Pick up groceries", 1);
    saveNote("Do laundry", 2);
    saveNote("Do cooking", 3);

    console.log(notes);
    
    // function to Get a note
    
    function getNote(id){
         for(const note of notes){
           if(note.id === id){
           return note;
           }
         }
        }
        

        const firstNote = getNote(3);
console.log(firstNote); //{content: 'Pick up groceries', id: 1}
  
//Log out notes

function logOutNotesFormatted(){
  for(const note of notes){
     console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
  }
}
      console.log(logOutNotesFormatted());

      //function to change your note
  function updateContentOfNote(id, content){
    for (const note of notes) {
      if(note.id===id){
        note.content=content;
      }
    }
  }
  updateContentOfNote(3, "Dont cook food, let's go out");
  console.log(notes);



