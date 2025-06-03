/*============================ LOGIN/LOGOUT START =============================*/
// Register Function
function registerUser() {
    const email = document.querySelector('.registerEmail')?.value.trim();
    const password = document.querySelector('.registerPasword')?.value;
    const name = document.querySelector('.registerUserName')?.value.trim();
    const registerUserImg=document.querySelector('.registerUserImg');
    const file = registerUserImg?.files[0];

    if (!email || !password || !name || !file) {
        alert("Please fill out all fields.");
        return;
    }
    

    const reader = new FileReader();
    reader.onload = function (e) {
        const base64Img = e.target.result;
        localStorage.setItem('registeredEmail', email);
        localStorage.setItem('registeredPassword', password);
        localStorage.setItem('registeredUserName', name);
        localStorage.setItem('registerUserImg', base64Img);
        alert("Registration successful!");
        window.location.href = "./logIn.html";
    };
    reader.readAsDataURL(file);
}

// Login Function
function loginFun() {
    const userEmail = document.querySelector('.userEmail')?.value.trim();
    const userPassword = document.querySelector('.userPassword')?.value;

    const savedEmail = localStorage.getItem('registeredEmail');
    const savedPassword = localStorage.getItem('registeredPassword');
    const savedName = localStorage.getItem('registeredUserName');
    const savedImg=localStorage.getItem('registerUserImg');

    if (!userEmail || !userPassword) {
        alert("Please enter both email and password.");
        return;
    }

    if (userEmail === savedEmail && userPassword === savedPassword) {
        alert("Login successful!");
        localStorage.setItem('isLoggedIn', 'true');
        window.open("/music.html");
        window.remove("./logIn.html");
        // window.location.href = "/index.html";



    } else {
        alert("Invalid email or password.");
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const name = localStorage.getItem('registeredUserName');
    const img=localStorage.getItem('registerUserImg');
    const profileName = document.querySelector('.profileName');
    const profileName2=document.querySelector('.profileName2');
    const exitLogin = document.querySelector('.exitLogin');
    const loginImg=document.querySelector('.loginImg');
    const loginImg2=document.querySelector('.loginImg2');

    if (isLoggedIn === 'true' && name && img && profileName && exitLogin && profileName2) {
        profileName.textContent = name;
        profileName2.textContent=name;
        exitLogin.textContent = "Logout";
        loginImg.innerHTML = `<img src="${img}" alt="User Image" class="h-full w-full rounded-full " />`;
        loginImg2.innerHTML = `<img src="${img}" alt="User Image" class="h-full w-full rounded-full " />`;

       
    }
    exitLogin.addEventListener("click", logoutUser);
});

function logoutUser() {
    localStorage.clear();
    // window.open("/index.html"); 
    // window.location.href = "/index.html";
}
/*============================================ LOGIN/LOGOUT END =============================*/

/*============= SHOW & HIDE SIDEBAR ===================*/

const sidebarBtn=document.querySelector(".sidebarBtn");
const sidebarBtn_i=document.querySelector(".sidebarBtn i");
const sidebar=document.querySelector("aside");

const logo=document.querySelector(".logo");
const smallLogo=document.querySelector(".smallLogo");
const musicMenu_h2=document.querySelectorAll(".musicMenu h2");
const musicMenu_p=document.querySelectorAll(".musicMenu ul li a p");
const musicMenu_li=document.querySelectorAll(".musicMenu ul li");


sidebarBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('sidebarHide');
    sidebarBtn_i.classList.toggle('toggleSidebarBtn');
    logo.classList.toggle('hideElement');
    smallLogo.classList.toggle('showElement');
    musicMenu_h2.forEach(h2 => h2.classList.toggle('hideElement'));
    musicMenu_p.forEach(p => p.classList.toggle('hideElement'));
    musicMenu_li.forEach(li => li.classList.toggle('menu_gap'));
});
/*=========================== SHOW SIDEBAR IN SMALL SCREEN ==================*/ 

let bar=document.querySelector('.bars');
bar.addEventListener('click',()=>{
    sidebar.classList.toggle('show_aside');
});


/*=========================== USER DROPDOWN MENU ===============================*/ 

const userMenuBtn=document.querySelector('.userLoginWrapper');
const userDropdown=document.querySelector('.userWrapperDropdown');

userMenuBtn.addEventListener('click', ()=>{
    userDropdown.classList.toggle('showUserDropdown');
});


const profileDivDropdown=document.querySelector('.profileDivDropdown');
let accessProfile = document.querySelector('.accessProfile');
let profileBackX=document.querySelector('.profileBackX');

accessProfile.addEventListener('click', () => {
    profileDivDropdown.classList.add('showProfileDropdown');
});
profileBackX.addEventListener('click',()=>{
    profileDivDropdown.classList.remove('showProfileDropdown');
});

