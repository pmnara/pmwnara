console.log('js active');
const wordCount = document.querySelector('.stat__number');

const textArea = document.querySelector('.textarea');

const characters = document.querySelector('.stat__number--characters');

const twitter = document.querySelector('.stat__number--twitter')

const faceBook= document.querySelector('.stat__number--facebook')


textArea.addEventListener('input', inputHandler);

// textArea.addEventListener('input', twitterBalance);




function inputHandler (){
//warning for malicious code writers

if(textArea.value.includes('<script>')){
    alert ('You are can\'t use malicious code in the text');
    textArea.value = textArea.value.replace('<script>', '');
}


// counting numnber of words

    let numberOfWords = textArea.value.split(' ').length;
    console.log(textArea.value.length)
    if(textArea.value.length===0) numberOfWords =0;
   
    wordCount.textContent= numberOfWords;

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



// function twitterBalance (){
//    const twitterLimit = parseInt(twitter.textContent);
//    console.log(typeof twitterLimit );
//    let typedLetter = parseInt (totalCharaterInputs);

//    console.lgo(typedLetter);

//    let remaining = twitterLimit-parseInt(totalCharaterInputs);

   

// }
