(function() {
    "use strict";

    const body = document.querySelector('body');
    const left_quote = document.getElementById('quote');
    const left_home = document.getElementById('home-page');
    const left_side = document.querySelector('header');

    const right_img_nav = document.getElementById('nav');
    const right_toc = document.getElementById('toc-info');
    const right_site = document.getElementById('site-info');

    const ocean = document.getElementById('o-info');
    const ocean_text = document.getElementById('ocean-text');
    const forest = document.getElementById('f-info');
    const forest_text = document.getElementById('forest-text');
    const city = document.getElementById('c-info');
    const city_text = document.getElementById('city-text');

    window.onload = startPage();

    // Clicking the "What is This?" button:
    document.getElementById('what-button').addEventListener('click', function(e) {
        e.preventDefault();
        fadeOut(right_img_nav);
        fadeOut(ocean_text);
        fadeOut(forest_text);
        fadeOut(city_text);
        setTimeout(function()   {
            body.style.cssText = 'background: #F5F6F7; transition-duration: 0.5s;'
            right_img_nav.style.cssText = 'display: none;';
            ocean_text.style.cssText = 'display: none;';
            forest_text.style.cssText = 'display: none;';
            city_text.style.cssText = 'display: none;';
            right_toc.style.cssText = 'background-color: #DAFFA0; padding: 30px; margin: 50px;';
            setTimeout(function()   {
                fadeIn(right_toc);
            }, 400);
        }, 800);
        // Clicking the "Okay" button:
        right_toc.querySelector('button').addEventListener('click', function(e) {
            e.preventDefault();
            fadeOut(right_toc);
            setTimeout(function()   {
                right_toc.style.cssText = 'display: none;';
                right_img_nav.style.cssText = 'display: grid;';
                document.getElementById('o-info').querySelector('img').src = 'images/ol_ocean lines.png';
                document.getElementById('f-info').querySelector('img').src = 'images/fl_forest lines.png';
                document.getElementById('c-info').querySelector('img').src = 'images/cl_city lines.png';
                setTimeout(function()   {
                    fadeIn(right_img_nav);
                }, 200);
            }, 600);
        });
    });

    // Clicking the "Site Info" button:
    document.getElementById('site-button').addEventListener('click', function(e)    {
        e.preventDefault();
        fadeOut(right_img_nav);
        fadeOut(right_toc);
        fadeOut(ocean_text);
        fadeOut(forest_text);
        fadeOut(city_text);
        setTimeout(function()   {
            body.style.cssText = 'background: #F5F6F7; transition-duration: 0.5s;'
            right_site.style.cssText = 'display: grid;';
            right_img_nav.style.cssText = 'display: none;';
            right_toc.style.cssText = 'display: none;';
            ocean_text.style.cssText = 'display: none;';
            forest_text.style.cssText = 'display: none;';
            city_text.style.cssText = 'display: none;';
            setTimeout(function()   {
                fadeIn(right_site);
            }, 400);
        }, 800);
        // Clicking the "Okay" button:
        right_site.querySelector('button').addEventListener('click', function(e) {
            e.preventDefault();
            fadeOut(right_site);
            setTimeout(function()   {
                right_site.style.cssText = 'display: none;';
                right_img_nav.style.cssText = 'display: grid;';
                document.getElementById('o-info').querySelector('img').src = 'images/ol_ocean lines.png';
                document.getElementById('f-info').querySelector('img').src = 'images/fl_forest lines.png';
                document.getElementById('c-info').querySelector('img').src = 'images/cl_city lines.png';
                setTimeout(function()   {
                    fadeIn(right_img_nav);
                }, 200);
            }, 600);
        });
    });

    // Icon interactions (hover):
    ocean.addEventListener('mouseover', function() {
        ocean.querySelector('img').style.cssText = 'height: 240px;';
    });

    ocean.addEventListener('mouseout', function() {
        ocean.querySelector('img').style.cssText = 'height: 220px;';
    });

    forest.addEventListener('mouseover', function() {
        forest.querySelector('img').style.cssText = 'height: 240px;';
    });

    forest.addEventListener('mouseout', function() {
        forest.querySelector('img').style.cssText = 'height: 220px;';
    });

    city.addEventListener('mouseover', function() {
        city.querySelector('img').style.cssText = 'height: 240px;';
    });

    city.addEventListener('mouseout', function() {
        city.querySelector('img').style.cssText = 'height: 220px;';
    });

    // Icon interactions (click):
    /**************** Ocean ****************/
    ocean.addEventListener('click', function(e) {
        e.preventDefault();
        ocean.querySelector('div').innerHTML = '<img src="images/oc_ocean colored.png">';
        ocean.querySelector('img').style.cssText = 'height: 240px;';
        setTimeout(function()   {
            fadeOut(right_img_nav);
        }, 200);
        setTimeout(function()   {
            right_img_nav.style.cssText = 'display: none;';
            body.style.cssText = 'background: #BAE3E0; transition-duration: 0.5s;'
            ocean_text.style.cssText = 'display: block;';
            setTimeout(function()   {
                fadeIn(ocean_text);
            }, 400);
        }, 800);
    });

    document.getElementById('ocean-forest').addEventListener('mouseover', function()    {
        document.getElementById('ocean-forest').querySelector('img').src = 'images/fc_forest colored.png';
    });

    document.getElementById('ocean-forest').addEventListener('mouseout', function()    {
        document.getElementById('ocean-forest').querySelector('img').src = 'images/fl_forest lines.png';
    });

    // Switch from Ocean to Forest:
    document.getElementById('ocean-forest').addEventListener('click', function(e)   {
        e.preventDefault();
        document.getElementById('ocean-forest').querySelector('img').src = 'images/fc_forest colored.png';
        setTimeout(function()   {
            fadeOut(ocean_text);
        }, 200);
        setTimeout(function()   {
            ocean_text.style.cssText = 'display: none;';
            body.style.cssText = 'background: #DDE692; transition-duration: 0.5s;'
            forest_text.style.cssText = 'display: block;';
            setTimeout(function()   {
                fadeIn(forest_text);
            }, 400);
        }, 800);
    });

    document.getElementById('ocean-city').addEventListener('mouseover', function()    {
        document.getElementById('ocean-city').querySelector('img').src = 'images/cc_city colored.png';
    });

    document.getElementById('ocean-city').addEventListener('mouseout', function()    {
        document.getElementById('ocean-city').querySelector('img').src = 'images/cl_city lines.png';
    });

    // Switch from Ocean to City:
    document.getElementById('ocean-city').addEventListener('click', function(e)   {
        e.preventDefault();
        document.getElementById('ocean-city').querySelector('img').src = 'images/cc_city colored.png';
        setTimeout(function()   {
            fadeOut(ocean_text);
        }, 200);
        setTimeout(function()   {
            ocean_text.style.cssText = 'display: none;';
            body.style.cssText = 'background: #BBDDF2; transition-duration: 0.5s;'
            city_text.style.cssText = 'display: block;';
            setTimeout(function()   {
                fadeIn(city_text);
            }, 400);
        }, 800);
    });
    /****************************************/

    /**************** Forest ****************/
    forest.addEventListener('click', function(e) {
        e.preventDefault();
        forest.querySelector('div').innerHTML = '<img src="images/fc_forest colored.png">';
        forest.querySelector('img').style.cssText = 'height: 240px;';
        setTimeout(function()   {
            fadeOut(right_img_nav);
        }, 200);
        setTimeout(function()   {
            right_img_nav.style.cssText = 'display: none;';
            body.style.cssText = 'background: #DDE692; transition-duration: 0.5s;'
            forest_text.style.cssText = 'display: block;';
            setTimeout(function()   {
                fadeIn(forest_text);
            }, 400);
        }, 800);
    });

    document.getElementById('forest-ocean').addEventListener('mouseover', function()    {
        document.getElementById('forest-ocean').querySelector('img').src = 'images/oc_ocean colored.png';
    });

    document.getElementById('forest-ocean').addEventListener('mouseout', function()    {
        document.getElementById('forest-ocean').querySelector('img').src = 'images/ol_ocean lines.png';
    });

    // Switch from Forest to Ocean:
    document.getElementById('forest-ocean').addEventListener('click', function(e)   {
        e.preventDefault();
        document.getElementById('forest-ocean').querySelector('img').src = 'images/oc_ocean colored.png';
        setTimeout(function()   {
            fadeOut(forest_text);
        }, 200);
        setTimeout(function()   {
            forest_text.style.cssText = 'display: none;';
            body.style.cssText = 'background: #BAE3E0; transition-duration: 0.5s;'
            ocean_text.style.cssText = 'display: block;';
            setTimeout(function()   {
                fadeIn(ocean_text);
            }, 400);
        }, 800);
    });

    document.getElementById('forest-city').addEventListener('mouseover', function()    {
        document.getElementById('forest-city').querySelector('img').src = 'images/cc_city colored.png';
    });

    document.getElementById('forest-city').addEventListener('mouseout', function()    {
        document.getElementById('forest-city').querySelector('img').src = 'images/cl_city lines.png';
    });

    // Switch from Forest to City:
    document.getElementById('forest-city').addEventListener('click', function(e)   {
        e.preventDefault();
        document.getElementById('forest-city').querySelector('img').src = 'images/cc_city colored.png';
        setTimeout(function()   {
            fadeOut(forest_text);
        }, 200);
        setTimeout(function()   {
            forest_text.style.cssText = 'display: none;';
            body.style.cssText = 'background: #BBDDF2; transition-duration: 0.5s;'
            city_text.style.cssText = 'display: block;';
            setTimeout(function()   {
                fadeIn(city_text);
            }, 400);
        }, 800);
    });
    /****************************************/

    /**************** City ****************/
    city.addEventListener('click', function(e) {
        e.preventDefault();
        city.querySelector('div').innerHTML = '<img src="images/cc_city colored.png">';
        city.querySelector('img').style.cssText = 'height: 240px;';
        setTimeout(function()   {
            fadeOut(right_img_nav);
        }, 200);
        setTimeout(function()   {
            right_img_nav.style.cssText = 'display: none;';
            body.style.cssText = 'background: #BBDDF2; transition-duration: 0.5s;'
            city_text.style.cssText = 'display: block;';
            setTimeout(function()   {
                fadeIn(city_text);
            }, 400);
        }, 800);
    });

    document.getElementById('city-ocean').addEventListener('mouseover', function()    {
        document.getElementById('city-ocean').querySelector('img').src = 'images/oc_ocean colored.png';
    });

    document.getElementById('city-ocean').addEventListener('mouseout', function()    {
        document.getElementById('city-ocean').querySelector('img').src = 'images/ol_ocean lines.png';
    });

    // Switch from City to Ocean:
    document.getElementById('city-ocean').addEventListener('click', function(e)   {
        e.preventDefault();
        document.getElementById('city-ocean').querySelector('img').src = 'images/oc_ocean colored.png';
        setTimeout(function()   {
            fadeOut(city_text);
        }, 200);
        setTimeout(function()   {
            city_text.style.cssText = 'display: none;';
            body.style.cssText = 'background: #BAE3E0; transition-duration: 0.5s;'
            ocean_text.style.cssText = 'display: block;';
            setTimeout(function()   {
                fadeIn(ocean_text);
            }, 400);
        }, 800);
    });

    document.getElementById('city-forest').addEventListener('mouseover', function()    {
        document.getElementById('city-forest').querySelector('img').src = 'images/fc_forest colored.png';
    });

    document.getElementById('city-forest').addEventListener('mouseout', function()    {
        document.getElementById('city-forest').querySelector('img').src = 'images/fl_forest lines.png';
    });

    // Switch from City to Forest:
    document.getElementById('city-forest').addEventListener('click', function(e)   {
        e.preventDefault();
        document.getElementById('city-forest').querySelector('img').src = 'images/fc_forest colored.png';
        setTimeout(function()   {
            fadeOut(city_text);
        }, 200);
        setTimeout(function()   {
            city_text.style.cssText = 'display: none;';
            body.style.cssText = 'background: #DDE692; transition-duration: 0.5s;'
            forest_text.style.cssText = 'display: block;';
            setTimeout(function()   {
                fadeIn(forest_text);
            }, 400);
        }, 800);
    });
    /****************************************/

    function startPage()    {
        // After 6 seconds, fade quote out
        setTimeout(function()   {
            fadeOut(left_quote);
        }, 5000);

        // After 6.5 seconds, fade in default home page
        setTimeout(function()   {
            // Making divs invisible:
            left_quote.style.cssText = 'display: none;';
            right_toc.style.cssText = 'display: none;';
            right_site.style.cssText = 'display: none;';
            ocean_text.style.cssText = 'display: none;';
            forest_text.style.cssText = 'display: none;';
            city_text.style.cssText = 'display: none;';
            // Adjusting grid:
            left_side.style.cssText = 'grid-column: 1/3; grid-row: 1/5; align-self: center; justify-self: center;';
            fadeIn(left_home);
            fadeIn(right_img_nav);
        }, 5500);
    }

    function fadeOut(object)  {
        object.setAttribute('class', 'loadOut');
    }

    function fadeIn(object) {
        object.setAttribute('class', 'loadIn');
    }
}());