console.log('js is working');

const increaseButton = document.querySelector(".counter__button--increase");
const decreaseButton = document.querySelector('.counter__button--decrease');
const counterValue = document.querySelector('.counter__value');
const resetButton = document.querySelector('.counter__reset-button');

increaseButton.addEventListener('click',function(){
    const currentValue = counterValue.textContent;
    const currentValueToNumber = +currentValue;
    const newValue = currentValueToNumber+1;
    counterValue.textContent = newValue;
});

resetButton.addEventListener('click', function(){
    counterValue.textContent=0;
});

decreaseButton.addEventListener('click', function(){
    const currentValue = counterValue.textContent;
    const currentValueToNumber = +currentValue;
    let newMinusValue = currentValueToNumber-1;
   // counterValue.textContent= newValue;
    if(newMinusValue <0){
        newMinusValue=0;
        //document.querySelector('.counter__button--decrease').disabled;
    }
    counterValue.textContent=newMinusValue;

});

