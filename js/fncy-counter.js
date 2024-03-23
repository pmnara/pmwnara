console.log('js is working');

const increaseButton = document.querySelector(".counter__button--increase");
const counterValue = document.querySelector('.counter__value');

increaseButton.addEventListener('click',function(){
    const currentValue = counterValue.textContent;
    const currentValueToNumber = +currentValue;
    const newValue = currentValueToNumber+1;
    counterValue.textContent = newValue;
});