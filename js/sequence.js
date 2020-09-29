var wordElement = document.getElementById("word");
var ordered = Array.from(Array(20).keys());
infodiv = document.getElementById("infodiv");
questiondiv = document.getElementById('questiondiv');
greetingsdiv = document.getElementById('greetingsdiv');
demodiv = document.getElementById('demodiv');
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
function showGreeting(){
  infodiv.style.display = "none";
  questiondiv.style.display = "none";
  greetingsdiv.style.display = "block";
}

function start(){
  console.log("experiment started");
  for (var j=0; j<database.word_blocks["stagnant"].length; j++){
    practiceBlock.push(database.word_blocks["stagnant"][j].content);
  }
  for (var j=0; j<database.word_blocks["progressive"].length; j++){
    practiceBlock.push(database.word_blocks["progressive"][j].content);
  }
  practiceBlock = shuffle(practiceBlock);
  practiceBlock.length = 5;
  console.log(practiceBlock);
  setTimeout(showGreeting,500);
}
function blank(wordElement){
  questionnum = 0;
  wordElement.innerHTML = "";
  if (practice==1){
    block_decider(practiceBlock,endPractice);
  }else{
    block_decider(currentBlock,showQuestion);
  }
}
function endPractice(){
  console.log("practice ended");
  practice = 0;
}

function block_decider(block,endFunction){
  if (practice = 1){
    var myblock = practiceBlock;
    var mylist = practiceBlock[listnum];
  }else{
    var myblock = database.word_blocks[block];
    var mylist = database.word_blocks[block][listnum].content;
  }
  if (listnum >= myblock.length){
    shuffled = shuffle(ordered);
    console.log(shuffled);
    setTimeout(endFunction,500,shuffled);
  }
  else{
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
  infodiv.style.display = "none";
  questiondiv.style.display = "block";
  const sentence = "Az alábbi válaszok közül válaszd ki, mennyire jellemző a jelen pillanatban rád az alábbi kifejezés:";
  questionword = database.panas_questions[shuffled[questionnum]].word;
  var question = questionword;
  questionform = document.getElementById('questionform');
  questionform.innerHTML = sentence + "<br>" + "<h3>"+ question+"</h3>";
}

start();
