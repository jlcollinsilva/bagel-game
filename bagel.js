/* Start Game....*/

document.getElementById('btnstartGame').addEventListener('click',function(){
    // $('#modalGame').modal();
    startGame();
    alert('End of Game.');
  });

function startGame(){

  var computerNumber = getRandomNumber();

  var result;
  var userNumber = '000';

  for (var i = 0; i < 20; i++) {//until 20 chances

    userNumber = prompt('Please enter your 3 digits :');

    result = compareNumbers(computerNumber,userNumber);

    alert(result);

    if (result == "Fermi Fermi Fermi ") {
      alert('you win!!!!');
      break;
    }else {
      alert('sorry, try again!');
    }

  }

}; //end startGame

function getRandomNumber(){
  var computerDigits = "";
  var x = 0;
  var index = 0;
  var existx;

  while (computerDigits.length < 3) {
     x = Math.floor((Math.random() * 10));
     existx = computerDigits.includes(x);
     if (existx == false){//digits must be unique
       computerDigits += x;
       index++;
     }
  }
  return computerDigits;
}

function compareNumbers(computerNumber,userNumber){

  var result = "";
  var pos = -1;

    for (var i = 0; i < 3; i++) { //3 digits

      pos = computerNumber.search(userNumber[i]);

      if (pos !== -1){ //-1 means not match
          result += (pos==i) ? "Fermi," : "Pico,";
      }
    }
    if (result == ""){
      result = "Bagel";
    }
  return result.replace(/,/g,' ');
  }
