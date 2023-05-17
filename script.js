const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audioPlayer = document.getElementById("player");
const audioName = document.getElementById("audioName");
const playlist = document.getElementsByClassName("songName"); 

let audioNames = ["Havana - Camila Cabello",      
                "Blinding Lights - The Weeknd",  
                "Heat Waves - Glass Animals ",  
                "Unstoppable - Sia", 
                "Snowman - Sia", 
                "Beggin' - Maneskin", 
                "Enemy - Imagine Dragons", 
                "Infinity - Jaymes Young", 
                "STAY - KID LAROI (feat. Justin Bieber)",  
                "Stunnin' - Curtis Waters",
                "Flowers - Miley Cyrus",
                "Faded - Alan Walker",
                "Senorita - Shawn Mendes Camila Cabello",
                "As it Was - Harry Styles"];    


let audioFiles = ["Havana.mp3",
                "Blinding lights.mp3",
                "Heat waves.mp3",
                "Sia - Unstoppable.mp3",
                "snowman.mp3",
                "Beggin'.mp3",
                "Enemy (with JID) - from the series Arcane League of Legends.mp3",//6
                "Infinity.mp3",
                "STAY (with Justin Bieber).mp3",
                "Stunnin' (feat. Harm Franklin).mp3", 
                "Miley Cyrus - Flowers.mp3",
                "Faded.mp3",
                "Shawn Mendes   Camila Cabello - Senorita   1.mp3",
                "As It Was.mp3"];


let idx = 0;

audioName.textContent = audioNames[0];
audioPlayer.src = audioFiles[0];
playlist[idx].style.backgroundColor = "#ffffff";

window.addEventListener("keydown",util);

//previous button
prevBtn.addEventListener("click",previous);

//next button
nextBtn.addEventListener("click",next);

if(audioPlayer.ended == true ) {
    next();
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

        case "ArrowDown":
            next();
            break;

        case "ArrowUp":
            previous();
            break;

        default:
            break;
    }
}


function previous() {
    idx = idx - 1;
    if(idx < 0) {
        idx = audioFiles.length-1;
        playlist[0].style.backgroundColor = "#ffffffb6";    
    }
    audioName.textContent = audioNames[idx];
    audioPlayer.src = audioFiles[idx];
    playlist[idx].style.backgroundColor = "#ffffff";
    if(idx+1 != audioFiles.length) {
        playlist[idx+1].style.backgroundColor = "#ffffffb6";
    }
    
    
}


function next() {
    idx = idx + 1;
    if(idx >  audioFiles.length-1) {
        idx = 0;
        playlist[audioFiles.length-1].style.backgroundColor = "#ffffffb6";    
    }
    audioName.textContent = audioNames[idx];
    audioPlayer.src = audioFiles[idx];
    playlist[idx].style.backgroundColor = "#ffffff";
    if(idx-1 != -1) {
        playlist[idx-1].style.backgroundColor = "#ffffffb6";
    }
    
    
}