/*=========================== BOTTOM CONTAINER MENU ======================*/ 


let bottom_toggle_btn=document.querySelector('.bottumContainer_Btn');
let bottom_toggle_icon=document.querySelector('.bottumContainer_Btn i');
let bottumContainer=document.querySelector('.bottumContainer');

bottom_toggle_btn.addEventListener('click',()=>{
    bottumContainer.classList.toggle('show_bottom_box');
    bottom_toggle_icon.classList.toggle('icon_rotate');
});

/*========================== QUEUE DROPDOWN BOX ==================*/


let musicBottomBtn=document.querySelector('.musicBottomBtn');
let queuDropdownBox=document.querySelector('.queueDropdownBox');
let queueBtn=document.querySelector('.queueBtn');
let productList=document.querySelector('.productList');

musicBottomBtn.addEventListener('click',()=>{
    queuDropdownBox.classList.add('show_queue_box');
});
queueBtn.addEventListener('click',()=>{
    queuDropdownBox.classList.remove('show_queue_box');
});


/*======== Add To Queue =======*/
function addToQueue(id) {
    if (!checkoutList[id]) {
        checkoutList[id] = { ...songs[id], quantity: 1 };
    } else {
        checkoutList[id].quantity += 1;
    }
    reloadQueue();
}


function reloadQueue() {
    productList.innerHTML = "";

    Object.keys(checkoutList).forEach((key) => {
        const item = checkoutList[key];
        if (item) {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${item.poster}" alt="Album art for ${item.songName}">
                <div class="songDet flex flex-col">
                    ${item.songName}
                </div>
            `;
            productList.appendChild(li);
        }
    });
}


/*=======================BOTTOM START,  PLAT PAUSE NEXT PREV OPTION =========================*/ 

let playPrev=document.querySelector('.musicOptionPrev');
let playNext=document.querySelector('.musicOptionNext');
let shuffleMode=document.querySelector('.shuffleMode');
let repeatMode=document.querySelector('.repeatMode');


playNext.addEventListener('click',()=>{
    playNext.classList.toggle('music_play_btn_active');
});
playPrev.addEventListener('click',()=>{
    playPrev.classList.toggle('music_play_btn_active');
});
shuffleMode.addEventListener('click',()=>{
    shuffleMode.classList.toggle('music_play_btn_active');
});
repeatMode.addEventListener('click',()=>{
    repeatMode.classList.toggle('music_play_btn_active');
});

/*============================ ON OFF VPLUME OPTION =======================*/ 


let musicVolumeImg = document.querySelector('.musicVolume img');

musicVolumeImg.addEventListener('click', () => {
    let volumeMute = 'volume-mute.png';  
    let volumeOn = './images/volume.svg'; 

    if (musicVolumeImg.src.includes(volumeMute)) {
        musicVolumeImg.src = volumeOn;
    } 
    else {
        musicVolumeImg.src = './images/volume-mute.png';
    }
});


/*====================== SONG CONTAINAR OFFLINE ======================*/


const songs = [
    {
        id: 1,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s1.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 2,
        songName: `<h2>Desired Games</h2>
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s6.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 3,
        songName: `<h2>Don't let me down</h2>
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s3.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 4,
        songName: `<h2>Dark Alley Acoustic</h2>
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s4.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 5,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s5.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 6,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s6.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 7,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s1.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 8,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s2.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 9,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s5.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 10,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s4.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 11,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s2.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 12,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s1.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 13,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s4.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 14,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s6.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 15,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s1.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 16,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s3.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 17,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s6.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 18,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s4.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 19,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s1.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 20,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s6.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 21,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s5.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 22,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s3.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 23,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s1.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 24,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s6.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 25,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s5.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 26,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s4.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 27,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s1.jpg",
        trackTimeMillis: 215000
    },
    {
        id: 28,
        songName: `<h2>Walking Promises</h2>                        
        <p>Harry Jackson, Virginia Harris</p>
        `,
        poster:"./images/s6.jpg",
        trackTimeMillis: 215000
    }
]

const music = new Audio('./audio/mp3-2.mp3');
let checkoutList = {};


const songsWrapper = document.querySelector('.songsWrapper1');
const audioPlayer = document.getElementById('audioPlayer');

songsWrapper.innerHTML = ''; // Clear existing content

songs.forEach((song, index) => {
  const songCol = document.createElement('div');
  songCol.classList.add('songCol');

  // Calculate duration in mm:ss format
  const totalSeconds = Math.floor(song.trackTimeMillis / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const duration = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  songCol.innerHTML = `
    <div class="songInfo flex items-center gap-[20px] relative">
      <img src="./images/play_songlist.svg" class="playImg cursor-pointer" data-preview-url="${song.previewUrl}" id="${index + 1}">
      <span>${String(index + 1).padStart(2, '0')}</span>
      <div class="songBox flex items-center gap-[10px]">
        <img src="${song.poster}" alt="Album art for ${song.songName}">
        <div class="songDet flex flex-col">
          ${song.songName}
        </div>
      </div>
      <div class="songIconTime flex items-center gap-[40px]">
        <i class="fa-solid fa-heart"></i>
        <p class="musicTime">${duration}</p>
        <div class="songOption relative">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <div class="songOptionDropdown">
            <div class="songOptionBox">
              <span class="icon favOptionIcon"></span>
              <h3>Favourites</h3>
            </div>
            <div class="songOptionBox">
              <span class="icon downloadptionIcon"></span>
              <h3>Download Now</h3>
            </div>
            <div class="songOptionBox" onclick="addToQueue(${index})">
              <span class="icon addPlOptionIcon"></span>
              <h3>Add To Playlist</h3>
            </div>
            <div class="songOptionBox">
              <span class="icon shareOptionIcon"></span>
              <h3>Share</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  songsWrapper.appendChild(songCol);
});

let currentSongIndex = 0;

Array.from(document.getElementsByClassName('songBox')).forEach((e, i) => {
    
    if (songs[i]) {
        e.getElementsByTagName('img')[0].src = songs[i].poster;
        e.getElementsByClassName('songDet')[0].innerHTML = songs[i].songName;
        e.addEventListener('click', () => {
            playSong(i);
        });
    }

});

const playIcon = document.querySelector('#masterPlay i'); 

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.add('playing');
        playIcon.classList.replace('fa-play', 'fa-pause'); 
    } else {
        music.pause();
        masterPlay.classList.remove('playing');
        playIcon.classList.replace('fa-pause', 'fa-play');
    }
});

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songCol')).forEach((el)=>{
        el.style.background = 'rgb(23,37,51)';
    })
}


let masterPoster = document.getElementById('masterPoster');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playImg')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        let index = el.target.id;
        music.src = `./audio/mp3-${index}.mp3`;
        masterPoster.src = `./images/s${index}.jpg`;
        playIcon.classList.replace('fa-play', 'fa-pause'); 

        music.play();

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });
        
        songTitles.forEach(els =>{
            let {songName} = els;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songCol'))[index-1].style.background = 'var(--theme-color)';
    });
});




let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');

let seek = document.getElementById('seek');
let dot = document.getElementById('dot');
music.addEventListener('timeupdate', ()=>{
    let musicCurr = music.currentTime;
    let musicDur = music.duration;
    
    
    let min1 = Math.floor(musicDur / 60);
    let sec1 = Math.floor(musicDur % 60);

    // console.log(sec1);
     if(sec1 <10){
        sec1 = `0${sec1}`;
     }
     
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(musicCurr / 60);
    let sec2 = Math.floor(musicCurr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
     }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((musicCurr / musicDur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    seek.style.width = `${seekbar}%`;
    dot.style.marginLeft = `${seekbar}%`;

}) ;

/*============================ SONG OPTION DROPDOWN MENU ==================================*/ 

const songOption=document.querySelectorAll('.songOption');
console.log(songOption);


songOption.forEach(option =>{
    option.addEventListener('click', function(){
        document.querySelectorAll('.songOptionDropdown').forEach(dropdown =>{
            if(dropdown !== this.querySelector('.songOptionDropdown')){
                dropdown.classList.remove('show_song_option');
            }
         });
         const dropdown=this.querySelector('.songOptionDropdown');
         dropdown.classList.toggle('show_song_option');
    });
});

/*============================ SONG OPTION DROPDOWN MENU END ==================================*/ 


/*====================== SONG CONTAINAR API FETCH ======================*/







/*================================= SHOW SONGS TAB LIST ========================*/ 
let tab1=document.querySelector('.tab1');
let tab2=document.querySelector('.tab2');
let tab3=document.querySelector('.tab3');
let songsWrapper1=document.querySelector('.songsWrapper1');
let songsWrapper2=document.querySelector('.songsWrapper2');
let songsWrapper3=document.querySelector('.songsWrapper3');

function setActiveTab(tab){
    tab1.classList.remove('activeTabList');
    tab2.classList.remove('activeTabList');
    tab3.classList.remove('activeTabList');

    tab1.classList.remove('activeSongList');
    tab2.classList.remove('activeSongList');
    tab3.classList.remove('activeSongList');

    tab.classList.add('activeTabList');
    tab.classList.add('activeSongList');

}

tab1.addEventListener('click', ()=>{
    setActiveTab(tab1);
    songsWrapper1.style.display="flex"
});
tab2.addEventListener('click', ()=>{
    setActiveTab(tab2);
});
tab3.addEventListener('click', ()=>{
    setActiveTab(tab3);
    
});














