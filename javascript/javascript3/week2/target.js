function stepByStep(){
  console.log('ready to move');
moveElement(document.querySelector("ul.marks li:nth-child(1)"), { x: 20, y: 300 })
.then(() => {console.log("Red Element has been moved");})
.then(()=> { moveElement(document.querySelector("ul.marks li:nth-child(2)"), { x: 400, y: 300 })
  .then(() => {console.log("Blue Element has been moved");})
.then(()=>{moveElement(document.querySelector("ul.marks li:nth-child(3)"), { x: 400, y: 20 })
.then(() => {
  console.log("Green Element has been moved");})  

});
})
};
stepByStep();

//all at once
 async function allAtOnce(){
   try{
    const promise1 =  moveElement(document.querySelector(".marks li:nth-child(1)"), { x: 20, y: 300 })
    const promise2 =  moveElement(document.querySelector(".marks li:nth-child(2)"), { x: 400, y: 300 })
    const promise3 =  moveElement(document.querySelector(".marks li:nth-child(3)"), { x: 400, y: 20 })
    await Promise.all([promise1, promise2, promise3])
      console.log('all colors reached the destination');
   } catch(error){
     console.log(error);
   }
 }
 allAtOnce()