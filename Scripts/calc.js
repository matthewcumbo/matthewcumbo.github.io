function calc(operation){
    let num1 = parseInt(document.getElementById('val1').value);
    let num2 = parseInt(document.getElementById('val2').value);
    let result = 0;

    if (operation == 'add'){
        result = num1 + num2;
    }
    if (operation == 'sub'){
        result = num1 - num2;
    }
    if (operation == 'mul'){
        result = num1 * num2;
    }
    if (operation == 'div'){
        result = num1 / num2;
    }

    document.getElementById('result').value = result;
}