function updateCounter(button)
{
    if(button.innerHTML == 'DECREASE'){
        document.getElementById('counter').innerHTML--;
    }
    else if (button.innerHTML == 'INCREASE'){
        document.getElementById('counter').innerHTML++;
    }
    else{
        document.getElementById('counter').innerHTML = 0;
    }

    if (document.getElementById('counter').innerHTML == 0){
        document.getElementById('counter').classList.remove('neg');
        document.getElementById('counter').classList.remove('pos');
        document.getElementById('counter').classList.add('zero');
    }
    else if (document.getElementById('counter').innerHTML > 0){
        document.getElementById('counter').classList.remove('neg');
        document.getElementById('counter').classList.remove('zero');
        document.getElementById('counter').classList.add('pos');
    }
    else {
        document.getElementById('counter').classList.remove('zero');
        document.getElementById('counter').classList.remove('pos');
        document.getElementById('counter').classList.add('neg');
    }
}