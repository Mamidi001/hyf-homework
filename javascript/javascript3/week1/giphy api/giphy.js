
//const api = cl8s8TrgjROxPoOxS8Ff26vYeCndqz45;
const btnForm = document.querySelector('.btnForm');
const inputBox = document.querySelector('.searchText');
const numOfGif = document.querySelector('.numOfGif');
const button = document.querySelector('.searchBtn');


   btnForm.addEventListener('submit', (event)=>{
      event.preventDefault();
      console.log('is it working??');

      const inputBoxValue = inputBox.value;
      const gifNumberLimit = numOfGif.value;
      //const toNumber = parseInt( gifNumberLimit);
      console.log(inputBoxValue);
      console.log(inputBoxValue);
      fetch(`https://api.giphy.com/v1/gifs/search?q=${inputBoxValue}&limit=${gifNumberLimit}&api_key=cl8s8TrgjROxPoOxS8Ff26vYeCndqz45`)
  .then(response=>response.json())
  .then(giphyData =>{
    console.log(giphyData);
    let gifImageDisplay = document.querySelector('.displayGif');
    gifImageDisplay .innerHTML= " ";
    for(let i = 0; i< giphyData.data.length; i++){
      let url = giphyData.data[i].images.downsized_medium.url;
        let imge = document.createElement('img');
        imge.src = url;
        //imge.style.width = '10rem';
        //imge.style.height = '10rem';
        gifImageDisplay.appendChild(imge);

    }
  });
   });
// javascript to json


const user = {
  name : 'Swetha',
  age : 34,
  gender : 'Female',
  nationality : 'Indian',
};
const userJsonString = JSON.stringify(user);
console.log(userJsonString);
  