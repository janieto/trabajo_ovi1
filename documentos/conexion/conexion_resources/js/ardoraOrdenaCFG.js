var timeAct=160; timeIni=160; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=3;
var score=0; scoreMax=2; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=0; scoMessage=""; scoPtos=20;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="fontEnun";
var timeOnMessage=5; messageOk="Lograste conectarte a la base de datos"; messageTime="se te acaba el tiempo..."; messageError="se te cayo la base de datos"; messageErrorG="se te cayo la base de datos"; messageAttempts="solo tienes 3 intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y29uZXhpb24"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Y29ubiBteXNxbCBjb25uZWN0IGxvY2FsIGhvc3Qgcm9vdCBwYXNzd29yZA","KHNlbGVjdCAqIGZyb20gYmFzZSBkZSBkYXRvcyk","","",""];imaW=["php-mysql.jpg","basedb.jpg","","",""];queW=["Es la forma que nos podemos conectar a la base de datos","Es el query para conectarnos a la base de datos","","",""]; c=[43,29,0,0,0];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="conexion_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];
