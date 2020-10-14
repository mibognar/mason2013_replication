infodiv = document.getElementById("infodiv");
questiondiv = document.getElementById('questiondiv');
greetingsdiv = document.getElementById('greetingsdiv');
demodiv = document.getElementById('demodiv');
console.log(demodiv);
practicediv = document.getElementById('practicediv');
console.log(practicediv);
function submitDemographics(){
  var demo_data = {};
  demo_data["id"] = id;
  demo_data["gender"] = document.getElementById("gender").value;
  demo_data["age"] = document.getElementById("age").value;
  demo_data["neptun"] = document.getElementById("neptun").value;
  if (document.getElementById("neptun").value){
    console.log(demo_data);
    save_data(demo_data,"save_demo.php");
    document.getElementById('demodiv').style.display = "none";
    document.getElementById('practicediv').style.display = "block";
}else{
  alert("A teszt elindításához be kell írnod a NEPTUN kódodat");
}
}

function startPractice(){
  document.getElementById('practicediv').style.display = "none";
  document.getElementById('infodiv').style.display = "block";
  blank(wordElement);
}
function startExperiment(){
  document.getElementById('experimentdiv').style.display = "none";
  document.getElementById('infodiv').style.display = "block";
  wordnum = 0;
  listnum = 0;
  blank(wordElement);
}

function showDemographics(){
  checkbox1 = document.getElementById('accept1');
  checkbox2 = document.getElementById('accept2');
  if (checkbox1.checked && checkbox2.checked){
    greetingsdiv.style.display = "none";
    demodiv.style.display = "block";

  }else{
    alert("A továbblépéshez el kell fogadnod a kísérlet és az adatkezelés feltételeit!");
  }

}
