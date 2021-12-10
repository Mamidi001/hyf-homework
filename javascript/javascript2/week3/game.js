  
  let countS = 0;
  let countL = 0;
  const caution = document.getElementById('caution');
  const para1 = document.getElementById('para1');
  const para2 = document.getElementById('para2');
  const startButton = document.getElementById('startBtn');
  const inputText = document.getElementById('inputId');

  startButton.addEventListener('click',(e)=>{
      const value = document.getElementById('inputId').value;
      console.log(value);// to record value of the input button
  
  setTimeout(() => {
     winner()
  }, value*1000);
 
 function winner(){
     
     if(countS>countL){
        caution.innerHTML= 'S is Winner' 
     }
     else if(countL>countS){
        caution.innerHTML= 'L is Winner'
     }
     else{caution.innerHTML= 'its a draw'}
     window.removeEventListener('keydown', countingSL)
 }

 //when any key is pressed
 
  window.addEventListener('keydown', countingSL)
  function countingSL(event){ // here callback function came
    if(event.key ==='s'){
        countS = countS +1
        para1.innerHTML = countS
        console.log(event.key);
     }
     else if (event.key ==='l'){
         countL = countL +1
         para2.innerHTML = countL
         console.log(event.key);
     }
     else{caution.innerHTML= 'press only S and L keys'}
 };
}); 
 const restart = document.getElementById('restart')
 restart.addEventListener('click',()=>{
   document.location.reload();
 })

  












 
 




 


 
  
 




     
     
 