
const wordCount = document.querySelector('.stat__number--words');

const textArea = document.querySelector('.textarea');

const characters = document.querySelector('.stat__number--characters');

const twitter = document.querySelector('.stat__number--twitter')

const faceBook= document.querySelector('.stat__number--facebook')


textArea.addEventListener('input', inputHandler);





function inputHandler (){
//warning for malicious code writers

if(textArea.value.includes('<script>')){
    alert ('You are can\'t use malicious code in the text');
    textArea.value = textArea.value.replace('<script>', '');
}

// let countWords = textArea.value.split(' ').length;
// console.log(textArea.value.length)
// if(textArea.value.length===0) countWords =0;

// wordCount.textContent= countWords;

// counting numnber of words

const countWords = textArea.value.trim().split(/\s+/)
console.log(countWords)
const filterWords = countWords.filter(function (word) {return word !== '';})
wordCount.textContent=filterWords.length;





//counting total number of character inputs

    const numberOfCharacters = textArea.value.length;
    characters.textContent= numberOfCharacters;

// counting number of characters left for twitter

    const twitterCharsLeft = 280-numberOfCharacters;
    twitter.textContent= twitterCharsLeft;
//indicating red for limit exceed
    twitterCharsLeft<0 ? twitter.classList.add('limit-exceeded') : twitter.classList.remove('limit-exceeded')  ;
    
//counting number of characters left for facebook

    const faceBookCharsLeft =2200-numberOfCharacters;
    faceBook.textContent= faceBookCharsLeft;
//indicating red for limit exceed
    faceBookCharsLeft<0 ? faceBook.classList.add('limit-exceeded') : faceBook.classList.remove('limit-exceeded')  ;

  

};


