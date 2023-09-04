
let timer = 60;
let hitForBubble = 0;
let score = 0;

document.getElementById('timer').textContent = timer;
document.getElementById('hit').textContent = hitForBubble;
document.getElementById('score').textContent = score;


//for device width wise bubbles show in the card
let deviceWithWiseMakeBubbles = () => {
    let deviceWidth = window.innerWidth;
        console.log(deviceWidth);
        if (deviceWidth <= 280) {
            makeBubbles(21);
        } else if (deviceWidth > 280 && deviceWidth < 576) {
            makeBubbles(28);
        } else if (deviceWidth >= 576 && deviceWidth < 768) {
            makeBubbles(42);
        } else if (deviceWidth >= 768 && deviceWidth < 1050) {
            makeBubbles(70);
        } else {
            makeBubbles(119);
        }
}
//end for device width wise bubbles show in the card

//for making bubbles 
let makeBubbles = (num) => {
    let bubbles = "";
    for (let i = 1; i <= num; i++) {
        bubbles += ` <div class="bubbles">
                                <h4>${Math.floor(Math.random() * 10)}</h4>
                    </div>`;
    }
    document.getElementById('card-body').innerHTML = bubbles;
}
//end for making bubbles 

//for timer
let setTimer = () => {
    let time = setInterval(() => {
        if (timer > 0) {
            document.getElementById('timer').textContent = --timer;
        } else {
            clearInterval(time);

            let congrats = `<div class="scoreboard-congrats">
                <div class="congrats">
                    <img src="congratulations.png" alt="">
                </div>
                <h2>Your score is ${score}.</h2>
                <button class="btn">Play Again</button>
            </div>`;


            let tryAgain = `<div class="scoreboard-sad">
                    <div class="sad">
                        <img src="sad.png" alt="">
                    </div>
                <h2>Oops ! </h2>
                <h3>Your Score is ${score}.</h3>
                <button class="btn">Try Again</button>
            </div>`;

            if (score > 0) {
                document.getElementById('card-body').innerHTML = congrats;
                document.querySelector('button').addEventListener('click', () => {
                    score = 0;
                    timer = 60;
                    document.getElementById('timer').textContent = timer;
                    document.getElementById('score').textContent = score;
                    setTimer();
                    showhitForBubble();
                    makeBubbles();
                });
            } else {
                document.getElementById('card-body').innerHTML = tryAgain;
                document.querySelector('button').addEventListener('click', () => {
                    score = 0;
                    timer = 60;
                    document.getElementById('timer').textContent = timer;
                    document.getElementById('score').textContent = score;
                    setTimer();
                    showhitForBubble();
                    makeBubbles();
                });
            }
        }

    }, 1000);

}
//end for timer


//for hit  
let showhitForBubble = () => {
    hitForBubble = Math.floor(Math.random() * 10);
    document.getElementById('hit').textContent = hitForBubble;
}
//end for hit  


//for setScore
let setScore = () => {
    score += 10;
    document.getElementById('score').textContent = score;
}
//end for setScore

let cliked = () => {
    document.querySelector('#card-body').addEventListener('click', (bubble) => {
        let clickedBubbleNumber = Number(bubble.target.textContent);
        // console.log(clickedBubbleNumber,typeof(clickedBubbleNumber));
        if (clickedBubbleNumber === hitForBubble) {
            setScore();
            showhitForBubble();
            deviceWithWiseMakeBubbles()
        } else if (clickedBubbleNumber === NaN) {
            console.log(document.querySelector('#card-body').removeEventListener('click', cliked));
        }

    });
}


window.addEventListener('resize', () => {
    deviceWithWiseMakeBubbles();     
});

cliked();
setTimer();
showhitForBubble();
deviceWithWiseMakeBubbles()