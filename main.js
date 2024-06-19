// let cellette = document.getElementsByClassName(`celle`);
// console.log(cellette);

let contImg = document.getElementById(`container-img`);

// array con immagini, titolo e testo
const images = [ 
    { 
      image: 'img/01.webp', 
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    },
    { image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];
// console.log(images);

// Milestone 1: utilizzo un forEach per il markup statico, inserisco l'immagine grande
images.forEach((img) =>{
    console.log(img);
    // cellette.innerHTML += img.image;
    contImg.innerHTML += `<div class="celle">
    <img src="${img.image}" alt=""> </div>`
})



{/* <div class="celle">
                <img src="" alt="">
            </div> */}

// milestone 2: creo il carosello
const imgCella = document.getElementsByClassName(`celle`);

let activeCella = 0;

imgCella[activeCella].classList.add("active");

const right = document.querySelector(".destra");
const left = document.querySelector(".sinistra");

// aggiungo l'event listener
right.addEventListener("click", function(){
    if (activeCella < images.length - 1) {
        imgCella[activeCella].classList.remove("active");
        activeCella++;
        imgCella[activeCella].classList.add("active");
    }
    else{
        imgCella[activeCella].classList.remove("active");
        activeCella = 0;
        imgCella[activeCella].classList.add("active");
    }
})

left.addEventListener("click", function(){
    if (activeCella < images.length - 1) {
        imgCella[activeCella].classList.remove("active");
        activeCella--;
        imgCella[activeCella].classList.add("active");
    }
    else{
        imgCella[activeCella].classList.remove("active");
        activeCella = images.length - 1;
        imgCella[activeCella].classList.add("active");
    }
})
