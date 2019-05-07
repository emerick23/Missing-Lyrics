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
const song0 = new Song('God\'s Plan', 'Drake', '"She say Do you love me? I tell her Only partly I only love my . . ."', 'Bed and my mama, I\'m sorry', ['Fruits and my veggies, I\'m vegan', 'Couch and my Netflix, I\'m lazy', 'Maple syrup and my hockey, I\'m Canadian'])
const song1 = new Song('Immigrant Song', 'Led Zeppelin', '"We come from the land of the . . . From the midnight sun where the hot springs flow"', 'Ice and snow', ['Kings and queens', 'Sinners and saints', 'Rain and cold'])
const song2 = new Song('Piano Man', 'Billy Joel', '"Sing us a song, you\'re the piano man Sing us a song tonight . . . And you\'ve got us feeling alright"', 'Well, we\'re all in the mood for a melody', ['Well, we\'re all in the groove for a lullaby', 'Well, we\'re all in tune for a sing-along', 'Well, we\'re all in the room for the piano man'])
const song3 = new Song('Chop Suey!', 'System of a Down', '"Wake up (Wake up) Grab a brush and put a little makeup Hide your scars to fade away the shakeup . . ."', 'Why\'d you leave the keys upon the table', ['Why\'d you put the kids inside the cradle', 'Why\'d you crash the car into a stable', 'Why\'d you go and change the channel'])
const song4 = new Song('Ms. Jackson', 'OutKast', '"I\'m Sorry, Ms. Jackson, I am for real . . . I apologize a trillion times"', 'Never meant to make your daughter cry', [ 'Never meant to steal your apple pie', 'Never meant to leave with no goodbye', 'Never meant to yell at you and fight'])
const song5 = new Song('Paranoid', 'Black Sabbath', '"Finished with my woman cause she couldn\'t help me with my mind . . ."', 'People think I\'m insane because I am frowning all the time', ['People think I\'m happy because I am grinning all the time', 'People think I\'m crazy because I am eating bats all the time', 'People think I\'m evil because I am wearing black all the time'])
const song6 = new Song('Dani California', 'Red Hot Chili Peppers', '"California, rest in peace Simultaneous release . . . She\'s my priestess, I\'m your priest, yeah, yeah"', 'California, show your teeth', ['California, until next we meet', 'California, feel the heat', 'California, can\'t be beat'])
const song7 = new Song('Thinkin Bout You ', 'Frank Ocean', '"A tornado flew around . . . Excuse the mess it made It usually doesn\'t rain in Southern California"', 'My room before you came', ['My mind before you left', 'My house before we met', 'My town it was crazy'])
const song8 = new Song('Take me Home, Country Roads', 'John Denver', '"Country roads, take me home To the place I belong . . . Take me home, country roads"', 'West Virginia, mountain mamma', ['South Dakota, mountain man', 'New York, city girl', 'Austin Texas, hipster momma'])
const song9 = new Song('FourFiveSeconds', 'Rihanna, Kanye West, Paul McCartney', '"Now I\'m four, five seconds from wildin"', 'And we got three more days \'til Friday', ['And we have six, seven seconds of time left', 'And we keep searching but no luck of finding', 'And we keep seeking there is no hiding'])

const songs = [song0, song1, song2, song3, song4, song5, song6, song7, song8, song9];
/*----- app's state (variables) -----*/ 
var answers = [];
var x;
var score = 0;
var count = 0;
/*----- cached element references -----*/ 
const songLyricEl = document.getElementsByTagName('h3')[0];
const songTitleEl = document.getElementById('title');
const songArtistEl = document.getElementById('artist');
const listEls = document.querySelector('ol');
const songAnswers = document.getElementsByTagName('li');
const ddlEl = document.getElementById('selector');
const scoreEl = document.getElementById('score');
const buttonEl = document.querySelector('button');
const resultEl = document.getElementById('result');
/*----- event listeners -----*/ 
document.getElementsByTagName('button')[0].addEventListener('click', handleClick);

/*----- functions -----*/
function newLyric(song) {
    let lyric = song.lyrics;
    songLyricEl.textContent = lyric;
};

function newTitle(song) {
    let title = song.title;
    songTitleEl.textContent = title;
};

function newArtist(song) {
    let artist = song.artist;
    songArtistEl.textContent = artist;
};  

function newWrongAnswers(song) {
    let wrongAnswers = song.wrongAnswers;
    wrongAnswers.forEach(function(a) {
        answers.push(a);
    })
};

function newCorrectAnswer(song) {
    x = Math.floor(Math.random() * Math.floor(4));
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
    if (count > 1) {
        checkAnswer();
    };
    newLyric(nextSong);
    newTitle(nextSong);
    newArtist(nextSong);
    newWrongAnswers(nextSong);
    newCorrectAnswer(nextSong);
    newAnswers(answers);
    array.shift();
    
};

function handleClick() {
    if (count >= 0 && count <= 10) {
    answers.length = 0;
    render(songs);
    };
    if (count > 0 && count < 10) {
        buttonEl.textContent = 'Next Question';
    };
    if (count === 10) {
        checkAnswer();
        buttonEl.textContent = 'Final Answer'
    }
    if (count === 11) {
        checkAnswer();
        listEls.style.display = 'none';
        songLyricEl.textContent = `Thanks for playing, you got ${score} out of 10 correct! Hit the button below to play again.`;
        buttonEl.textContent = 'Play Again';
    }
    if (count === 12) {
        document.location.reload(true);
    }
};

function checkAnswer() {
    const selectedEl = ddlEl.selectedIndex;
    if (selectedEl == x) {
        score += 1;
        scoreEl.innerHTML = `${score}/ 10 Correct`;
        resultEl.textContent = 'Correct!'
    } else {
        score += 0;
        scoreEl.innerHTML = `${score}/ 10 Correct`;
        resultEl.textContent = 'Incorrect';
    }
};

function counter() {
    count = parseInt(count) + parseInt(1);
};