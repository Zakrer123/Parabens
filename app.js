function red() {
    const button = document.querySelector('.wrong');

        button.addEventListener('click', () => {
            button.style.backgroundColor = 'red';
            button.style.color = 'yellow';
        });
};

function green() {
    const button = document.querySelector('.correct');

        button.addEventListener('click', () => {
            button.style.backgroundColor = 'green';
            button.style.color = 'white';

            var img = document.createElement('img')
            img.setAttribute('src', './images/cat.png');
            document.body.appendChild(img);
        });
};

document.getElementsByClassName("confetti")[0].addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    let container = document.getElementsByClassName("button-wrapper")[0];
    container.appendChild(canvas);

    let confettiButton = confetti.create(canvas);
    confettiButton({
        particleCount: 200,
        spread: 70,
        startVelocity: 99,
        ticks: 900,
        origin: { y: 0.6 },
        colors: ['#ff0', '#f00', '#0f0', '#00f', '#ff00ff', '#00ffff']
    }).then(() => {
            container.removeChild(canvas);
    });
});

