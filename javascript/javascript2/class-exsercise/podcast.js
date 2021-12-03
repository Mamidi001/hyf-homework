const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];

const podcastsUl = document.getElementById('favpodcast')
for(let i=0;i<podcasts.length;i++){
  const podcastLi = document.createElement('li') 
  const podcastsh1 = document.querySelector('h1')
  const podcast = podcasts[i]
  podcastsh1.innerHTML= podcast.name
  podcastLi.appendChild(podcastsh1)
  if(podcasts.imageUrl!== undefined){
    const image =document.createElement('img')
    image.setAttribute('src',podcasts.imageUrl)
    image.setAttribute('alt',`podcasts name :${podcast.name}`)

    podcastLi.appendChild(image)
  }
  


podcastsUl.appendChild(podcastLi)
  
}
console.log(podcasts);
