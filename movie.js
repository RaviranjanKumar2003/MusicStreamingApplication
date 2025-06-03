// let movies = [
//     {
//         name: 'falcon and the winter soldier',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './movieImg/slider 2.PNG'
//     },
//     {
//         name: 'loki',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './movieImg/slider 1.PNG'
//     },
//     {
//         name: 'wanda vision',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './movieImg/slider 3.PNG'
//     },
//     {
//         name: 'raya and the last dragon',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './movieImg/slider 4.PNG'
//     },
//     {
//         name: 'luca',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './movieImg/slider 5.PNG'
//     },
//     {
//         name: 'luca',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './images/mov1.webp'
//     },
//     {
//         name: 'luca',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './images/mov2.avif'
//     },
//     {
//         name: 'luca',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './images/mov3.avif'
//     },
//     {
//         poster:'./images/mufasa.avif',
//         name: 'luca',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './images/mov4.avif'
//     },
//     {
//         name: 'luca',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './images/mov5.avif'
//     },
//     {
//         name: 'luca',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './images/mov6.webp'
//     },
//     {
//         name: 'luca',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './images/mov7.avif'
//     },
//     {
//         name: 'luca',
//         des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
//         image: './images/mov8.webp'
//     }
// ]

// const carousel = document.querySelector('.carousel')
// let sliders = []

// let slideIndex = 0;

// const createSlide = () => {
//     if(slideIndex >= movies.length) {
//         slideIndex = 0;
//     }

//     // creating DOM element
//     let slide = document.createElement('div');
//     let imgElement = document.createElement('img');
//     let posterElement = document.createElement('img');
//     let content = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');

//     // attaching all element
//     imgElement.appendChild(document.createTextNode(''));
//     // h1.appendChild(document.createTextNode(movies[slideIndex].name));
//     // p.appendChild(document.createTextNode(movies[slideIndex].des));
//     // content.appendChild(h1);
//     // content.appendChild(p);
//     slide.appendChild(content);
//     slide.appendChild(imgElement);
//     slide.appendChild(posterElement);
//     carousel.appendChild(slide);

//     // setting up image
//     imgElement.src = movies[slideIndex].image;
//     posterElement.src = movies[slideIndex].poster || movies[slideIndex].image;
//     slideIndex++;

//     // setting elements classname
//     slide.className = 'slider';
//     posterElement.className = 'poster-img';
//     // content.className = 'slide-content';
//     // h1.className = 'movie-title';
//     // p.className = 'movie-des';

//     sliders.push(slide);

//     // adding sliding effect
//     if(sliders.length > 1) {
//         sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 1)}% - ${30 * (sliders.length - 1)}px)`;
//     }
    
// }

// for(let i = 0; i < 3; i++) {
//     createSlide();
// }

// setInterval(() => {
//     createSlide();
// }, 3000);


// // video cards

// const videoCards = document.querySelectorAll('.video-card');

// videoCards.forEach(item => {
//     item.addEventListener('mouseover', () => {
//         let video = item.children[1];
//         video.play();
//     })
//     item.addEventListener('mouseleave', () => {
//         let video = item.children[1];
//         video.pause();
//     })
// })

// // cards sliders

// let cardContainers = document.querySelectorAll('.card-container');
// let preBtns = document.querySelectorAll('.pre-btn');
// let nxtBtns = document.querySelectorAll('.nxt-btn');

// cardContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtns[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth - 200;
//     })

//     preBtns[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth + 200;
//     })
// })