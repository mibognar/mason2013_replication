var wordElement = document.getElementById("word");
var ordered = [0,1,2,3,4];
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function blank(wordElement){
  questionnum = 0;
  wordElement.innerHTML = "";
  if (listnum >= database.word_blocks[currentBlock].length){
    shuffled = shuffle(ordered);
    setTimeout(showQuestion,500,shuffled);
  }
  else{
    var mylist = database.word_blocks[currentBlock][listnum].content;
    if (wordnum<mylist.length){
      setTimeout(changeWord, 500, wordElement,mylist[wordnum]);
    }
    else{
      wordnum = 0;
      listnum ++;
      setTimeout(blank, 2000, wordElement);
    }
  }
}
function changeWord(wordElement, target){
  wordElement.innerHTML = target;
  wordnum ++;
  setTimeout(blank, 1200, wordElement);
}
function showQuestion(shuffled){
  var inp = document.getElementsByTagName('input');
  for (var i = inp.length-1; i>=0; i--) {
      if ('radio'===inp[i].type) inp[i].checked = false;
    }
  wordnum = 0;
  listnum = 0;
  infodiv = document.getElementById("infodiv");
  questiondiv = document.getElementById('questiondiv');
  infodiv.style.display = "none";
  questiondiv.style.display = "block";
  const sentence = "Mennyire vagy ";
  questionword = database.panas_questions[shuffled[questionnum]].word;
  var question = questionword + "?";
  questionform = document.getElementById('questionform');
  questionform.innerHTML = sentence + question;
}

blank(wordElement);
