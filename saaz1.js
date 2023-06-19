console.log("welcome to Saaz");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "sirivennala", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "pournami", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "24", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "barsore", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
]
songs.forEach((element, i) => {
    console.log(element, i);
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    // element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }

    
})

audioElement.addEventListener('timeupdate', ()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
   
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100 ;
   

})
const makeAllPlays = ()=>{

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=3){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

})
