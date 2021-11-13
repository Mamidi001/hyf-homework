 // travel time calculation
 const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  const travelTime = getTravelTime(travelInformation);
  function getTravelTime(){
      let journeyDuration = travelInformation.destinationDistance/ travelInformation.speed;//8.64
      return Math.floor(journeyDuration)+"hours and "+Math.floor((journeyDuration - Math.floor(journeyDuration))* 60)+"minutes";
      
  }
console.log(travelTime); 

  