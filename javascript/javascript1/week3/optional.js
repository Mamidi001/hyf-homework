const activities = []
function addActivity(date, activity, duration){
    if(typeof date=== 'string'&& typeof activity=== 'string' && typeof duration=== 'number'){
       activities.push({
         date,
         activity,
         duration
       })
       
    }
   else{
      console.log('error');
    }
}
addActivity("23/7-18", "Youtube", 0);
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Youtube", 10);
addActivity("23/7-18", "Youtube", 0);
console.log(activities);
const limit = 60;
let screenLimit = 0;
function showStatus(activities){
  
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
}
else{
  console.log(`'you have added ${activities.length} activities'`);
}
 for (const screenTime of activities) {
   screenLimit += screenTime.duration;
   
}
console.log(screenLimit);
if(screenLimit>=limit){
  console.log('you are out of time');
}
else{

  console.log(`${limit-screenLimit} minutes you have still more time to play`);

}
}

showStatus(activities);