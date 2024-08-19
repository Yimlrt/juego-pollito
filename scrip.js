const alternatives = [
  {text:"", images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSFWikxW29GRR5b5lacT8ZP13S8DX3AL_uOg&s"},
  {text:"Te prometo que solo uno", images:"https://i.pinimg.com/originals/77/c5/1f/77c51f52672bf045d924798d3a0898fb.gif"},
  {text:"Piénsalo de nuevo", images:"https://i.pinimg.com/originals/ae/b8/21/aeb821a50e33dff74cdeee4cea89c1a4.gif"},
  {text:"Vamos, atrévete a decir que sí", images:"https://i.pinimg.com/originals/d1/22/cb/d122cbf31e6601bf19f0673b2b751b5f.gif"},
  {text:"dime q si😭😭😭", images:"https://i.pinimg.com/originals/30/69/3a/30693a38782413b6fa6359c1c6cb125c.gif"}
];
const ohyes = {text:"Sabía que aceptarías", images:"https://i.pinimg.com/originals/4b/04/46/4b04463573210325d8ec064faf51a950.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
  console.log(item);
  cat.src = item.images;
  text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
  count = 0;
  updateDisplay(alternatives[count]);
  buttons.forEach(btn => btn.style.display = 'inline-block');
  errorButton.style.display = 'none';
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
      if(button.textContent === 'SÍ'){
          updateDisplay(ohyes);
          buttons.forEach(btn => btn.style.display = 'none');
      }
      if (button.textContent === 'NO'){
          count++;
          if(count < alternatives.length){
              updateDisplay(alternatives[count]);
          } else {
              buttons.forEach(btn => btn.style.display = 'none');
              errorButton.style.display = 'inline-block';
          }
      }
  });
});
