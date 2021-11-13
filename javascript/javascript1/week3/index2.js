
//Smart phone usage app

    const activities = [];
    
    function addActivity(date, activity,duration){
        const object ={
            date :date,
            activity :activity,
            duration :duration

        }
        activities.push(object);
    }

addActivity("23/7-18", "Youtube", 30);
addActivity("25/11-20", "Netflix", 60);
addActivity("5/10-21", "Instagram", 40);
addActivity("25/11-20", "Facebook", 15);


        console.log(activities);
    
    

    
    