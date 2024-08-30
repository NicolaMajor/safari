$(document).ready(function() {
    const animals = ['lion', 'elephant', 'giraffe', 'zebra', 'rhino', 'hippo', 'cheetah', 'leopard', 'buffalo', 'ostrich'];

    function getRandomAnimal() {
        return animals[Math.floor(Math.random() * animals.length)];
    }

    function spinReel(reelId, callback) {
        $(reelId).animate({ top: '-150px' }, 500, function() {
            const animal = getRandomAnimal();
            $(reelId).css('background-image', `url(images/${animal}.jpg)`);
            $(reelId).css('top', '0px'); // Reset position after animation
            if (callback) callback(animal);
        });
    }

    $('#spinButton').click(function() {
        $('#message').text('');

        spinReel('#reel1', function(result1) {
            spinReel('#reel2', function(result2) {
                spinReel('#reel3', function(result3) {
                    if (result1 === result2 && result2 === result3) {
                        $('#message').text('You are a winner!');
                    } else {
                        $('#message').text('Try again!');
                    }
                });
            });
        });
    });
});
