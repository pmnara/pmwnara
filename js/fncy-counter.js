console.log('js is working');

const counterBg = document.querySelector('.counter');
const increaseButton = document.querySelector(".counter__button--increase");
const decreaseButton = document.querySelector('.counter__button--decrease');
const counterValue = document.querySelector('.counter__value');
const resetButton = document.querySelector('.counter__reset-button');
const counterTitle = document.querySelector('.counter__title');

// increaseButton.addEventListener('click',function(){
//     const currentValue = counterValue.textContent;
//     const currentValueToNumber = +currentValue;
//     const newValue = currentValueToNumber+1;
//     counterValue.textContent = newValue;   
// });

increaseButton.addEventListener('click',incrementCounter);


decreaseButton.addEventListener('click',decrementCounter);


resetButton.addEventListener('click',counterReset );


function incrementCounter (){
  
    const currentValue = counterValue.textContent;
    const currentValueToNumber = +currentValue;
    let newValue = currentValueToNumber+1;
    if(newValue > 5){
        newValue=5;
        counterBg.classList.add('counter--limit');
        counterTitle.innerHTML ='Limit! Get<b> Pro</b> for >5'
        counterTitle.classList.add('counter__title--limit');
        increaseButton.disabled = true;
        decreaseButton.disabled= true;
         //

     } 
        counterValue.textContent = newValue;
        increaseButton.blur();
  
}


function decrementCounter (){
    const currentValue = counterValue.textContent;
    const currentValueToNumber = +currentValue;
    let newValue = currentValueToNumber-1;
    if(newValue <0){
        newValue=0;
    }
    counterValue.textContent=newValue;
    decreaseButton.blur();
}



function counterReset(){
    counterBg.classList.remove('counter--limit');
    counterTitle.classList.remove('counter__title--limit');
    counterTitle.textContent='Head Counter';
    counterValue.textContent=0;
    increaseButton.disabled=false;
    decreaseButton.disabled=false;
    resetButton.blur();
}



document.addEventListener('keydown',incrementCounter);


// increaseButton.addEventListener('click',function(){
//     const currentValue = counterValue.textContent;
//     const currentValueToNumber = +currentValue;
//     if(currentValueToNumber > 5){
//         increaseButton.disabled;
//     }//else{
//     //     increaseButton.disabled=false;
//     // }
// });


