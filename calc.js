var head = document.createElement('h2');
document.body.appendChild(head);

function add() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let addd = parseInt(num1) + parseInt(num2);
    head.innerHTML = "The Addition of given numbers is: " + addd;
}

function sub(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let subb = parseInt(num1) - parseInt(num2);
    head.innerHTML = "The Subtraction of given number is : "+subb;
}

function multy(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let multi = parseInt(num1) * parseInt(num2);
    head.innerHTML = "The Multiplication of given number is : "+multi;
}

function division(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let div = parseInt(num1) / parseInt(num2);
    head.innerHTML = "The Division of given number is : "+div;
}