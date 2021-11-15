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



  