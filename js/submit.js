function radio_submit(){
  var radios = document.getElementsByTagName('input');
  var value;
  infodiv = document.getElementById("infodiv");
  questiondiv = document.getElementById('questiondiv');
  thanksdiv = document.getElementById('thanksdiv');
  for (var i = 0; i < radios.length; i++){
    if (radios[i].type === 'radio' && radios[i].checked){
      value = radios[i].value
    }
  }
  var currentData = {};
  currentData["id"] = id;
  currentData["block"] = currentBlock;
  currentData["subscale"] = database.panas_questions[shuffled[questionnum]].subscale;
  currentData["word"] = questionword;
  currentData["answer"] = value;
  participant_data.push(currentData);
  console.log(participant_data);
  if (questionnum<database.panas_questions.length - 1){
    questionnum++;
    showQuestion(shuffled);
  }else{
    if (currentBlock == "stagnant"){
      currentBlock = "progressive";
    }else{
      currentBlock = "stagnant";
    }
    if (blocknum < 1){
      blocknum ++;
      infodiv.style.display = "flex";
      questiondiv.style.display = "none";
      blank(wordElement);
    }else{
      console.log(participant_data);
      save_data(participant_data);
      questiondiv.style.display = "none";
      thanksdiv.style.display = "flex";
    }
  }

}
