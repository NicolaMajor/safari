$(document).ready(function() {
    const animals = ['lion', 'elephant', 'giraffe', 'zebra', 'rhino', 'hippo', 'cheetah', 'leopard', 'buffalo', 'ostrich'];

    function getRandomAnimal() {
        return animals[Math.floor(Math.random() * animals.length)];
    }

    function spinReel(reelId, callback) {
        // Create a new animal to ensure it shows during the animation
        const startAnimal = getRandomAnimal();
        const endAnimal = getRandomAnimal();

        // Set initial image and start spinning
        $(reelId).css('background-image', `url(images/${startAnimal}.png)`);

        // Ensure the animation is smooth and fast
        $(reelId).css('background-image', `url(images/${endAnimal}.jpg)`);
        $(reelId).animate({ top: '-450px' }, 1500, 'linear', function() {
            $(reelId).css('top', '0px'); // Reset position after animation
            $(reelId).css('background-image', `url(images/${endAnimal}.png)`); // Show final image
            if (callback) callback(endAnimal);
        });
    }

    $('#spinButton').click(function() {
        $('#message').text('');

        const results = [];
        let remainingReels = 3;

        // Spin all three reels with a slight delay to make them spin separately
        spinReel('#reel1', function(result1) {
            results.push(result1);
            remainingReels--;
            if (remainingReels === 0) {
                checkResults(results);
            }
        });

        setTimeout(() => {
            spinReel('#reel2', function(result2) {
                results.push(result2);
                remainingReels--;
                if (remainingReels === 0) {
                    checkResults(results);
                }
            });
        }, 100); // Delay for the second reel

        setTimeout(() => {
            spinReel('#reel3', function(result3) {
                results.push(result3);
                remainingReels--;
                if (remainingReels === 0) {
                    checkResults(results);
                }
            });
        }, 200); // Delay for the third reel

        function checkResults(results) {
            if (results[0] === results[1] && results[1] === results[2]) {
                $('#message').text('Hip Hippo Horay! You are a Winner!');
            } else {
                $('#message').text('Sorry, you didn\'t win this time :(');
            }
        }
    });
});
