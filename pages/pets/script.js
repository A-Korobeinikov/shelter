import { PETS } from "../../pet-data.js";

const swiperWrapper = document.querySelector('#swiper-wrapper');

function cardCreator({imgSrc, petName, idPet}) {
  const cardPetEl = document.createElement('div');
  cardPetEl.classList.add('card-pet', 'swiper-slide');
  cardPetEl.setAttribute('id', idPet);
  const petImageWrap = document.createElement('div');
  petImageWrap.classList.add('pet-image');
  const petImageEl = document.createElement('img');
  petImageEl.setAttribute('src', `../../${imgSrc}`)
  const petLearnWrap = document.createElement('div')
  petLearnWrap.classList.add('learn-more')
  const petNameEl = document.createElement('div');
  petNameEl.classList.add('pet-name');
  petNameEl.innerText = petName;
  const petMoreEl = document.createElement('div');
  petMoreEl.classList.add('pet-more');
  const petHrefEl = document.createElement('a');
  petHrefEl.classList.add('more');
  const petHrefTitle = document.createElement('span');
  petHrefTitle.classList.add('more-title');
  petHrefTitle.innerText = 'Learn more';

    cardPetEl.append(petImageWrap);
    petImageWrap.append(petImageEl);
    cardPetEl.append(petLearnWrap)
    petLearnWrap.append(petNameEl);
    petLearnWrap.append(petMoreEl);
    petMoreEl.append(petHrefEl);
    petHrefEl.append(petHrefTitle)

    cardPetEl.addEventListener('click', popupOpen)
    return cardPetEl
}
// const  newPets = []
// for(let i=3;  i <= PETS.length; i++) {
//     newPets.push(...PETS)
// }

const petsCardElements = PETS.map(({img, name, id})=> cardCreator({imgSrc: img, petName: name, idPet: id}));

const petsCardElements2 = PETS.map(({img, name, id})=> cardCreator({imgSrc: img, petName: name, idPet: id}));
petsCardElements2.sort(function(){ return 0.5-Math.random() });
const petsCardElements3 = PETS.map(({img, name, id})=> cardCreator({imgSrc: img, petName: name, idPet: id}));
petsCardElements3.sort(function(){ return 0.5-Math.random() });
const petsCardElements4 = PETS.map(({img, name, id})=> cardCreator({imgSrc: img, petName: name, idPet: id}));
petsCardElements4.sort(function(){ return 0.5-Math.random() });
const petsCardElements5 = PETS.map(({img, name, id})=> cardCreator({imgSrc: img, petName: name, idPet: id}));
petsCardElements5.sort(function(){ return 0.5-Math.random() });
const petsCardElements6 = PETS.map(({img, name, id})=> cardCreator({imgSrc: img, petName: name, idPet: id}));
petsCardElements6.sort(function(){ return 0.5-Math.random() });


   
 swiperWrapper.append(...petsCardElements2, ...petsCardElements, ...petsCardElements3, ...petsCardElements4, ...petsCardElements5, ...petsCardElements6);


 // PopUp
const popupPetsEl = document.querySelector('.popup-pets')
const popupPetsClose = document.querySelector('.popup-mask')
const popupPetsCloseBtn = document.querySelector('.popup-close')
//open popup
function popupOpen(event) {  
  const idPet = event.currentTarget.id;
 if(idPet) {
  popupPetsEl.classList.add('active-popup') ;
  setContentsPets(idPet)
  disableBodyScroll({savePosition: true}); 
 }
}

//Закрывает popup
function popupClose(event) {
  popupPetsEl.classList.remove('active-popup')
  enableBodyScroll()
}
popupPetsClose.addEventListener('click', popupClose)
popupPetsCloseBtn.addEventListener('click', popupClose)
popupPetsClose.onmouseover = function(event) {
  let target = event.target;  
  if(target) {
    popupPetsCloseBtn.style.background = '#fddcc4';
  }
}
popupPetsClose.onmouseout = function(event) {
  let target = event.target;  
  if(target) {
    popupPetsCloseBtn.style.background = '';
  }
}


// функции убирают и добавляют скролл

export const enableBodyScroll = () => {
  if (document.readyState === 'complete') {
    document.body.style.position = '';
    document.body.style.overflowY = '';
    document.body.style.left = '';
    document.body.style.right = '';
    if (document.body.style.marginTop) {
      const scrollTop = -parseInt(document.body.style.marginTop, 10);
      document.body.style.marginTop = '';
      window.scrollTo(window.pageXOffset, scrollTop);
    }
  } else {
    window.addEventListener('load', enableBodyScroll);
  }
};

export const disableBodyScroll = ({ savePosition = false } = {}) => {
  if (document.readyState === 'complete') {
    if (document.body.scrollHeight > window.innerHeight) {
      if (savePosition) document.body.style.marginTop = `-${window.pageYOffset}px`;
      document.body.style.position = 'fixed';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflowY = 'scroll';
    }
  } else {
    window.addEventListener('load', () => disableBodyScroll({ savePosition }));
  }
};



// изменение карточки попап
const popupContainer = document.querySelector('#popup-container');
const popupImg = popupContainer.querySelector('img');
const popupName = popupContainer.querySelector('.popup-title');
const popupBreed = popupContainer.querySelector('.popup-subtitle');
const popupDesc = popupContainer.querySelector('.popup-text');


const popupAbout = popupContainer.querySelector('.popup-about');
const popupAge = popupAbout.querySelector('.desc-age');
const popupInoculations = popupAbout.querySelector('.desc-inoculations');
const popupDiseases = popupAbout.querySelector('.desc-diseases');
const popupParasites = popupAbout.querySelector('.desc-parasites');

 

function setContentsPets(idPet) {
  const pet = PETS.find(el => el.id === idPet) || {}
  const imgSrc = pet.img;
  popupImg.setAttribute('src', `../../${imgSrc}`);
  popupName.innerText = pet.name;
  popupBreed.innerText = pet.breed;
  popupDesc.innerText = pet.description;
  popupAge.innerHTML = `<span class="text-bold">Age:&#160</span> ${pet.age}`;
  popupInoculations.innerHTML =`<span class="text-bold">Inoculations:&#160</span> ${pet.inoculations}` ;
  popupDiseases.innerHTML=`<span class="text-bold">Diseases:&#160</span> ${pet.diseases}`;
  popupParasites.innerHTML =`<span class="text-bold">Parasites:&#160</span> ${pet.parasites}` ;
  
}
