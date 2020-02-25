(function() {
    "use strict";
    // Buttons:
    const rules = document.getElementById('rules');
    const quit_rules = document.getElementById('exit-rules');
    const start_game = document.getElementById('start');

    // Game Data:
    let match = {
        players: ['Player 1', 'Player 2'],
        score: [0,0],
        curr_player: 0,
        cards_picked: 0,
        flipped: 0,
        game_end: 6
    };

    // Events regarding Rules:
    rules.addEventListener('click', function(e)  {
        e.preventDefault();
        document.getElementById('rule-info').setAttribute('class', 'visible');
    });

    quit_rules.addEventListener('click', function(e)    {
        e.preventDefault();
        document.getElementById('rule-info').setAttribute('class', 'invisible');
    });

    // Start Game:
    start_game.addEventListener('click', function(e)    {
        e.preventDefault();
        start_game.setAttribute('id', 'reset');
        start_game.innerHTML = 'Reset';
        document.getElementById('reset').addEventListener('click', function()  {
            location.reload();
        });
        match.curr_player = Math.round(Math.random());
        setupGame();
        
    });

    function setupGame() {
        // Added Styling:
        document.getElementById('player-info').style.backgroundColor = '#FFF8F0';
        document.getElementById('player-info').style.padding = '10px';
        document.getElementById('player-info').style.width = '500px';
        document.getElementById('player-info').style.height = 'auto';
        document.getElementById('player-info').style.margin = '0 auto';
        document.getElementById('player-info').style.marginTop = '20px';
        if (match.flipped == match.game_end)    {
            if (match.score[0] > match.score[1])    {
                document.getElementById('curr-player').innerHTML = `<h2>${match.players[0]} WON!</h2>`;
                document.getElementById('curr-player').style.color = '#92140C';
            } else  {
                document.getElementById('curr-player').innerHTML = `<h2>${match.players[1]} WON!</h2>`;
                document.getElementById('curr-player').style.color = '#92140C';
            }
        } else  {
            document.getElementById('curr-player').innerHTML = `<h4>${match.players[match.curr_player]}'s Turn</h4>`;
            document.getElementById('scores').innerHTML = `<h4>Player 1: ${match.score[0]} | Player 2: ${match.score[1]}</h4>`;
        }
    }

    // Pick Card:
    document.getElementById('card1').addEventListener('click', function()   {
        chooseCard('card1');
    });

    document.getElementById('card2').addEventListener('click', function()   {
        chooseCard('card2');
    });

    document.getElementById('card3').addEventListener('click', function()   {
        chooseCard('card3');
    });

    document.getElementById('card4').addEventListener('click', function()   {
        chooseCard('card4');
    });

    document.getElementById('card5').addEventListener('click', function()   {
        chooseCard('card5');
    });

    document.getElementById('card6').addEventListener('click', function()   {
        chooseCard('card6');
    });

    function chooseCard(cardPicked)   {
        console.log(`beginning: ${match.cards_picked}`);
        if (match.cards_picked < 2) {
            if (cardPicked === 'card1') {
                document.getElementById('card1').setAttribute('class', 'flipped');
                document.getElementById('circles1').setAttribute('src', 'images/card-circles.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card2') {
                document.getElementById('card2').setAttribute('class', 'flipped');
                document.getElementById('squares1').setAttribute('src', 'images/card-squares.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card3') {
                document.getElementById('card3').setAttribute('class', 'flipped');
                document.getElementById('circles2').setAttribute('src', 'images/card-circles.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card4') {
                document.getElementById('card4').setAttribute('class', 'flipped');
                document.getElementById('triangles1').setAttribute('src', 'images/card-triangles.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card5') {
                document.getElementById('card5').setAttribute('class', 'flipped');
                document.getElementById('triangles2').setAttribute('src', 'images/card-triangles.png');
                match.cards_picked++;
            }
            else    {
                document.getElementById('card6').setAttribute('class', 'flipped');
                document.getElementById('squares2').setAttribute('src', 'images/card-squares.png');
                match.cards_picked++;
            }
        }
        if (match.cards_picked >= 2) {
            console.log(`end: ${match.cards_picked}`);
            checkIfMatch();
        }
    }

    function checkIfMatch() {
        let selection = document.getElementsByClassName('flipped');
        if (selection.length < 2)   {
            // Do Nothing
        } else  {
            if ((selection[0].id === 'card1') && (selection[selection.length - 1].id === 'card3'))  {
                document.getElementById('circles1').setAttribute('class', 'match');
                document.getElementById('circles2').setAttribute('class', 'match');
                selection[0].setAttribute('class', 'done');
                selection[selection.length - 1].setAttribute('class', 'done');

                match.cards_picked = 0;
                match.score[match.curr_player] += 1;
                match.flipped += 2;

                document.getElementById('scores').innerHTML = '<h4>You made a match!</h4>';
            }
            else if ((selection[0].id === 'card2') && (selection[selection.length - 1].id === 'card6'))  {
                document.getElementById('squares1').setAttribute('class', 'match');
                document.getElementById('squares2').setAttribute('class', 'match');
                selection[0].setAttribute('class', 'done');
                selection[selection.length - 1].setAttribute('class', 'done');

                match.cards_picked = 0;
                match.score[match.curr_player] += 1;
                match.flipped += 2;

                document.getElementById('scores').innerHTML = '<h4>You made a match!</h4>';
            }
            else if ((selection[0].id === 'card4') && (selection[selection.length - 1].id === 'card5'))  {
                document.getElementById('triangles1').setAttribute('class', 'match');
                document.getElementById('triangles2').setAttribute('class', 'match');
                selection[0].setAttribute('class', 'done');
                selection[selection.length - 1].setAttribute('class', 'done');

                match.cards_picked = 0;
                match.score[match.curr_player] += 1;
                match.flipped += 2;

                document.getElementById('scores').innerHTML = '<h4>You made a match!</h4>';
            } 
            else  {
                console.log(selection.length);
                selection[0].setAttribute('class', 'unflipped');
                selection[selection.length - 1].setAttribute('class', 'unflipped');

                let images = document.getElementsByTagName('img');

                document.getElementById('scores').innerHTML = '<h4>No match was made...</h4>';

                setTimeout(function()   {
                    for (let i = 0; i < images.length; i++) {
                        if (images[i].className != 'match') {
                            images[i].setAttribute('src', 'images/card-back.png');
                        }
                    }
                }, 2000);
                match.cards_picked = 0;
                if  (match.curr_player == 0)  {
                    match.curr_player = 1;
                }
                else    {
                    match.curr_player = 0;
                }
            }
            console.log(match.flipped);
            setTimeout(function()   {
                setupGame();
            }, 2000);
        }
    }
}());