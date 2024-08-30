$(document).ready(function() {
    const animals = ['lion', 'elephant', 'giraffe', 'zebra', 'rhino', 'hippo', 'cheetah', 'leopard', 'buffalo', 'ostrich'];

    function getRandomAnimal() {
        return animals[Math.floor(Math.random() * animals.length)];
    }

    function spinReel(reelId, callback) {
        const animal = getRandomAnimal();
        $(reelId).css('background-image', `url(images/${animal}.png)`);

        // Animate spinning downwards for 3 seconds
        $(reelId).animate({ top: '-450px' }, 3000, 'linear', function() {
            $(reelId).css('top', '0px'); // Reset position after animation
            if (callback) callback(animal);
        });
    }

    $('#spinButton').click(function() {
        $('#message').text('');

        const results = [];
        let remainingReels = 3;

        // Spin all three reels
        spinReel('#reel1', function(result1) {
            results.push(result1);
            remainingReels--;
            if (remainingReels === 0) {
                checkResults(results);
            }
        });

        spinReel('#reel2', function(result2) {
            results.push(result2);
            remainingReels--;
            if (remainingReels === 0) {
                checkResults(results);
            }
        });

        spinReel('#reel3', function(result3) {
            results.push(result3);
            remainingReels--;
            if (remainingReels === 0) {
                checkResults(results);
            }
        });

        function checkResults(results) {
            if (results[0] === results[1] && results[1] === results[2]) {
                $('#message').text('Hip Hippo Horay! You are a Winner!');
            } else {
                $('#message').text('Sorry, you didn\'t win this time :(');
            }
        }
    });
});
