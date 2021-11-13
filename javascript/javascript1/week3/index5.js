// Save a note task 
    // create a var called notes with empty array
    const notes = [];
    // create function savenote with  2 parameters
    function saveNote(content,id){
    
        // creating a single note to an odject 
      const object = {
          content: content,
          id : id,
          
      }
        //push an object 
        notes.push(object);
        
    }
    saveNote("Pick up groceries", 1);
    saveNote("Do laundry", 2);
    console.log(notes);
    
    //Get a note

    
    function getNote(id){
        for(const getId of notes){
            if (getId.id===id){
                return getId;
            }
        }
        
        return 'error';
    }
        

        const firstNote = getNote(1);
console.log(firstNote);
        