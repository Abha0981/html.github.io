let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 60,
    speed = 0;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(hsl(314, 100%, 50%) ${progressStartValue * 3.6}deg,#a9c9e5 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
}, speed);