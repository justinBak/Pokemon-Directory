// function add(x,y){
// 	if (typeof x !== 'number' || typeof y !== 'number'){
//   	return false;
//   }
//   let sum = x + y;
//   return sum;
// }

// add(1, 'a');

// To ADD to HTML Doc
// const button = document.createElement('button');
// button.innerText = 'Hey!';
// const container = document.querySelector('.container');
// document.body.appendChild(button);

const container = document.querySelector('.container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for(i = 1; i < 800; ++i){
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');
  const newLabel = document.createElement('div');
  const label = document.createElement('span');
  newLabel.innerText = 'Hanno Region';
  label.innerText = `#${i}`;
  const newImg = document.createElement('img');
  newImg.src = `${baseURL}${i}.png`
  container.appendChild(pokemon);
  pokemon.appendChild(newImg);
  pokemon.appendChild(newLabel);
  pokemon.appendChild(label);
}