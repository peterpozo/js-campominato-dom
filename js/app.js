const eleSquares = document.querySelector('.squares');
const eleStartScreen = document.querySelector('.start-screen');
const eleSelector = document.querySelector('.selector');
const eleButton = document.getElementById('button');
const eleLevel = document.getElementById ('level');

function levelSelector(levelIndex){
    for (i=1; i<=levelIndex; i++){
        const sq = document.createElement('div');
        sq.innerHTML += [i]
        sq.classList.add('sq');
        eleSquares.append(sq);

        if (levelIndex == 100) {
            sq.style.width = "calc(100% / 10)"
            sq.style.height = "calc(100% / 10)"
        } else if (levelIndex == 81) {
            sq.style.width = "calc(100% / 9)"
            sq.style.height = "calc(100% / 9)"
        } else {
            sq.style.width = "calc(100% / 7)"
            sq.style.height = "calc(100% / 7)"
        }

        sq.addEventListener('click', function(){
            this.classList.toggle('active');
        })
    }
}

levelSelector (100);



eleButton.addEventListener('click', function(){
    eleSquares.classList.remove('hidden');
    eleSelector.classList.remove('hidden');
	eleStartScreen.classList.add('hidden');
    eleSquares.replaceChildren()

    eleSquares.innerHTML = "";  


    let levelIndex
    if (eleLevel.value == 1){
        levelIndex = 100
    } else if (eleLevel.value == 2){
        levelIndex = 81
    } else {
        levelIndex = 49
    }

    levelSelector(levelIndex);
})