(function() {
    "use strict";
    const button_nav = document.querySelector('div.before');

    if (button_nav.className == "before")   {
        button_nav.innerHTML = '<div><button id="rules">Rules</button><button id="start">Start Game</button><button id="options">Options</button></div>';
    }
}());