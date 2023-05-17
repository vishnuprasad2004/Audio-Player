const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audioPlayer = document.getElementById("player");
const audioName = document.getElementById("audioName");
const playlist = document.getElementsByClassName("songName"); 

let idx = 0;

class Song {
    constructor(songName,location) {
        this.songName = songName;
        this.location = location;
    }
}

const songs = [
            new Song("Havana - Camila Cabello","songs\\Havana.mp3"),
            new Song("Blinding Lights - The Weeknd", "songs\\Blinding lights.mp3"),
            new Song("Heat Waves - Glass Animals", "songs\\Heat waves.mp3"),
            new Song("Unstoppable - Sia", "songs\\Sia - Unstoppable.mp3"),
            new Song("Snowman - Sia", "songs\\snowman.mp3"),
            new Song("Beggin' - Maneskin", "songs\\Beggin'.mp3"),
            new Song("Enemy - Imagine Dragons", "songs\\Enemy (with JID) - from the series Arcane League of Legends.mp3"),
            new Song("Infinity - Jaymes Young", "songs\\Infinity.mp3"),
            new Song("STAY - KID LAROI (feat. Justin Bieber)", "songs\\STAY (with Justin Bieber).mp3"),
            new Song("Stunnin' - Curtis Waters", "songs\\Stunnin' (feat. Harm Franklin).mp3"),
            new Song("Flowers - Miley Cyrus", "songs\\Miley Cyrus - Flowers.mp3"),
            new Song("Faded - Alan Walker", "songs\\Faded.mp3"),
            new Song("Senorita - Shawn Mendes Camila Cabello", "songs\\Shawn Mendes   Camila Cabello - Senorita   1.mp3"),
            new Song("As it Was - Harry Styles","songs\\As It Was.mp3"),
            new Song("Good 4 u - Olivia Rodrigo", "songs\\good 4 u.mp3")
            ];



// playlist.forEach((song) => song.addEventListener("click",()=>{
//     audioName.textContent = songs[this].songName;
//     audioPlayer.src = songs[0].location;
//     playlist[idx].style.backgroundColor = "#ffffff";
// }));

for (let i = 0; i < playlist.length; i++) {
    playlist[i].onclick = function() {
        
        audioName.textContent = songs[i].songName;
        audioPlayer.src = songs[i].location;
        playlist[i].style.backgroundColor = "#ffffff";

        idx = i;

        for(let j = 0; j<i; j++) {
            playlist[j].style.backgroundColor = "#ffffffb6";
        }

        for(let j = i+1; j<playlist.length; j++) {
            playlist[j].style.backgroundColor = "#ffffffb6";
        }

    }
    
}


audioName.textContent = songs[0].songName;
audioPlayer.src = songs[0].location;
playlist[idx].style.backgroundColor = "#ffffff";

window.addEventListener("keydown",util);

//previous button
prevBtn.addEventListener("click",previous);

//next button
nextBtn.addEventListener("click",next);

let timer = setTimeout(isEnded,1000);

function isEnded() {

    if(audioPlayer.ended() == true ) {
        next();
    }
}

function util(event) {
    console.log(event.key);
    switch(event.key) {
        // case " ":
        //     if(audioPlayer.paused == false) {
        //         audioPlayer.paused = true;
        //     }else {
        //         audioPlayer.paused = false;
        //     }
        //     break;

        case "ArrowRight":
            Song.next();
            break;

        case "ArrowLeft":
            Song.previous();
            break;

        default:
            break;
    }
}

function previous() {
    idx = idx - 1;
    if(idx < 0) {
        idx = songs.length-1;
        playlist[0].style.backgroundColor = "#ffffffb6";    
    }
    audioName.textContent = songs[idx].songName;
    audioPlayer.src = songs[idx].location;
    playlist[idx].style.backgroundColor = "#ffffff";
    if(idx+1 != songs.length) {
        playlist[idx+1].style.backgroundColor = "#ffffffb6";
    }
}

function next() {
    idx = idx + 1;
    if(idx >  songs.length-1) {
        idx = 0;
        playlist[songs.length-1].style.backgroundColor = "#ffffffb6";    
    }
    audioName.textContent = songs[idx].songName;
    audioPlayer.src = songs[idx].location;
    playlist[idx].style.backgroundColor = "#ffffff";
    if(idx-1 != -1) {
        playlist[idx-1].style.backgroundColor = "#ffffffb6";
    }
    
}
