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
const song0 = new Song('Immigrant Song', 'Led Zeppelin', '"We come from the land of the..." ', 'ice and snow', ['colors and shapes', 'kings and queens', 'sinners and saints']);
const song1 = new Song('God\'s Plan', 'Drake', '"She say Do you love me? I tell her Only partly, I only love my ..."', 'bed and my mama, I\'m sorry', ['fruits and my veggies, I\'m vegan', 'couch and my Netflix, I\'m lazy', 'maple syrup and my hockey, I\'m Canadian'])
const song2 = new Song('God\'s Plan', 'Drake', '"She say Do you love me? I tell her Only partly, I only love my ..."', 'bed and my mama, I\'m sorry', ['fruits and my veggies, I\'m vegan', 'couch and my Netflix, I\'m lazy', 'maple syrup and my hockey, I\'m Canadian'])
const song3 = new Song('God\'s Plan', 'Drake', '"She say Do you love me? I tell her Only partly, I only love my ..."', 'bed and my mama, I\'m sorry', ['fruits and my veggies, I\'m vegan', 'couch and my Netflix, I\'m lazy', 'maple syrup and my hockey, I\'m Canadian'])
const song4 = new Song('God\'s Plan', 'Drake', '"She say Do you love me? I tell her Only partly, I only love my ..."', 'bed and my mama, I\'m sorry', ['fruits and my veggies, I\'m vegan', 'couch and my Netflix, I\'m lazy', 'maple syrup and my hockey, I\'m Canadian'])
const song5 = new Song('God\'s Plan', 'Drake', '"She say Do you love me? I tell her Only partly, I only love my ..."', 'bed and my mama, I\'m sorry', ['fruits and my veggies, I\'m vegan', 'couch and my Netflix, I\'m lazy', 'maple syrup and my hockey, I\'m Canadian'])
const song6 = new Song('God\'s Plan', 'Drake', '"She say Do you love me? I tell her Only partly, I only love my ..."', 'bed and my mama, I\'m sorry', ['fruits and my veggies, I\'m vegan', 'couch and my Netflix, I\'m lazy', 'maple syrup and my hockey, I\'m Canadian'])
const song7 = new Song('God\'s Plan', 'Drake', '"She say Do you love me? I tell her Only partly, I only love my ..."', 'bed and my mama, I\'m sorry', ['fruits and my veggies, I\'m vegan', 'couch and my Netflix, I\'m lazy', 'maple syrup and my hockey, I\'m Canadian'])
const song8 = new Song('God\'s Plan', 'Drake', '"She say Do you love me? I tell her Only partly, I only love my ..."', 'bed and my mama, I\'m sorry', ['fruits and my veggies, I\'m vegan', 'couch and my Netflix, I\'m lazy', 'maple syrup and my hockey, I\'m Canadian'])
const song9 = new Song('God\'s Plan', 'Drake', '"She say Do you love me? I tell her Only partly, I only love my ..."', 'bed and my mama, I\'m sorry', ['fruits and my veggies, I\'m vegan', 'couch and my Netflix, I\'m lazy', 'maple syrup and my hockey, I\'m Canadian'])

const songs = [song0, song1];
/*----- app's state (variables) -----*/ 
var answers = [];
var x = Math.floor(Math.random() * Math.floor(4));
/*----- cached element references -----*/ 
const songLyricEl = document.getElementsByTagName('h3')[0];
const songTitleEl = document.getElementById('title');
const songArtistEl = document.getElementById('artist');
const songAnswers = document.getElementsByTagName('li');
const ddlEl = document.getElementById('selector');
var scoreEl = document.getElementById('score');
/*----- event listeners -----*/ 
document.getElementsByTagName('button')[0].addEventListener('click', handleClick);

/*----- functions -----*/
function newLyric(song) {
    let lyric = song.lyrics;
    songLyricEl.innerHTML = lyric;
};

function newTitle(song) {
    let title = song.title;
    songTitleEl.innerHTML = title;
};

function newArtist(song) {
    let artist = song.artist;
    songArtistEl.innerHTML = artist;
};  

function newWrongAnswers(song) {
    let wrongAnswers = song.wrongAnswers;
    wrongAnswers.forEach(function(a) {
        answers.push(a);
    })
};

function newCorrectAnswer(song) {
    let correctAnswer = song.correctAnswer;
    answers.splice(x, 0, correctAnswer);
};

function newAnswers(answers) {
    songAnswers[0].textContent = answers[0];
    songAnswers[1].textContent = answers[1];
    songAnswers[2].textContent = answers[2];
    songAnswers[3].textContent = answers[3];
}

function render (array) {
    let nextSong = array[0]
    newLyric(nextSong);
    newTitle(nextSong);
    newArtist(nextSong);
    newWrongAnswers(nextSong);
    newCorrectAnswer(nextSong);
    newAnswers(answers);
    array.shift();
};

function handleClick() {
    answers.length = 0;
    render(songs);
};

function checkAnswer() {
    const selectedEl = ddlEl.options[ddlEl.selectedIndex].value;
    console.log(selectedEl);
    if (selectedEl == x) {
        return 'right';
    } else {
        return 'wrong';
    }
}
