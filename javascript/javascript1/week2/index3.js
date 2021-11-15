function clothesToWear(temperature){
   if(temperature<=10){
       console.log ("wear fleece jacket");
    }
       else if(temperature>15 && temperature<=20){
           console.log('wear sweatshirt');
       }
       else if (temperature>20){
           console.log('wear tshirt and short');
       }
       else{
           console.log('wear as you wish')
       }
}
clothesToWear(5);
clothesToWear(25);
