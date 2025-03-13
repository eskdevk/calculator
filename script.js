const display = document.getElementById("display");
var expression ='';
function appendDisplay(num){

    if(display.value ===0 & num==0){
        display.value = 0;
    }else if(num=='%'){
        display.value +='%';
        expression += '/100';
    }
    else if(num=="*"){
        display.value += "x";
        expression +="*";
    }
    else if(display.value=='0.'){
        display.value +=num;
        expression += num;
    }
    else{
        display.value += num;
        expression += num;
    }
}

function calculate(){
    try{
        display.value = eval(expression);
        expression = display.value;
    }
    catch{
        display.value = "Syntax Error";
    }
}

function clearScreen(){
    display.value = '';
    expression = '';
}

function delLastDigit(){
    display.value = display.value.slice(0, -1);
    expression = expression.slice(0, -1);
}