console.log("welcome to Tunester ");
let audioElement=new Audio('songs/comedy(spyfamily).mp3');
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let mastersongname=document.getElementById('mastersongname');
let bottombar=document.getElementById('bottombar');
let gif=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName("songitem"));

let songs=[
    {songName: "Comedy",filePath:"songs/comedy(spyfamily).mp3", coverPath: "covers/song_logo.jpg"},
    {songName: "Dhat teri Ki",filePath:"songs/dhatteriki.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Dhoonde Akhiyaan meri",filePath:"songs/dhoondeakhiyaan.mp3", coverPath: "covers/3.jpeg"},
    {songName: "O maahi",filePath:"songs/omaahi.mp3", coverPath: "covers/4.jpeg"},
    {songName: "Yahin hoon main",filePath:"songs/yahinhoonmai.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Raat Bhar",filePath:"songs/raatbhar.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Tu Meri",filePath:"songs/tumeri.mp3", coverPath: "covers/7.jpeg"},
    {songName: "White Brown Black",filePath:"songs/whitebrownblack.mp3", coverPath: "covers/8.jpeg"},
    {songName: "One love",filePath:"songs/onelove.mp3", coverPath: "covers/9.jpeg"},

]

songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;

})
 //audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    bottombar.value=progress;
})
bottombar.addEventListener('change',()=>{
    audioElement.currentTime =bottombar.value * audioElement.duration/100;
})
const makeallplays=()=>{
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
   
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })

}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex}.mp3`;
        //after songindex changes put mastersongname
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

    }
    )

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8)
    songIndex=0;
    else
    songIndex+=1;
    audioElement.src=`songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    songIndex=8;
    else
    songIndex-=1;
    audioElement.src=`songs/${songIndex}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})