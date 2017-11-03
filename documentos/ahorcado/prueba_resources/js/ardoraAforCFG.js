//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct = 249;
timeIni = 249;
timeBon = 0;
var successes = 0;
successesMax = 2;
attemptsMax = 3;
var score = 0;
scoreMax = 10;
scoreInc = 5;
scoreDec = 0
var typeGame = 0;
var tiTime = true;
var tiTimeType = 0;
var tiButtonTime = true;
var textButtonTime = "Empecemos";
var tiSuccesses = true;
var tiAttempts = true;
var tiScore = false;
var startTime;
var colorBack = "#FFFFFF";
colorButton = "#008000";
colorText = "#000000";
colorSele = "#4AB57A";
var goURLNext = false;
goURLRepeat = false;
tiAval = false;
var scoOk = 0;
scoWrong = 0;
scoOkDo = 0;
scoWrongDo = 0;
scoMessage = "";
scoPtos = 10;
var fMenssage = "'Arial Black', Gadget, sans-serif";
var fActi = "'Arial Black', Gadget, sans-serif";
var fEnun = "'Arial Black', Gadget, sans-serif";
var timeOnMessage = 5;
messageOk = "Eres un experto en conexion de BD con PHP";
messageTime = "Ya casi se te acaba el tiempo....";
messageError = "Asi no es... intenta de nuevo";
messageErrorG = "Asi no es... intenta de nuevo";
messageAttempts = "solo tienes 3 intentos";
isShowMessage = false;
var urlOk = "";
urlTime = "";
urlError = "";
urlAttempts = "";
var goURLOk = "_blank";
goURLTime = "_blank";
goURLAttempts = "_blank";
goURLError = "_blank";
borderOk = "#008000";
borderTime = "#FF0000";
borderError = "#FF0000";
borderAttempts = "#FF0000";
var wordsGame = "cHJ1ZWJh";
wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function giveZindex(typeElement) {
    var valueZindex = 0;
    capas = document.getElementsByTagName(typeElement);
    for (i = 0; i < capas.length; i++) {
        if (parseInt($(capas[i]).css("z-index"), 10) > valueZindex) {
            valueZindex = parseInt($(capas[i]).css("z-index"), 10);
        }
    }
    return valueZindex;
}
var words = ["TVlTUUxfQ09OTkVDVA", "WEFNUFA", "", "", "", "", "", "", "", ""];
imaW = ["Captura.JPG", "xampp-wamp.jpg", "", "", "", "", "", "", "", ""];
queW = ["Nombre de la sentencia de conexion a la base de datos?", "Cual de los estos hosting locales usamos en este OVI?", "", "", "", "", "", "", "", ""];
var auW = ["", "", "", "", "", "", "", "", "", ""];
var fillLetter = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
wordsG = [];
indexG = 0;
actMaxWidth = 550;
indexWord = 0;
totalWord = 0;
var imageW = [];
questionW = [];
audioW = [];
profG = 0;
dirMedia = "prueba_resources/media/";
textBNext = "";