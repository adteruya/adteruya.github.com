(function() {
    'use strict';
    const background = document.querySelector('body');
    let currColor = background.getAttribute('class');

    function changeColor()  {
        if (currColor == 'red') {
            setTimeout(function()   {
                background.setAttribute('class', 'orange');
                currColor = 'orange';
                changeColor();
            }, 2000);
        } else if (currColor == 'orange') {
            setTimeout(function()   {
                background.setAttribute('class', 'yellow');
                currColor = 'yellow';
                changeColor();
            }, 2000);
        } else if (currColor == 'yellow') {
            setTimeout(function()   {
                background.setAttribute('class', 'green');
                currColor = 'green';
                changeColor();
            }, 2000);
        } else if (currColor == 'green') {
            setTimeout(function()   {
                background.setAttribute('class', 'blue');
                currColor = 'blue';
                changeColor();
            }, 2000);
        } else if (currColor == 'blue') {
            setTimeout(function()   {
                background.setAttribute('class', 'purple');
                currColor = 'purple';
                changeColor();
            }, 2000);
        } else  {
            setTimeout(function()   {
                background.setAttribute('class', 'red');
                currColor = 'red';
                changeColor();
            }, 2000);
        }
    }

    changeColor();
}());