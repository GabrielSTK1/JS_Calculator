function insert(number){
    document.getElementById('textview').value = document.getElementById('textview').value + number; 
}

function equal(){
    let expression = document.getElementById('textview').value;
    
    if(expression){
        document.getElementById('textview').value = eval(expression);
    }
    
}

function c(){
    document.getElementById('textview').value = '';
}

function back(){
    let expression = document.getElementById('textview').value;
    document.getElementById('textview').value = expression.substring(0, expression.length-1);
}