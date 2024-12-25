// Countdown Timer
function startCountdown() {
    const christmasDate = new Date(new Date().getFullYear(), 11, 25); // December 25
    const timerDisplay = document.getElementById("timer-display");

    function updateCountdown() {
        const now = new Date();
        const timeDifference = christmasDate - now;

        if (timeDifference <= 0) {
            timerDisplay.textContent = "Merry Christmas! 🎄🎅✨";
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        // Dynamic timer color change
        const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];
        timerDisplay.style.color = colors[Math.floor(Math.random() * colors.length)];
        timerDisplay.textContent = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Snowflake Animation
function createSnowflakes() {
    const snowContainer = document.querySelector(".snow-container");

    function generateSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.textContent = "❄";

        // Randomize position and size
        snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Randomize the duration between 5s to 10s
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Random size between 10px to 20px

        snowContainer.appendChild(snowflake);

        // Remove snowflake after animation ends
        snowflake.addEventListener("animationend", () => {
            snowContainer.removeChild(snowflake);
        });
    }

    // Generate snowflakes every 500ms
    setInterval(generateSnowflake, 500);
}

// Gift-Catching Game
function startGiftCatchingGame() {
    const gameContainer = document.getElementById("game-container");
    const basket = document.createElement("div");
    const gift = document.createElement("div");

    basket.id = "basket";
    gift.id = "gift";

    gameContainer.appendChild(basket);
    gameContainer.appendChild(gift);

    // Basket movement
    let basketPosition = 50;
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft" && basketPosition > 0) {
            basketPosition -= 5;
        } else if (event.key === "ArrowRight" && basketPosition < 100) {
            basketPosition += 5;
        }
        basket.style.left = `${basketPosition}%`;
    });

    // Gift falling logic
    function dropGift() {
        let giftPosition = 0;
        const giftDropInterval = setInterval(() => {
            giftPosition += 1;
            gift.style.top = `${giftPosition}%`;

            // Check for collision
            const basketBounds = basket.getBoundingClientRect();
            const giftBounds = gift.getBoundingClientRect();

            if (
                giftBounds.bottom >= basketBounds.top &&
                giftBounds.left >= basketBounds.left &&
                giftBounds.right <= basketBounds.right
            ) {
                clearInterval(giftDropInterval);
                alert("You caught a gift! 🎁");
                resetGift();
            } else if (giftPosition >= 100) {
                clearInterval(giftDropInterval);
                resetGift();
            }
        }, 50);
    }

    function resetGift() {
        giftPosition = 0;
        gift.style.top = "-10%";
        gift.style.left = `${Math.random() * 90}%`;
        setTimeout(dropGift, 1000); // Drop a new gift after a delay
    }

    resetGift();
}

// Santa Claus (No Animation)
function staticSanta() {
    const santa = document.querySelector('img[alt="Santa Claus"]');
    const santaContainer = document.querySelector('.feature'); // Ensure Santa stays inside the container
    if (santa && santaContainer) {
        // Ensure Santa stays inside the frame/container
        santa.style.position = "absolute";
        santa.style.top = "10%";
        santa.style.left = "50%";
        santa.style.transform = "translateX(-50%)";
        santa.style.width = "150px";

        // Adjust for small screens
        if (window.innerWidth < 600) {
            santa.style.width = "120px";
        }
        if (window.innerHeight < 500) {
            santa.style.top = "5%";
        }
    }
}

// New Year Countdown Timer
function startNewYearCountdown() {
    const newYearDate = new Date(new Date().getFullYear() + 1, 0, 1); // January 1st of the next year
    const newYearTimerDisplay = document.getElementById("new-year-timer-display");

    function updateNewYearCountdown() {
        const now = new Date();
        const timeDifference = newYearDate - now;

        if (timeDifference <= 0) {
            newYearTimerDisplay.textContent = "Happy New Year! 🎉✨";
            clearInterval(newYearCountdownInterval);
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        newYearTimerDisplay.textContent = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    }

    const newYearCountdownInterval = setInterval(updateNewYearCountdown, 1000);
    updateNewYearCountdown();
}

// Initialize Everything
document.addEventListener("DOMContentLoaded", () => {
    startCountdown();            // Start the Christmas countdown timer
    createSnowflakes();          // Generate snowflakes
    staticSanta();               // Ensure Santa stays in place
    startGiftCatchingGame();     // Initialize the gift-catching game
    startNewYearCountdown();    // Start the New Year countdown
});
