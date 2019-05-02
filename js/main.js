/*----- constants -----*/
class Song {
    constructor(name, artist, lyrics, correctAnswer,[wa1, wa2, wa3]) {
        this.title = name;
        this.artist = artist;
        this.lyrics = lyrics;
        this.correctAnswer = correctAnswer;
        this.wrongAnswers = [wa1, wa2, wa3];
    }
}
const song0 = new Song('Immigrant\'s Song', 'Led Zeppelin', 'I come from the land of the ', 'ice and snow', ['colors and shapes', 'kings and queens', 'sinners and saints']);
const song1 = new Song('God\'s Plan', 'Drake', 'She say Do you love me? I tell her Only partly, I only love my ...', 'bed and my mama, I\'m sorry', ['fruits and my veggies, I\'m vegan', 'couch and my Netflix, I\'m lazy', 'maple syrup and my hockey, I\'m Canadian'])
const songs = [song0, song1];
/*----- app's state (variables) -----*/ 
/*----- cached element references -----*/ 
const songLyric = document.getElementsByTagName('h3')[0];
const songTitle = document.getElementById('title');
const songArtist = document.getElementById('artist');
const songCorrectAnswer = document.getElement
/*----- event listeners -----*/ 
/*----- functions -----*/

function newLyric(song) {
    let lyric = song.lyrics;
    songLyric.innerHTML = lyric;
};

function newTitle(song) {
    let title = song.title;
    songTitle.innerHTML = title;
};

function newArtist(song) {
    let artist = song.artist;
    songArtist.innerHTML = artist;
};

function render (array) {
    let nextSong = array[0]
    newLyric(nextSong);
    newTitle(nextSong);
    newArtist(nextSong);
    array.shift();
};

    