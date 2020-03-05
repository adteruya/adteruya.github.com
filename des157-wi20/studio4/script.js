(function() {
    "use strict";
    const button_nav = document.getElementById('button-nav');
    const box = document.getElementById('pop-up');
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
        box.style.borderRadius = '20px';

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

        // Adding text:
        button_nav.setAttribute('class', 'invisible');
        box.setAttribute('class', 'option-text');
        box.innerHTML = '<div><h3>Options</h3><div class="reverse"><h4>Number of Cards</h4><div id="card-options"><button id="four" class="not-chosen">4</button><button id="six" class="not-chosen">6</button><button id="eight" class="not-chosen">8</button><button id="ten" class="not-chosen">10</button></div></div><div class="reverse"><h4>Theme Color</h4><div id="color-options"><button id="r" class="not-chosen">Red</button><button id="y" class="not-chosen">Yellow</button><button id="b" class="not-chosen">Blue</button></div></div><div id="exit-options" class="reverse"><button>Okay</button></div></div>';

        // Stylizing:
        let card_btns = box.querySelectorAll('#card-options button');
        let color_btns = box.querySelectorAll('#color-options button');
        document.getElementById('card-options').style.cssText = 'margin: 5px 0; text-align: center;';
        document.getElementById('color-options').style.cssText = 'margin: 5px 0; text-align: center;';
        document.querySelector('.centered').style.padding = '120px 0';
        box.style.borderRadius = '20px';

        if (match.theme_color == 'red') {
            for (let i = 0; i < card_btns.length; i++)  {
                if (card_btns[i].innerHTML == match.end_game_condition) {
                    card_btns[i].style.cssText = 'background-color: #ff6666; border-color: #f2f2f2; color: #f2f2f2;';
                    card_btns[i].className = 'chosen';
                }
            }
            for (let i = 0; i < color_btns.length; i++) {
                if (color_btns[i].id == 'r')    {
                    color_btns[i].style.cssText = 'background-color: #ff6666; border-color: #f2f2f2; color: #f2f2f2;';
                    color_btns[i].className = 'chosen';
                }
            }
        } else if (match.theme_color == 'yellow')   {
            for (let i = 0; i < card_btns.length; i++)  {
                if (card_btns[i].innerHTML == match.end_game_condition) {
                    card_btns[i].style.cssText = 'background-color: #e69900; border-color: #f2f2f2; color: #f2f2f2;';
                    card_btns[i].className = 'chosen';
                }
            }
            for (let i = 0; i < color_btns.length; i++) {
                if (color_btns[i].id == 'y')    {
                    color_btns[i].style.cssText = 'background-color: #e69900; border-color: #f2f2f2; color: #f2f2f2;';
                    color_btns[i].className = 'chosen';
                }
            }
        } else  {
            for (let i = 0; i < card_btns.length; i++)  {
                if (card_btns[i].innerHTML == match.end_game_condition) {
                    card_btns[i].style.cssText = 'background-color: #0099cc; border-color: #f2f2f2; color: #f2f2f2;';
                    card_btns[i].className = 'chosen';
                }
            }
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

        // Click to change number of cards in game:
        document.getElementById('four').addEventListener('click', function(e)   {
            e.preventDefault();
            for (let i = 0; i < card_btns.length; i++)  {
                card_btns[i].className = 'not-chosen';
                if (match.theme_color == 'red') {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #ff6666; color: #ff6666;';
                } else if (match.theme_color == 'yellow')  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #e69900; color: #e69900;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #0099cc; color: #0099cc;';
                }
            }
            match.end_game_condition = 4;
            document.getElementById('four').className = 'chosen';
            if (match.theme_color == 'red') {
                document.getElementById('four').style.cssText = 'background-color: #ff6666; border-color: #f2f2f2; color: #f2f2f2;';
            } else if (match.theme_color == 'yellow')   {
                document.getElementById('four').style.cssText = 'background-color: #e69900; border-color: #f2f2f2; color: #f2f2f2;';
            } else  {
                document.getElementById('four').style.cssText = 'background-color: #0099cc; border-color: #f2f2f2; color: #f2f2f2;';
            }
        });

        document.getElementById('six').addEventListener('click', function(e)   {
            e.preventDefault();
            for (let i = 0; i < card_btns.length; i++)  {
                card_btns[i].className = 'not-chosen';
                if (match.theme_color == 'red') {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #ff6666; color: #ff6666;';
                } else if (match.theme_color == 'yellow')  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #e69900; color: #e69900;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #0099cc; color: #0099cc;';
                }
            }
            match.end_game_condition = 6;
            document.getElementById('six').className = 'chosen';
            if (match.theme_color == 'red') {
                document.getElementById('six').style.cssText = 'background-color: #ff6666; border-color: #f2f2f2; color: #f2f2f2;';
            } else if (match.theme_color == 'yellow')   {
                document.getElementById('six').style.cssText = 'background-color: #e69900; border-color: #f2f2f2; color: #f2f2f2;';
            } else  {
                document.getElementById('six').style.cssText = 'background-color: #0099cc; border-color: #f2f2f2; color: #f2f2f2;';
            }
        });

        document.getElementById('eight').addEventListener('click', function(e)   {
            e.preventDefault();
            for (let i = 0; i < card_btns.length; i++)  {
                card_btns[i].className = 'not-chosen';
                if (match.theme_color == 'red') {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #ff6666; color: #92140C;';
                } else if (match.theme_color == 'yellow')  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #e69900; color: #e69900;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #0099cc; color: #0099cc;';
                }
            }
            match.end_game_condition = 8;
            document.getElementById('eight').className = 'chosen';
            if (match.theme_color == 'red') {
                document.getElementById('eight').style.cssText = 'background-color: #ff6666; border-color: #f2f2f2; color: #f2f2f2;';
            } else if (match.theme_color == 'yellow')   {
                document.getElementById('eight').style.cssText = 'background-color: #e69900; border-color: #f2f2f2; color: #f2f2f2;';
            } else  {
                document.getElementById('eight').style.cssText = 'background-color: #0099cc; border-color: #f2f2f2; color: #f2f2f2;';
            }
        });

        document.getElementById('ten').addEventListener('click', function(e)   {
            e.preventDefault();
            for (let i = 0; i < card_btns.length; i++)  {
                card_btns[i].className = 'not-chosen';
                if (match.theme_color == 'red') {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #ff6666; color: #ff6666;';
                } else if (match.theme_color == 'yellow')  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #e69900; color: #e69900;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: transparent; border-color: #0099cc; color: #0099cc;';
                }
            }
            match.end_game_condition = 10;
            document.getElementById('ten').className = 'chosen';
            if (match.theme_color == 'red') {
                document.getElementById('ten').style.cssText = 'background-color: #ff6666; border-color: #f2f2f2; color: #f2f2f2;';
            } else if (match.theme_color == 'yellow')   {
                document.getElementById('ten').style.cssText = 'background-color: #e69900; border-color: #f2f2f2; color: #f2f2f2;';
            } else  {
                document.getElementById('ten').style.cssText = 'background-color: #0099cc; border-color: #f2f2f2; color: #f2f2f2;';
            }
        });

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
            for (let i = 0; i < card_btns.length; i++) {
                if (card_btns[i].className == 'chosen') {
                    card_btns[i].style.cssText = 'background-color: #ff6666; border-color: #f2f2f2; color: #f2f2f2;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: #f2f2f2; border-color: #ff6666; color: #ff6666;';
                }
            }
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
            for (let i = 0; i < card_btns.length; i++) {
                if (card_btns[i].className == 'chosen') {
                    card_btns[i].style.cssText = 'background-color: #e69900; border-color: #f2f2f2; color: #f2f2f2;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: #f2f2f2; border-color: #e69900; color: #e69900;';
                }
            }
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
            for (let i = 0; i < card_btns.length; i++) {
                if (card_btns[i].className == 'chosen') {
                    card_btns[i].style.cssText = 'background-color: #0099cc; border-color: #f2f2f2; color: #f2f2f2;';
                } else  {
                    card_btns[i].style.cssText = 'background-color: #f2f2f2; border-color: #0099cc; color: #0099cc;';
                }
            }
        });

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
    });
}());