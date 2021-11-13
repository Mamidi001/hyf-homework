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
  
  
  const age =80;

  function logOutSeriesText(seriesDurations) {
    seriesDurations.array.forEach(seriesDurations => {
        console.log (seriesDurations.title);
        console.log(seriesDurations.days);
        console.log(seriesDurations.hours/24);
        totalDuration = totalDuration+seriesDurations.days+seriesDurations.hours/24;
       });
    const lifeTimeSpent=totalDuration/(80*365);
    console.log (lifeTimeSpent*100);

    
    
      

      

