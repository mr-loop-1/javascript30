
const allKeys = document.querySelectorAll('.key');
const allAudio =document.querySelectorAll('audio');

// console.log(allAudio);

const keyToData = new Map([['A','65'],['S','83'],['D','68'],['F','70'],['G','71'],['H','72'],['J','74'],['K','75'],['L','76']])


const keyHandler = (ev) => {
    const keyPressed = ev.key.toUpperCase();

    if(keyToData.has(keyPressed)) {

        const audioEle = document.querySelector(`audio[data-key="${keyToData.get(keyPressed)}"]`); 

        const btnEle = document.querySelector(`.key[data-key="${keyToData.get(keyPressed)}"]`);

        btnEle.addEventListener('transitionend', (e) => {
            e.target.classList.remove('playing');
        })

        audioEle.currentTime = 0;       // for continous pressing
        audioEle.play();

        btnEle.classList.add('playing');


        // let iAudio, iBtn;
        // allAudio.forEach((item, idx) => {
        //     if(item.dataset.key === keyToData.get(keyPressed)) iAudio = idx;
        // })
        // allKeys.forEach((item, idx) => {
        //     if(item.dataset.key === keyToData.get(keyPressed)) iBtn = idx;
        // })

        // console.log(iAudio);
        // allAudio[iAudio].play();
        // allKeys[iBtn].classList.add('playing');
        // allAudio[iAudio].pause();
        // allKeys[iBtn].classList.remove('playing');
    }
}


document.addEventListener('keypress', keyHandler);
