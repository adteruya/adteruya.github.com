(function() {
    'use strict';

    // For Background Color Transitions:
    const background = document.querySelector('body');
    let currColor = background.getAttribute('class');
    function changeColor()  {
        if (currColor == 'orange') {
            setTimeout(function()   {
                background.setAttribute('class', 'pink');
                currColor = 'pink';
                changeColor();
            }, 2000);
        } else if (currColor == 'pink') {
            setTimeout(function()   {
                background.setAttribute('class', 'blue');
                currColor = 'blue';
                changeColor();
            }, 2000);
        } else  {
            setTimeout(function()   {
                background.setAttribute('class', 'orange');
                currColor = 'orange';
                changeColor();
            }, 2000);
        }
    } changeColor();

    // For Icon MouseOver Size Increase/Decrease:
    document.getElementById('img1').addEventListener('mouseover', increaseSizeOne);
    document.getElementById('img1').addEventListener('mouseout', decreaseSizeOne);
    function increaseSizeOne() {
        document.getElementById('img1').setAttribute('class', 'increase');
    }
    function decreaseSizeOne() {
        document.getElementById('img1').setAttribute('class', 'regular');
    }

    document.getElementById('img2').addEventListener('mouseover', increaseSizeTwo);
    document.getElementById('img2').addEventListener('mouseout', decreaseSizeTwo);
    function increaseSizeTwo() {
        document.getElementById('img2').setAttribute('class', 'increase');
    }
    function decreaseSizeTwo() {
        document.getElementById('img2').setAttribute('class', 'regular');
    }

    document.getElementById('img3').addEventListener('mouseover', increaseSizeThree);
    document.getElementById('img3').addEventListener('mouseout', decreaseSizeThree);
    function increaseSizeThree() {
        document.getElementById('img3').setAttribute('class', 'increase');
    }
    function decreaseSizeThree() {
        document.getElementById('img3').setAttribute('class', 'regular');
    }

    // For Icon Clicks + Pop-Up Box:
    let illusClick = document.getElementById('click1');
    illusClick.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('pop').setAttribute('class', 'visible');
        document.getElementById('text').innerHTML = "It was the first program we learned, and it made us feel like designers. Of course we love this application!";
        document.getElementById('text').setAttribute('class', 'visibleText');
    });
    let indesClick = document.getElementById('click2');
    indesClick.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('pop').setAttribute('class', 'visible');
        document.getElementById('text').innerHTML = "We like it cause it helps with laying out magazines, newspapers and (most importantly) resumes.";
        document.getElementById('text').setAttribute('class', 'visibleText');
    });
    let photoClick = document.getElementById('click3');
    photoClick.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('pop').setAttribute('class', 'visible');
        document.getElementById('text').innerHTML = "(We don't actually like this one. It's hard to use, and most of us still need to Google tutorials for it.)";
        document.getElementById('text').setAttribute('class', 'visibleText');
    });
}());