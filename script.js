const inputs =document.querySelector('.inputs');
var hint =document.querySelector('.hint span');
var wrongLetter =document.querySelector('.wrong-letter span');
var guessLeft=document.querySelector('.guess-left span')
var typingInput=document.querySelector('.typing-input');
var word;
let incorrect =[];
let correct =[];
let maxGuess;
let globalMaxGuess;
function randomWorld(){
    let ranObj=wordList[Math.floor(Math.random() * wordList.length)]
   word=ranObj.word
   //reseting in random word for each maxguess,incorrect,correct arrays
   maxGuess =10 
   incorrect=[];
   correct=[];
    console.log(word)
     hint.innerText=ranObj.hint;
     guessLeft.innerText=maxGuess
    let html=""
    for(let i=0;i<word.length;i++){
        html+=`  
        <input type="text" disabled>
        `;
    }
    inputs.innerHTML=html;

}
randomWorld()

function initGame(e){
    let key=e.target.value;
    if(key.match(/^[A-Za-z]+$/)&& !incorrect.includes(key)&& !correct.includes(key))
   { 
    if(word.includes(key))
   { 
    for (let i = 0; i < word.length; i++) {
        if(word[i]===key)
       {
         correct.push(key)
        inputs.querySelectorAll('input')[i].value=key 
      }
    }  
   
    
     }
      else{ 
         maxGuess--;
        incorrect.push(key);
    }
  }
  
  guessLeft.innerText=maxGuess
  //console.log(incorrect);
  wrongLetter.innerText=incorrect
  
  typingInput.value="";
   
  Rules();
 
}

function Rules(){
    setTimeout(()=>{
     
        if(correct.length === word.length){
         
          alert(`Congrats! the word was ${word.toUpperCase()}`);
          randomWorld()
      }
      else if(maxGuess<1){
          alert('Game over')
          for (let index = 0; index < word.length; index++) { 
                 inputs.querySelectorAll('input')[index].value=word[index];   
             }
         }
       });
}
typingInput.addEventListener('input',initGame)
document.addEventListener('keydown',()=>typingInput.focus())
