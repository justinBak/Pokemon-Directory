const container = document.querySelector('.container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// Loops through and prints out pokemon to webpage
for(i = 1; i < 152; ++i){
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');
  const newLabel = document.createElement('div');
  const label = document.createElement('span');
  newLabel.innerText = 'Hanno Region';
  label.innerText = `#${i}`;
  // Pulls the images api from the API url
  const newImg = document.createElement('img');
  newImg.src = `${baseURL}${i}.png`
  // Appends pokemon images & labels to container div
  container.appendChild(pokemon);
  pokemon.appendChild(newImg);
  pokemon.appendChild(newLabel);
  pokemon.appendChild(label);
}
