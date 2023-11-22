# AutoDark.JS
A JavaScript module to automate dark mode theme based on time

## Why AutoDark.JS?

The "dark mode" has been a popular addition to the world of Web for a few years now, with the intent of protecting users' eyes in dim areas. It also offers a small hint of personalized usage of websites for the users, being able to choose their theme according to their preferences.
With that being said, the process of switching into dark mode can also be automatized using pure JavaScript. When you look for a such tutorial, you will often see the function *window.matchMedia()*. Using this function, the website detects whether the user prefers light mode or dark mode. This approach automatizes the theme switching using OS settings or user ager settings, giving the users a more matching experience with their favorite color palettes.
AutoDark.JS brings an alternative approach to the automatization of dark mode. Instead of user's color scheme preferences, AutoDark.JS takes advantage of system's time. Using *Date.getHours()* function, AutoDark.JS get's the hour of the system, and performs the theme switching accordingly. As AutoDark.JS performs the control of the hour of the day every second, you can experience your web page suddenly going dark mode mid-usage, which makes AutoDark.JS a real-time based JavaScript automation module.

## Usage

The AutoDark.JS can be imported with this simple line in your webpage:

```
<script src="autodark.js"></script>
```

When it is included within a webpage, its *toggleDarkMode()* function can be called with *setInterval()* function within a main JavaScript file (which is the best usage of AutoDark.JS), as having multiple *window.onload* functions declared in multiple JavaScript files can cause problems to the webpage. Eg. some JavaScript file called "index.js" can call the file like this:

```
//previous codes of index.js, if any
window.onload = function() {
  //other functions to call
  setInterval(toggleDarkMode,1000);
}
```

Its *toggleDarkMode()* can be modified according to the CSS layout of the page.
