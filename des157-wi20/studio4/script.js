(function() {
    "use strict";
    const theme = document.querySelector('body');
    const button_nav = document.getElementById('button-nav');
    const box = document.getElementById('pop-up');
    let curr_state;

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
        box.innerHTML = '<div><h3>Rules</h3><p>By clicking start game, a player will be chosen by random to start. On their turn, each player will choose two cards. <strong>If the cards match, the current player gets a point and chooses again</strong>. However, if the cards <strong>do not match</strong>, the next player gets a try. The player with the most points after all cards have been matched, wins!</p><div id="exit-rules" class="reverse"><button>Okay</button></div></div>';

        // Stylizing:
        document.getElementById('exit-rules').style.cssText = 'text-align: center; margin-left: auto; margin-right: auto;';
        box.querySelector('h3').style.textAlign = 'center';

        // Click to exit rules:
        document.getElementById('exit-rules').addEventListener('click', function(e) {
            e.preventDefault();
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
        box.innerHTML = 
        '<div><h3>Options</h3><div class="reverse"><h4>Number of Cards</h4><button>4</button><button>6</button><button>8</button><button>10</button></div><div class="reverse"><h4>Theme Color</h4><button>Red</button><button>Yellow</button><button>Blue</button></div><div id="exit-options" class="reverse"><button>Okay</button></div></div>';

        // Stylizing:
        document.getElementById('exit-options').style.cssText = 'text-align: center; margin-left: auto; margin-right: auto;';
        box.querySelector('h3').style.textAlign = 'center';

        // Click to exit options:
        document.getElementById('exit-options').addEventListener('click', function(e) {
            e.preventDefault();
            box.setAttribute('class', 'invisible');
            button_nav.setAttribute('class', 'before');
        });
    });

}());