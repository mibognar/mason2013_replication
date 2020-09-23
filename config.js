var listnum = 0;
var wordnum = 0;
var questionnum = 0;
var blocknum = 0;
var shuffled;
var currentBlock;
var questionword;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const relay = urlParams.get("relay");
const id = urlParams.get("id");
if (relay == 0){
  currentBlock = "stagnant";
}else{
  currentBlock = "progressive";
}

const database = {
  "word_blocks":{
    "stagnant":[
      {"content":["delfin","emlős","állat","hal","okos","veszélyeztetett","óceán","úszás","bálna","víz","uszony","flipper"],
      "type":"stagnant"},
      {"content":["térd","könyök","boka","csont","térdkalács","ízület","láb","reflex","zokni","hajlít","vádli","kar"],
      "type":"stagnant"},
    ],
    "progressive":[
      {"content":["csendes","hangos","zaj","hang","fül","szem","látás","vak","sötét","fekete","bárány","gyapjú"],
      "type":"progressive"},
      {"content":["kapu","ajtó","kulcs","lyuk","ás","föld","sár","eső","hó","hideg","meleg","dél"],
      "type":"progressive"},
    ]
  },
  "panas_questions":[{"word":"érdeklődő","subscale":"positive"},
  {"word":"kiborult","subscale":"negative"},
{"word":"izgatott","subscale":"positive"},
{"word":"zaklatott","subscale":"negative"},
{"word":"erős","subscale":"positive"}]
}
var participant_data = [];
participant_data.push(["id","block","subscale","word","answer"]);
