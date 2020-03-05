(function() {
    "use strict";
    const button_nav = document.getElementById('button-nav');
    const box = document.getElementById('pop-up');
    const card_box = document.getElementById('card-deck');
    let curr_state;

    // Game Data:
    let match = {
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        curr_player: 0,
        cards_picked: 0,
        flipped_cards: 0,
        theme_color: 'red',
        end_game_condition: 6
    };

    // Displays buttons BEFORE game starts:
    if (button_nav.className == "before")   {
        button_nav.innerHTML = '<button id="rules">Rules</button><button id="start">Start Game</button><button id="options">Options</button>';
    }

    // Click to display game rules:
    document.getElementById('rules').addEventListener('click', function(e)  {
        e.preventDefault();
        displayGameRules();

        // Click to exit rules:
        document.getElementById('exit-rules').addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.centered').style.padding = '160px 0';
            box.setAttribute('class', 'invisible');
            if (curr_state == 0)    {
                button_nav.setAttribute('class', 'before');
            } else  {
                button_nav.setAttribute('class', 'after');
            }
        });
    });

    // Click to display game options (Will only display BEFORE game starts):
    document.getElementById('options').addEventListener('click', function(e)    {
        e.preventDefault();
        displayGameOptions();

        // Click to exit options:
        document.getElementById('exit-options').addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.centered').style.padding = '160px 0';
            box.setAttribute('class', 'invisible');
            button_nav.setAttribute('class', 'before');
        });
    });

    // Click to Start Game:
    document.getElementById('start').addEventListener('click', function (e) {
        e.preventDefault();
        button_nav.className = 'after';
        button_nav.innerHTML = '<button id="reset">Reset</button>';
        displayScoreBox();

        // Reset Page: (This will reload the entire page)
        document.getElementById('reset').addEventListener('click', function()   {
            location.reload();
        });

        // Display Cards:
        displayCards();

        document.getElementById('card1').addEventListener('click', function()   {
            if (match.theme_color == 'red') {
                chooseRedCard('card1');
            } else if (match.theme_color == 'yellow')   {
                chooseYellowCard('card1');
            } else  {
                chooseBlueCard('card1');
            }
        });
    
        document.getElementById('card2').addEventListener('click', function()   {
            if (match.theme_color == 'red') {
                chooseRedCard('card2');
            } else if (match.theme_color == 'yellow')   {
                chooseYellowCard('card2');
            } else  {
                chooseBlueCard('card2');
            }
        });
    
        document.getElementById('card3').addEventListener('click', function()   {
            if (match.theme_color == 'red') {
                chooseRedCard('card3');
            } else if (match.theme_color == 'yellow')   {
                chooseYellowCard('card3');
            } else  {
                chooseBlueCard('card3');
            }
        });
    
        document.getElementById('card4').addEventListener('click', function()   {
            if (match.theme_color == 'red') {
                chooseRedCard('card4');
            } else if (match.theme_color == 'yellow')   {
                chooseYellowCard('card4');
            } else  {
                chooseBlueCard('card4');
            }
        });
    
        document.getElementById('card5').addEventListener('click', function()   {
            if (match.theme_color == 'red') {
                chooseRedCard('card5');
            } else if (match.theme_color == 'yellow')   {
                chooseYellowCard('card5');
            } else  {
                chooseBlueCard('card5');
            }
        });
    
        document.getElementById('card6').addEventListener('click', function()   {
            if (match.theme_color == 'red') {
                chooseRedCard('card6');
            } else if (match.theme_color == 'yellow')   {
                chooseYellowCard('card6');
            } else  {
                chooseBlueCard('card6');
            }
        });

        if (match.flipped_cards == match.end_game_condition)    {
            if (match.score[0] > match.score[1])    {
                box.innerHTML = `<h3>${match.players[0]} WON!</h3>`;
            } else  {
                box.innerHTML = `<h3>${match.players[1]} WON!</h3>`;
            }
        } else  {
            document.getElementById('p1').innerHTML = `<p>${match.score[0]}</p>`;
            document.getElementById('p2').innerHTML = `${match.score[1]}`;
        }
    });

    function displayGameRules() {
        if (button_nav.className == 'before')   {
            curr_state = 0;
        } else  {
            curr_state = 1;
        } 

        // Adding text:
        button_nav.setAttribute('class', 'invisible');
        box.setAttribute('class', 'rule-text');
        box.innerHTML = '<div><h3>Rules</h3><div id="rules-text"><p>By clicking start game, a player will be chosen by random to start. On their turn, each player will choose two cards. <strong>If the cards match, the current player gets a point and chooses again</strong>. However, if the cards <strong>do not match</strong>, the next player gets a try. The player with the most points after all cards have been matched, wins!</p></div><div id="exit-rules" class="reverse"><button>Okay</button></div></div>';

        // Stylizing:
        document.querySelector('.centered').style.padding = '140px 0';
        document.getElementById('rules-text').style.cssText = 'text-align: justify; padding: 10px 20px;';
        document.getElementById('exit-rules').style.cssText = 'text-align: center; margin: auto; padding: 10px 0;';
        box.querySelector('h3').style.textAlign = 'center';
        box.querySelector('h3').style.marginTop = '10px';
    }

    function displayGameOptions()   {
        // Adding text:
        button_nav.setAttribute('class', 'invisible');
        box.setAttribute('class', 'option-text');
        box.innerHTML = '<div><h3>Options</h3><div class="reverse"><h4>Theme Color</h4><div id="color-options"><button id="r" class="not-chosen">Red</button><button id="y" class="not-chosen">Yellow</button><button id="b" class="not-chosen">Blue</button></div></div><div id="exit-options" class="reverse"><button>Okay</button></div></div>';

        // Stylizing:
        let color_btns = box.querySelectorAll('#color-options button');
        document.getElementById('color-options').style.cssText = 'margin: 5px 0; text-align: center;';
        document.querySelector('.centered').style.padding = '120px 0';

        if (match.theme_color == 'red') {
            for (let i = 0; i < color_btns.length; i++) {
                if (color_btns[i].id == 'r')    {
                    color_btns[i].style.cssText = 'background-color: #ff6666; border-color: #f2f2f2; color: #f2f2f2;';
                    color_btns[i].className = 'chosen';
                }
            }
        } else if (match.theme_color == 'yellow')   {
            for (let i = 0; i < color_btns.length; i++) {
                if (color_btns[i].id == 'y')    {
                    color_btns[i].style.cssText = 'background-color: #e69900; border-color: #f2f2f2; color: #f2f2f2;';
                    color_btns[i].className = 'chosen';
                }
            }
        } else  {
            for (let i = 0; i < color_btns.length; i++) {
                if (color_btns[i].id == 'b')    {
                    color_btns[i].style.cssText = 'background-color: #0099cc; border-color: #f2f2f2; color: #f2f2f2;';
                    color_btns[i].className = 'chosen';
                }
            }
        }

        document.getElementById('exit-options').style.cssText = 'text-align: center; margin: auto; padding: 10px 0;';
        box.querySelector('h3').style.textAlign = 'center';
        box.querySelector('h3').style.marginTop = '10px';

        let h4 = box.querySelectorAll('h4');
        for (let i = 0; i < h4.length; i++) {
            h4[i].style.textAlign = 'center';
            h4[i].style.margin = '10px 0';
        }

        // Click to change theme color:
        document.getElementById('r').addEventListener('click', function(e)  {
            e.preventDefault();
            match.theme_color = 'red';
            document.querySelector('body').className = 'red';
            for (let i = 0; i < color_btns.length; i++)  {
                color_btns[i].className = 'not-chosen';
                color_btns[i].style.cssText = 'background-color: transparent; border-color: #ff6666; color: #ff6666;';
            } 
            document.getElementById('r').className = 'chosen';
            document.getElementById('r').style.cssText = 'background-color: #ff6666; border-color: #f2f2f2; color: #f2f2f2;';
        });

        document.getElementById('y').addEventListener('click', function(e)  {
            e.preventDefault();
            match.theme_color = 'yellow';
            document.querySelector('body').className = 'yellow';
            for (let i = 0; i < color_btns.length; i++)  {
                color_btns[i].className = 'not-chosen';
                color_btns[i].style.cssText = 'background-color: transparent; border-color: #e69900; color: #e69900;';
            }
            document.getElementById('y').className = 'chosen';
            document.getElementById('y').style.cssText = 'background-color: #e69900; border-color: #f2f2f2; color: #f2f2f2;';
        });

        document.getElementById('b').addEventListener('click', function(e)  {
            e.preventDefault();
            match.theme_color = 'blue';
            document.querySelector('body').className = 'blue';
            for (let i = 0; i < color_btns.length; i++)  {
                color_btns[i].className = 'not-chosen';
                color_btns[i].style.cssText = 'background-color: transparent; border-color: #0099cc; color: #0099cc;';
            } 
            document.getElementById('b').className = 'chosen';
            document.getElementById('b').style.cssText = 'background-color: #0099cc; border-color: #f2f2f2; color: #f2f2f2;';
        });
    }

    function displayScoreBox()  {
        box.setAttribute('class', 'score-text');
        box.innerHTML = '<div><h3>Scores</h3><div id="score-box"><div id="p1-div"><h4>Player One</h4></div><div id="p1"><p>0</p></div><div id="p2-div"><h4>Player Two</h4></div><div id="p2"><p>0</p></div></div></div>';

        document.querySelector('.score-text h3').style.textAlign = 'center';
        document.getElementById('score-box').style.cssText = 'height: 10px; margin: 5px auto;';
        document.getElementById('p1-div').style.cssText = 'text-align: justify; width: 25%; float: left;';
        document.getElementById('p2-div').style.cssText = 'text-align: justify; width: 25%; float: left;';
        document.getElementById('p1').style.cssText = 'text-align: justify; width: 25%; float: left;';
        document.getElementById('p2').style.cssText = 'text-align: justify; width: 25%; float: left;';

        // Stylizing:
        document.querySelector('.centered').style.padding = '20px 0';
    }

    function displayCards() {
        document.querySelector('.main-container').style.width = '100%';
        card_box.setAttribute('class', 'cards');
        if (match.theme_color == 'red') {
            displayRedCards();
        } else if (match.theme_color == 'yellow')   {
            displayYellowCards();
        } else  {
            displayBlueCards();
        }
    }
    
    function displayRedCards()  {
        card_box.innerHTML = '<div class="all-cards"><div id="card1" class="unflipped"><img src="images/green-back-red.png" id="circles1" class="none"></div><div id="card2" class="unflipped"><img src="images/green-back-red.png" id="squares1" class="none"></div><div id="card3" class="unflipped"><img src="images/green-back-red.png" id="circles2" class="none"></div><div id="card4" class="unflipped"><img src="images/green-back-red.png" id="triangles1" class="none"></div><div id="card5" class="unflipped"><img src="images/green-back-red.png" id="triangles2" class="none"></div><div id="card6" class="unflipped"><img src="images/green-back-red.png" id="squares2" class="none"></div></div>';
    }

    function displayYellowCards()  {
        card_box.innerHTML = '<div class="all-cards"><div id="card1" class="unflipped"><img src="images/purple-back-yellow.png" id="circles1" class="none"></div><div id="card2" class="unflipped"><img src="images/purple-back-yellow.png" id="squares1" class="none"></div><div id="card3" class="unflipped"><img src="images/purple-back-yellow.png" id="circles2" class="none"></div><div id="card4" class="unflipped"><img src="images/purple-back-yellow.png" id="triangles1" class="none"></div><div id="card5" class="unflipped"><img src="images/purple-back-yellow.png" id="triangles2" class="none"></div><div id="card6" class="unflipped"><img src="images/purple-back-yellow.png" id="squares2" class="none"></div></div>';
    }

    function displayBlueCards()  {
        card_box.innerHTML = '<div class="all-cards"><div id="card1" class="unflipped"><img src="images/orange-back-blue.png" id="circles1" class="none"></div><div id="card2" class="unflipped"><img src="images/orange-back-blue.png" id="squares1" class="none"></div><div id="card3" class="unflipped"><img src="images/orange-back-blue.png" id="circles2" class="none"></div><div id="card4" class="unflipped"><img src="images/orange-back-blue.png" id="triangles1" class="none"></div><div id="card5" class="unflipped"><img src="images/orange-back-blue.png" id="triangles2" class="none"></div><div id="card6" class="unflipped"><img src="images/orange-back-blue.png" id="squares2" class="none"></div></div>';
    }

    function chooseRedCard(cardPicked)   {
        console.log(`beginning: ${match.cards_picked}`);
        if (match.cards_picked < 2) {
            if (cardPicked === 'card1') {
                document.getElementById('card1').setAttribute('class', 'flipped');
                document.getElementById('circles1').setAttribute('src', 'images/green-front-circles-red.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card2') {
                document.getElementById('card2').setAttribute('class', 'flipped');
                document.getElementById('squares1').setAttribute('src', 'images/green-front-squares-red.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card3') {
                document.getElementById('card3').setAttribute('class', 'flipped');
                document.getElementById('circles2').setAttribute('src', 'images/green-front-circles-red.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card4') {
                document.getElementById('card4').setAttribute('class', 'flipped');
                document.getElementById('triangles1').setAttribute('src', 'images/green-front-triangles-red.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card5') {
                document.getElementById('card5').setAttribute('class', 'flipped');
                document.getElementById('triangles2').setAttribute('src', 'images/green-front-triangles-red.png');
                match.cards_picked++;
            }
            else    {
                document.getElementById('card6').setAttribute('class', 'flipped');
                document.getElementById('squares2').setAttribute('src', 'images/green-front-squares-red.png');
                match.cards_picked++;
            }
        }
        if (match.cards_picked >= 2) {
            console.log(`end: ${match.cards_picked}`);
            checkIfMatch();
        }
    }

    function chooseYellowCard(cardPicked)   {
        console.log(`beginning: ${match.cards_picked}`);
        if (match.cards_picked < 2) {
            if (cardPicked === 'card1') {
                document.getElementById('card1').setAttribute('class', 'flipped');
                document.getElementById('circles1').setAttribute('src', 'images/purple-front-circles-yellow.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card2') {
                document.getElementById('card2').setAttribute('class', 'flipped');
                document.getElementById('squares1').setAttribute('src', 'images/purple-front-squares-yellow.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card3') {
                document.getElementById('card3').setAttribute('class', 'flipped');
                document.getElementById('circles2').setAttribute('src', 'images/purple-front-circles-yellow.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card4') {
                document.getElementById('card4').setAttribute('class', 'flipped');
                document.getElementById('triangles1').setAttribute('src', 'images/purple-front-triangles-yellow.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card5') {
                document.getElementById('card5').setAttribute('class', 'flipped');
                document.getElementById('triangles2').setAttribute('src', 'images/purple-front-triangles-yellow.png');
                match.cards_picked++;
            }
            else    {
                document.getElementById('card6').setAttribute('class', 'flipped');
                document.getElementById('squares2').setAttribute('src', 'images/purple-front-squares-yellow.png');
                match.cards_picked++;
            }
        }
        if (match.cards_picked >= 2) {
            console.log(`end: ${match.cards_picked}`);
            checkIfMatch();
        }
    }

    function chooseBlueCard(cardPicked)   {
        console.log(`beginning: ${match.cards_picked}`);
        if (match.cards_picked < 2) {
            if (cardPicked === 'card1') {
                document.getElementById('card1').setAttribute('class', 'flipped');
                document.getElementById('circles1').setAttribute('src', 'images/orange-front-circles-blue.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card2') {
                document.getElementById('card2').setAttribute('class', 'flipped');
                document.getElementById('squares1').setAttribute('src', 'images/orange-front-squares-blue.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card3') {
                document.getElementById('card3').setAttribute('class', 'flipped');
                document.getElementById('circles2').setAttribute('src', 'images/orange-front-circles-blue.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card4') {
                document.getElementById('card4').setAttribute('class', 'flipped');
                document.getElementById('triangles1').setAttribute('src', 'images/orange-front-triangles-blue.png');
                match.cards_picked++;
            }
            else if (cardPicked === 'card5') {
                document.getElementById('card5').setAttribute('class', 'flipped');
                document.getElementById('triangles2').setAttribute('src', 'images/orange-front-triangles-blue.png');
                match.cards_picked++;
            }
            else    {
                document.getElementById('card6').setAttribute('class', 'flipped');
                document.getElementById('squares2').setAttribute('src', 'images/orange-front-squares-blue.png');
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
                match.flipped_cards += 2;

                box.innerHTML = '<h3>You made a match!</h3>';
            }
            else if ((selection[0].id === 'card2') && (selection[selection.length - 1].id === 'card6'))  {
                document.getElementById('squares1').setAttribute('class', 'match');
                document.getElementById('squares2').setAttribute('class', 'match');
                selection[0].setAttribute('class', 'done');
                selection[selection.length - 1].setAttribute('class', 'done');

                match.cards_picked = 0;
                match.score[match.curr_player] += 1;
                match.flipped_cards += 2;

                box.innerHTML = '<h3>You made a match!</h3>';
            }
            else if ((selection[0].id === 'card4') && (selection[selection.length - 1].id === 'card5'))  {
                document.getElementById('triangles1').setAttribute('class', 'match');
                document.getElementById('triangles2').setAttribute('class', 'match');
                selection[0].setAttribute('class', 'done');
                selection[selection.length - 1].setAttribute('class', 'done');

                match.cards_picked = 0;
                match.score[match.curr_player] += 1;
                match.flipped_cards += 2;

                box.innerHTML = '<h3>You made a match!</h3>';
            } 
            else  {
                console.log(selection.length);
                selection[0].setAttribute('class', 'unflipped');
                selection[selection.length - 1].setAttribute('class', 'unflipped');

                let images = document.getElementsByTagName('img');

                box.innerHTML = '<h3>No match was made...</h3>';

                setTimeout(function()   {
                    if (match.theme_color == 'red') {
                        for (let i = 0; i < images.length; i++) {
                            if (images[i].className != 'match') {
                                images[i].setAttribute('src', 'images/green-back-red.png');
                            }
                        }
                    } else if (match.theme_color == 'yellow')   {
                        for (let i = 0; i < images.length; i++) {
                            if (images[i].className != 'match') {
                                images[i].setAttribute('src', 'images/purple-back-yellow.png');
                            }
                        }
                    } else  {
                        for (let i = 0; i < images.length; i++) {
                            if (images[i].className != 'match') {
                                images[i].setAttribute('src', 'images/orange-back-blue.png');
                            }
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
            setTimeout(function()   {
                document.getElementById('p1').innerHTML = `<p>${match.score[0]}</p>`;
                document.getElementById('p2').innerHTML = `${match.score[1]}`;
            }, 2000);
        }
    }
}());