let li = document.querySelector('#list');
let div = document.querySelector('#fotosAlbum'); 
let ul = document.querySelector('#albums');
let img = document.querySelector('img');

async function getAlbums() {
  let dataArr = await fetch('https://jsonplaceholder.typicode.com/albums');
  let albums = await dataArr.json();
  ul.innerHTML = albums.map(data => {
  let li = `<li data = '${data.id}'>${data.title}</li>`;
  return li
  }).join('')
} 
getAlbums()

ul.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI'){
    getImg(e.target.getAttribute('data'))
  }
})
async function getImg(id) {
  let idLink = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
  let result = await idLink.json();
  div.innerHTML = result.map((data) => {
  let img = `<img src='${data.url}'width="300">`;
  return img;
  }).join('')
  div.appendChild(img);
}
