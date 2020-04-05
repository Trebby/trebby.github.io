var myArray = [
    "Every day we stray futher from God's light.",
    "I. Mince. Garlic.",
    "Lots of leg = lots of fast"
  ];
function newQuote() {
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
  document.getElementById('quotebox').innerHTML = randomItem;
}