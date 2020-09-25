var listnum = 0;
var wordnum = 0;
var questionnum = 0;
var blocknum = 0;
var shuffled;
var currentBlock;
var questionword;
var practice = 1;
var greetings = 1;
var practiceBlock = [];
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
      {"content":["szék","ágy","pad","kanapé","asztal","székláb","ülés","hokedli","fa","párna","ül","fotel"],
      "type":"stagnant"},
      {"content":["borda","Ádám","test","csont","sertés","mellkas","étel","marha","sült","hús","tüdő","szív"],
      "type":"stagnant"},
      {"content":["öltöny","üzlet","tiszta","ruha","zakó","elegáns","férfi","szép","nadrág","ing","nyakkendő","munka"],
      "type":"stagnant"},
      {"content":["nap","strand","világos","égés","meleg","forró","fény","sugár","süt","csillag","barnulás","hő"],
      "type":"stagnant"},
      {"content":["oszlop","épület","görög","ház","sor","lista","palota","újság","pillér","rúd","Róma","támasz"],
      "type":"stagnant"},
      {"content":["szürke","fekete","kék","felhő","szín","sötét","unalmas","köd","régi","szomorú","ezüst","fehér"],
      "type":"stagnant"},
    ],
    "progressive":[
      {"content":["csendes","hangos","zaj","hang","fül","szem","látás","vak","sötét","fekete","bárány","gyapjú"],
      "type":"progressive"},
      {"content":["kapu","ajtó","kulcs","lyuk","ás","föld","sár","eső","hó","hideg","meleg","dél"],
      "type":"progressive"},
      {"content":["büszke","boldog","szomorú","könny","csepp","víz","medence","kék","ég","magas","alacsony","alatta"],
      "type":"progressive"},
      {"content":["hűséges","kutya","macska","egér","sajt","torta","desszert","étel","éhség","szegény","hajléktalan","koldus"],
      "type":"progressive"},
      {"content":["csengő","iskola","tábla","kréta","fehér","tiszta","szoba","sötét","hideg","száraz","sivatag","Egyiptom"],
      "type":"progressive"},
      {"content":["elefánt","nagy","kövér","fogyókúra","saláta","friss","levegő","oxigén","szén","atom","bomba","robbanás"],
      "type":"progressive"},
      {"content":["csizma","cipő","pár","iker","hasonló","különböző","különös","furcsa","viselkedés","etikett","udvarias","úriember"],
      "type":"progressive"},
      {"content":["arany","fém","vas","kemény","munka","építkezés","tervrajz","térkép","iránytű","szögmérő","vonalzó","egyenes"],
      "type":"progressive"},
    ],
  },
  "panas_questions":[
    {"word":"érdeklődő","subscale":"positive"},
    {"word":"kiborult","subscale":"negative"},
    {"word":"izgatott","subscale":"positive"},
    {"word":"zaklatott","subscale":"negative"},
    {"word":"bűntudatom van","subscale":"negative"},
    {"word":"erős","subscale":"positive"},
    {"word":"rémült","subscale":"negative"},
    {"word":"ellenséges","subscale":"negative"},
    {"word":"lelkes","subscale":"positive"},
    {"word":"büszke","subscale":"positive"},
    {"word":"ingerlékeny","subscale":"negative"},
    {"word":"éber","subscale":"positive"},
    {"word":"megszégyenült","subscale":"negative"},
    {"word":"elhivatott","subscale":"positive"},
    {"word":"elszánt, határozott","subscale":"positive"},
    {"word":"figyelmes","subscale":"positive"},
    {"word":"feszült","subscale":"negative"},
    {"word":"aktív, élénk","subscale":"positive"},
    {"word":"félénk","subscale":"negative"},
    {"word":"ideges","subscale":"negative"},
  ]
}
var participant_data = [];
participant_data.push(["id","block","subscale","word","answer"]);
