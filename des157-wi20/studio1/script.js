(function(){
    'use strict';

    document.getElementById('plant-form').addEventListener('submit', function(e)    {
        // Prevent the default behavior from occuring:
        e.preventDefault();

        // Find style choice:
        const styleList = document.getElementsByName('type');
        let userStyle = 0;
        for (let i = 0; i < styleList.length; i++)  {
            if (styleList[i].checked)   {
                userStyle = styleList[i].value;
                console.log(userStyle);
                break;
            }
        }
        
        // Find color choice:
        const colorList = document.getElementsByName('color');
        let userColor = 0;
        for (let i = 0; i < colorList.length; i++)  {
            if (colorList[i].checked)   {
                userColor = colorList[i].value;
                console.log(userColor);
                break;
            }
        }

        // Get text input:
        let userAdj = document.getElementById('p-adj').value;
        let userVerb = document.getElementById('p-verb').value;
        let userName = document.getElementById('p-name').value;

        // Input checks:
        if (userStyle === 0 || userColor === 0) {
            alert("Please choose one of the three options.");
        }
        else if (userAdj === "" || userVerb === "" || userName === "")  {
            alert("Please fill in all text boxes.");
        }
        else    {   // Reaching here means all input is valid; also the section where text will change:
            let outPut = document.getElementById('output');
            outPut.innerHTML = `Your plant, ${userName}, grew ${userVerb} and is very ${userAdj}!`;
            
            // Change image in accordance to user input:
            let plantChoice = document.querySelector("img");
            if (userStyle === "flowery")    {
                plantChoice.style.width = "55%";
                if (userColor === "red")    {
                    plantChoice.setAttribute("src", "images/red-flowering.png");
                } else if (userColor === "blue")    {
                    plantChoice.setAttribute("src", "images/blue-flowering.png");
                } else  {
                    plantChoice.setAttribute("src", "images/yellow-flowering.png");
                }
            } else if (userStyle === "spikey")  {
                plantChoice.style.width = "70%";
                if (userColor === "red")    {
                    plantChoice.setAttribute("src", "images/red-spiking.png");
                } else if (userColor === "blue")    {
                    plantChoice.setAttribute("src", "images/blue-spiking.png");
                } else  {
                    plantChoice.setAttribute("src", "images/yellow-spiking.png");
                }
            } else   {
                plantChoice.style.width = "57%";
                if (userColor === "red")    {
                    plantChoice.setAttribute("src", "images/red-weird.png");
                } else if (userColor === "blue")    {
                    plantChoice.setAttribute("src", "images/blue-weird.png");
                } else  {
                    plantChoice.setAttribute("src", "images/yellow-weird.png");
                }
            }
        }
    });

}());