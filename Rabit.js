var whiteRabbit = document.getElementById("rabbit");

var rabbitDownKeyframes = new KeyframeEffect(
    whiteRabbit, [
        { transform: 'translateY(0%)' },
        { transform: 'translateY(100%)' }
    ], { duration: 3000, fill: 'forwards' }
);

var rabbitDownAnimation = new Animation(rabbitDownKeyframes, document.timeline);



// Trigger a single-fire animation
function downHeGoes(_event) {


    rabbitdown(rabbitDownAnimation.play());

    // Play rabbit animation


}

function rabbitdown() {
    whiteRabbit.removeEventListener("mousedown", downHeGoes, true);
    whiteRabbit.removeEventListener("touchstart", downHeGoes, true);
}