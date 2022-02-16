const movies = fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(response=>response.json())
   .then(data => data.map(badmovies => badmovies).filter(movieList => movieList.rating < 6 && movieList.year >= 2000));
   console.log(movies);

 // async method 

 async function asyncAwait(){
   try{
     const data = await fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json');
     const movie = await data.json()
     const badMovies = await movie.map(badMovie=>badMovie).filter(badMovieList=>
      badMovieList.rating<4 && badMovieList.year>=2000)
     console.log(badMovies);
     console.log(movie);
   } catch(error){
     console.log(error);
   }
 }
 asyncAwait()

// task 2 Promise that resolves after set time
 
 function resolves(resolveAfter){
   return new Promise((resolve)=>{
     setTimeout(() => {
       resolve()
     },resolveAfter*1000);
    });
  }
     resolves(8).then(() => {
      console.log("I am called asynchronously"); // logged out after 8 seconds
    });

// Promise that resolves after set time asynch method

   async function resolves(resolveAfter){
     return await new Promise((resolve) => {
       setTimeout(() => {
         resolve()
       }, resolveAfter);  
     })
   };
   resolves(8).then(() => {
    console.log("I am called asynchronously"); // logged out after 8 seconds
  });
   
  //Rewrite settimeout and geo location & position

  function setTimeoutPromise(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
      })
    }
     setTimeoutPromise(3000).then(() => {
          console.log("Called after 3 seconds");
      });

  
     function getCurrentLocation(){
        return new Promise((resolve,reject)=>
        navigator.geolocation.getCurrentPosition(resolve,reject));}
    getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.warn(error);
    });  

// 3steps task with .then and async

     setTimeout(() => {
     console.log('beore applying then')
     fetch('http://api.open-notify.org/astros.json')
     .then(response => response.json())
     .then(astroData => console.log(astroData))
     .catch(error=> console.log(error));
   }, 4000);
  
     
   async function asyncMethod(){
     try{
     const fetch = await fetch('http://api.open-notify.org/astros.json')
     const response = await response.json()
     const astroData = await console.log(astroData);
     return astroData;
   }catch(error){console.log(error);
  }
}

  setTimeout(() => console.log('waited 2 sec'),2000);
  fetch('http://api.open-notify.org/astros.json')
  .then(response => response.json())
  .then(astroData => console.log(astroData))
  
  
  

   

   
//method 1 rewrite task

  /*const setTimeoutPromise = delay =>
  new Promise(resolve => setTimeout(resolve, delay));
  setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
  });*/

 // method 2

   


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*fetch('https://api.giphy.com/v1/gifs/search?q=$&limit=&api_key=cl8s8TrgjROxPoOxS8Ff26vYeCndqz45')
  .then (response=> response.json())
    .then (giphyData=> {
      setTimeout(() => {
        console.log(giphyData);
        }, 3000);
      })
        .catch(error => console.log(error));
        
        async function delay(){
           await new Promise(resolve=> setTimeout(resolve,5000));
           console.log('got it');
}

    
async function giveSomeName(){
  const fetchResponse = await fetch('https://api.giphy.com/v1/gifs/search?q=$&limit=&api_key=cl8s8TrgjROxPoOxS8Ff26vYeCndqz45');
  const response = await fetchResponse.json();
  setTimeout(() => {
    console.log(response);
    }, 3000);
}
giveSomeName()*/
    
  
    
  

    
    
 
  