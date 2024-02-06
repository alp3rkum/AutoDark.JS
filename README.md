# AutoDark.JS Version 3
A JavaScript/TypeScript module to automate dark mode theme based on time

## Why AutoDark.JS?

The "dark mode" has been a popular addition to the world of Web for a few years now, with the intent of protecting users' eyes in dim areas. It also offers a small hint of personalized usage of websites for the users, being able to choose their theme according to their preferences.
With that being said, the process of switching into dark mode can also be automatized using pure JavaScript. When you look for a such tutorial, you will often see the function *window.matchMedia()*. Using this function, the website detects whether the user prefers light mode or dark mode. This approach automatizes the theme switching using OS settings or user ager settings, giving the users a more matching experience with their favorite color palettes.
AutoDark.JS brings an alternative approach to the automatization of dark mode. Instead of user's color scheme preferences, AutoDark.JS takes advantage of system's time. Using *Date.getHours()* function, AutoDark.JS get's the hour of the system, and performs the theme switching accordingly. As AutoDark.JS performs the control of the hour of the day every second, you can experience your web page suddenly going dark mode mid-usage, which makes AutoDark.JS a real-time based JavaScript automation module.

## Features

The Version 3 of AutoDark system has the following features:
- A TypeScript alternative that makes usage by different frameworks (eg. Angular and React/TypeScript) easier.
- A hour and season based time control (eg. in winter it becomes evening/night earlier, whereas in summer it becomes evening/night later)
- A *very simple* theme changing operation which involves altering the data-bs-theme attribute of the HTML tag (instead of dealing with different elements)
- Template .CSS files for light and dark themes that you can code your page's style in right away
  -  The coding of CSS styles in any case of data-bs-theme can be done like this:
    ```
    [data-bs-theme=value]{
        ...
        }
    ```


## Usage

The AutoDark.JS can be imported with this simple line in your webpage:

```
<script src="autodark.js"></script>
```
Or in a JavaScript/TypeScript SPA framework like Angular or React (or React-TypeScript):
```
import autodark from './path/to/autodark';
```

In the second case, the run() (Autodark.JS) or autodark() (Autodark.TS) function can be called from the main skeleton JavaScript file (eg App.js for a ReactJS application) of the application. In both cases, you need to import its light.css and dark.css to the page/application too in order for it to work properly, but that's it. No additional libraries needed for a such lightweight problem and solution😏
