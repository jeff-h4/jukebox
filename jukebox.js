var FREQUENCY = 400;
var songStr="";
var songArr;
function parseNote(singleNoteStr) {
  noteObj = new Object();
  noteArr = singleNoteStr.split("*");
  noteObj.pitch = noteArr[0];
  noteObj.beats = 1;
  if (noteArr[1] !== undefined) {
      noteObj.beats = parseInt(noteArr[1]);
  };
  return noteObj;
};

function parseSong(songStr) {
  songArr = songStr.split(" ");
  console.log(songArr);
  songArr = songArr.map(parseNote);
  return songArr;
};
var onComplete = function () {
  alert("Song finished playing");
  //flag = true;
  getSong();
};
var getSong = function(){
songStr = prompt("Enter a song string (Empty String to quit): ");
   if(songStr!==""){
      songArr = parseSong(songStr);
      playSong(songArr,FREQUENCY,onComplete);}
//flag = false;
};

//songStr = "A*2 Bb*3 B*3 C*3 C#*3 D E F G F E D C#*3 C*3 B*3 Bb*3 A*2";
getSong();
