let wordList = [
    'hello',
    'world',
    'pizza',
    'jiffy',
    'quick',
    'actor',
    'music',
    'angry',
    'below',
    'cater'
];

// Math.random() => returns a random number 
//between 0 (included) and 1 (excluded)

// Math.floor() => returns the largest integer 
//less than or equal to a given number

// random between 0 and 9
let random = Math.floor(Math.random() * 10);
let word = wordList[random];

console.log(word);

function check(attempt){
    let correctLetters = '';
    console.log('attempt'+attempt);
    let toCheck = document.getElementById('attempt'+attempt).value;

    console.log(toCheck);

    if (toCheck == word) {
        document.getElementById('resultsDiv').innerHTML += '<h3 class="text-success">'+toCheck+'</h3>';
        document.getElementById('attempt'+1).setAttribute('disabled',true);
        document.getElementById('button'+1).setAttribute('disabled', true);
        document.getElementById('attempt'+2).setAttribute('disabled',true);
        document.getElementById('button'+2).setAttribute('disabled', true);
        document.getElementById('attempt'+3).setAttribute('disabled',true);
        document.getElementById('button'+3).setAttribute('disabled', true);
        document.getElementById('attempt'+4).setAttribute('disabled',true);
        document.getElementById('button'+4).setAttribute('disabled', true);
        document.getElementById('attempt'+5).setAttribute('disabled',true);
        document.getElementById('button'+5).setAttribute('disabled', true);
    }
    else {
        let pieces = toCheck.split('');

        pieces.forEach(function(letter){
            if(word.includes(letter)){
                correctLetters += letter;
            }
        });

        if (correctLetters == ''){
            document.getElementById('resultsDiv').innerHTML += '<h3>0 Correct Letters</h3>';    
        }
        else{
            document.getElementById('resultsDiv').innerHTML += '<h3>Correct Letters: '+correctLetters+'</h3>';
        }
        
        if (attempt < 5) {
            let nextAttempt = parseInt(attempt) + 1;
            document.getElementById('attempt'+attempt).setAttribute('disabled',true);
            document.getElementById('button'+attempt).setAttribute('disabled', true);
            document.getElementById('attempt'+nextAttempt).removeAttribute('disabled');
            document.getElementById('button'+nextAttempt).removeAttribute('disabled');
        }
        else
        {
            document.getElementById('resultsDiv').innerHTML += '<h3 class="text-danger">'+word+'</h3>';
            document.getElementById('attempt'+1).setAttribute('disabled',true);
            document.getElementById('button'+1).setAttribute('disabled', true);
            document.getElementById('attempt'+2).setAttribute('disabled',true);
            document.getElementById('button'+2).setAttribute('disabled', true);
            document.getElementById('attempt'+3).setAttribute('disabled',true);
            document.getElementById('button'+3).setAttribute('disabled', true);
            document.getElementById('attempt'+4).setAttribute('disabled',true);
            document.getElementById('button'+4).setAttribute('disabled', true);
            document.getElementById('attempt'+5).setAttribute('disabled',true);
            document.getElementById('button'+5).setAttribute('disabled', true);
        }
    }
}