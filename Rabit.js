var whiteRabbit = document.getElementById("rabbit");

var rabbitDownKeyframes = new KeyframeEffect(
    whiteRabbit, [
        { transform: 'translateY(0%)' },
        { transform: 'translateY(100%)' }
    ], { duration: 3000, fill: 'forwards' }
);

var rabbitDownAnimation = new Animation(rabbitDownKeyframes, document.timeline);

// On tap or click,
whiteRabbit.addEventListener("mousedown", downHeGoes, false);
whiteRabbit.addEventListener("touchstart", downHeGoes, false);

// Trigger a single-fire animation
function downHeGoes(event) {

    // Remove those event listeners
    whiteRabbit.removeEventListener("mousedown", downHeGoes, false);
    whiteRabbit.removeEventListener("touchstart", downHeGoes, false);

    // Play rabbit animation
    rabbitDownAnimation.play();

}