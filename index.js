const options = document.querySelectorAll('#option')
const playerText = document.querySelector('.h1-player')
const comText = document.querySelector('.h1-com')
const pemenangText = document.querySelector('.pemenang')
const hand = ['✊','🖐','✌']
const btnScore = document.querySelectorAll('.btn')
options.forEach((option,idx)=> {
    option.addEventListener('click',() => {
        setTimeout(() => {
            playerText.innerHTML = option.innerHTML
            comText.innerHTML = hand[randomCom()]     
            winnerLoseSet()
        },400);
    })
    function randomCom() {
        return Math.floor(Math.random() * hand.length)
    }
})

function winnerLoseSet() {
    if (playerText.textContent === '✊' && comText.textContent === '🖐') {
        pemenangText.innerHTML = 'Com Menang'
        btnScore[1].innerHTML++
    }else if  (playerText.textContent === '✊' && comText.textContent === '✌') {
        pemenangText.innerHTML = 'Player Menang'
        btnScore[0].innerHTML++
    }else if  (playerText.textContent === '✊' && comText.textContent === '✊') {
        pemenangText.innerHTML = 'Seri'
    }else if  (playerText.textContent === '✌' && comText.textContent === '🖐') {
        pemenangText.innerHTML = 'Player Menang'
        btnScore[0].innerHTML++
    }else if  (playerText.textContent === '✌' && comText.textContent === '✊') {
        pemenangText.innerHTML = 'Com Menang'
        btnScore[1].innerHTML++
    }else if  (playerText.textContent === '✌' && comText.textContent === '✌') {
        pemenangText.innerHTML = 'Seri'
    }else if  (playerText.textContent === '🖐' && comText.textContent === '✌') {
        pemenangText.innerHTML = 'Com Menang'
        btnScore[1].innerHTML++
    }else if  (playerText.textContent === '🖐' && comText.textContent === '✊') {
        pemenangText.innerHTML = 'Player Menang'
        btnScore[0].innerHTML++
    }else if  (playerText.textContent === '🖐' && comText.textContent === '🖐') {
        pemenangText.innerHTML = 'Seri'  
    
    }
}