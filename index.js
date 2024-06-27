// let pages;
// //let pages = 210;
// pages = 210;
//  pagesBook = 256;
// console.log(pages + pagesBook)
// note = "число страниц";
// console.log(note,pages + pagesBook)

const buttonPlay = document.querySelector(".button_play");
console.log(buttonPlay);
const audio  =  document.querySelector('.audio');
console.log(audio);

buttonPlay.addEventListener('click', ()=>{
    if (audio.paused){
        audio.src = './track.mp3';
        audio.play();
        audio.valume = 0.2;
        console.log('play');
    }else {
        audio.pause();
        console.log('pause');
    }
})

