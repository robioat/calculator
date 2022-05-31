function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function divide(num1,num2){
    return num1/num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function operate(num1,num2){
    let added=add(num1,num2);
    let multiplied=multiply(num1,num2);
    let divided=divide(num1,num2);
    let subtracted=subtract(num1,num2);

    return subtracted;
}
let num1='';
let num2='';
let sum='';
let displayValue='';

function storeNum(n){
    let output=document.querySelector('.output');
    //if add, subtract etc
    if(n=='+'){
        newOutput=output.textContent+n;
        output.textContent=newOutput; 
    }
    else if(n=='='){
        output.textContent='';
        output.textContent=add(num1,num2);
    }
    else{
        if(num1==''){
            num1=n;
            newOutput=output.textContent+n;
            output.textContent=newOutput;
        }
        else if(num2==''){
            num2=n;
            newOutput=output.textContent+n;
            output.textContent=newOutput;
        }
    }
    
    //else if number
    

    //let output=document.querySelector('.output');
    //let curNum=parseInt(output.textContent);
    //if(curNum)

    //output.textContent=n;

    //const resultsDiv=document.querySelector('#results');    
    //let computerScore=document.querySelector('#computerScore');
    //let curCompScore=parseInt(computerScore.textContent);
    //let playerScore=document.querySelector('#playerScore');
    //let curPlayerScore=parseInt(playerScore.textContent);
}


const oneBtn=document.querySelector('.one');
oneBtn.addEventListener('click', ()=> { storeNum(1); });

const plusBtn=document.querySelector('.plus');
plusBtn.addEventListener('click',()=> {storeNum('+');});

const equalsBtn=document.querySelector('.equals');
equalsBtn.addEventListener('click',()=> {storeNum('=');});