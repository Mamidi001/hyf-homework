export const ShiftListItem=(props)=>{
    const {employeeName, startTime, endTime}= props;
        const endInMinutes=endTime.split(":");
        const totalEndMinutes=Number(endInMinutes[0])*60+Number(endInMinutes[1]);
        const startInMinutes=startTime.split(":");
        const totalStartMinutes=Number(startInMinutes[0])*60+Number(startInMinutes[1]);
        const workingMinutes=totalEndMinutes-totalStartMinutes;
        const hours=Math.floor(workingMinutes/60);
        const minutes=workingMinutes % 60;
      const totalWorkingTime= hours + ":" + minutes;
     
      return(
        <>
        <ul className="display-emp-info">
          <li>{employeeName}</li>
          <li>{startTime}</li>
          <li>{endTime}</li>
          <li>{totalWorkingTime}</li>
          <li>{150*workingMinutes/60}</li>
        </ul>
        </>
      )
      };