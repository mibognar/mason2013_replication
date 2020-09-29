infodiv = document.getElementById("infodiv");
questiondiv = document.getElementById('questiondiv');
greetingsdiv = document.getElementById('greetingsdiv');
demodiv = document.getElementById('demodiv');

function submitDemographics(){
  var demo_data = {};
  demo_data["id"] = id;
  demo_data["gender"] = document.getElementById("gender").value;
  demo_data["age"] = document.getElementById("age").value;
  demo_data["neptun"] = document.getElementById("neptun").value;
  console.log(demo_data);
  save_data(demo_data,"save_demo.php");
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
