/*Time-Based Dark Mode Automation for websites
    This basic JavaScript module will automate the process of switching the web page's theme into dark mode according to the hour of the day as recognized by the system.
    Coded by Alper KUM, 2023
*/

const html = document.querySelector("html"); //mandatory, gets the HTML element of the page
const allElements = html.getElementsByTagName("*"); // get all children elements
function isNightTime() { //to ensure the time is suitable for the dark mode
    var now = new Date();
    var hour = now.getHours();
    return hour >= 20 || hour < 8; //doesn't really need to be changed
}

function toggleDarkMode(){
    if (isNightTime()) {
        //code to change the theme into dark mode, depends on the CSS layout
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].classList.add("dark-mode"); // add a CSS class for dark mode
          }
    } else {
        //code to revert the standard theme, depends on the CSS layout
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].classList.remove("dark-mode"); // remove the CSS class for dark mode
          }
    }
}

window.onload = function() { //template function to check which hour it is. This is how do you launch the function.
     setInterval(toggleDarkMode, 1000); //can be used in another JavaScript file depending on web page layout and framework.
}