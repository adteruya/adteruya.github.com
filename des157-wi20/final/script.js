(function() {
    "use strict";

    const left_side = document.querySelector('header');
    const right_side = document.querySelector('main');

    window.onload = startPage();

    document.getElementById('main-title').addEventListener('click', function(e) {
        e.preventDefault();
        fadeOut(right_side);
        setTimeout(function()   {
            right_side.innerHTML = '<div id="toc-info"><h2>What is the "Tragedy of the Commons?"</h2><p>It is a phrase commonly used to describe the overuse and exhaustion of shared resources. Individuals (and nations) act out of their own self-interest in the usage of these resources, consequently moving against the collective good of all users.</p></div>';
            fadeIn(right_side);
        }, 1000);
    });

    function startPage()    {
        // After 6 seconds, fade quote out
        setTimeout(function()   {
            fadeOut(left_side);
        }, 6000);

        // After 6.5 seconds, fade in default home page
        setTimeout(function()   {
            left_side.style.cssText = 'grid-column: 1/3; grid-row: 1/5; align-self:center;';
            left_side.innerHTML = '<div id="main-title"><h1>Tragedy of the Commons</h1><h2>A Look at the Decline of the Environment</h2></div><div id="main-nav"><button id="what-button">What is This?</button><button id="see-button">See More</button><button id="site-button">Site Info</button></div>';
            fadeIn(left_side);
            fadeIn(right_side);
        }, 6500);
    }

    function fadeOut(object)  {
        object.setAttribute('class', 'loadOut');
    }

    function fadeIn(object) {
        object.setAttribute('class', 'loadIn');
    }
}());