document.getElementById("button").onclick = function() {
    var myNumber = document.getElementById("myNumber").value;

    var gotIt = false;

    var numberOfGuesses = 1;

    if(myNumber < 6){

        while(gotIt == false){
            if(guessNumber(myNumber)){
                gotIt = true;
                alert("Indovinato era " + myNumber + " ha indovinato alla " +  numberOfGuesses + " volta");
            }else{
                numberOfGuesses++;
            }
        }
    }else{
        alert("Il numero inserito è maggiore di 5");
    }
};

function guessNumber(number) {
    var guess = Math.floor(Math.random() * 6);

    if(guess == number){
        return (true)
    }else{
        return (false)
    }
}