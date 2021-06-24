var myArray = [
    "Every day we stray futher from God's light.",
    "I. Mince. Garlic.",
    "Lots of leg = lots of fast"
  ];
function newQuote() {
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
  document.getElementById('quotebox').innerHTML = randomItem;
}

window.onload = choosePic;

var myPix = new Array("asuka.png","gendo.png","kaworu.png","misato.png","rei.png","ritsuko.png","shinji.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];

}