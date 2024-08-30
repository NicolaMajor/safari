$(document).ready(function() {
    const animals = ['lion', 'elephant', 'giraffe', 'zebra', 'rhino', 'hippo', 'cheetah', 'leopard', 'buffalo', 'ostrich'];
    
    let spinCount = 0;

    function getRandomAnimal() {
        return animals[Math.floor(Math.random() * animals.length)];
    }

    function spinReel(reelId) {
        const animal = getRandomAnimal();
        $(reelId).css('background-image', `url(images/${animal}.jpg)`);
        return animal;
    }

    $('#spinButton').click(function() {
        spinCount++;
        $('#message').text('');

        const result1 = spinReel('#reel1');
        const result2 = spinReel('#reel2');
        const result3 = spinReel('#reel3');

        if (spinCount % 3 === 0) {
            $('#reel1').css('background-image', `url(images/${result1}.jpg)`);
            $('#reel2').css('background-image', `url(images/${result1}.jpg)`);
            $('#reel3').css('background-image', `url(images/${result1}.jpg)`);
            $('#message').text('You are a winner!');
        } else if (result1 === result2 && result2 === result3) {
            $('#message').text('You are a winner!');
        }
    });
});
