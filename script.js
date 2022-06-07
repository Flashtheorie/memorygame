const cards = document.querySelectorAll('.tiles');
function getRandomInt(max) {

    return Math.floor(Math.random() * max);
  }

let apple = 0;
let orange = 0;
let kiwi = 0;
let framboise = 0;
let fraise = 0;
let banane = 0;
let raisin = 0;
let citron = 0;

function flipCard(e) {
    card = e.target
  card.classList.toggle('flip');
  card.style.backgroundSize = '70%'
  card.style.backgroundPosition = 'center'
  card.style.backgroundRepeat = 'no-repeat'
  /*
 setTimeout(function(){
    card.style.backgroundSize = '100%'
    card.classList.toggle('flip');
    card.style.backgroundImage = 'url("assets/potato-6.png")';
      }, 1000)
      */
  
  
}

cards.forEach(function(card) {
    card.addEventListener('click', flipCard);
    
    });



    document.getElementById('launchGame').addEventListener('click', function(){
        document.getElementById('launchGame').style.display = 'none';
        document.getElementById('resetGame').style.display = 'block';
        let cards = document.querySelectorAll('.tiles');


        fruits = [
            '🍋', 
            '🍋', 
            '🍒',
            '🍒',
            '🍌',
            '🍌',
            '🍉',
            '🍉',
            '🍓',
            '🍓',
            '🍐',
            '🍐',
            '🍈',
            '🍈',
            '🍇',
            '🍇'


            
        
        ];
        //const shuffledArray = fruits.sort((a, b) => 0.5 - Math.random());
        

        

        cards.forEach(function(card) {
            let indexfruits = 0;
            

            let randomElement = fruits[Math.floor(Math.random() * fruits.length)];
            card.innerHTML = fruits[indexfruits];
            indexfruits++;

            
           // console.log(randomElement)
            fruits.splice(randomElement, 1)
            //console.log(fruits)

            
        card.style.background = 'none';
        card.style.backgroundColor = '#f1c40f';
            card.classList.add('flip');
           
            
            setTimeout(function(){
                card.classList.remove('flip')
                card.classList.add('cardoff');
                //card.style.backgroundImage = 'url("assets/potato-6.png")';
                card.style.backgroundSize = '100%'
            }, 1000)
           // console.log(boucle)

             
            }); // Fin du foreach
            
// timer 
/*
let temps = 1
const timerElement = document.getElementById("timer")

function diminuerTemps() {
  timerElement.innerText = temps + "s"
  temps++;
}

setInterval(diminuerTemps, 1000)

*/
    })


    document.getElementById('resetGame').addEventListener('click', function(){
    document.location.reload();
    })