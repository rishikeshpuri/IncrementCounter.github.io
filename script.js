const counters = document.querySelectorAll('.counter');
counters.forEach( (curCounter) => {
    // console.log(curCounter);
    curCounter.innerHTML=0;

const updateCounter = () => {
    const targetCount = +curCounter.getAttribute('data-target'); // dataType -> String, 
                                                                //  So i am converting it into Number by using "+" operator
    // console.log(targetCount);

    const startingCount = Number(curCounter.innerHTML) //2way of converting String to Number
    const incrementNum = targetCount/100;

    if(startingCount < targetCount){
        curCounter.innerHTML = `${Math.round(startingCount + incrementNum)}`;
        setTimeout(updateCounter,10);
    }
    else{
        curCounter.innerHTML=targetCount;
    }
}

    updateCounter();
} );