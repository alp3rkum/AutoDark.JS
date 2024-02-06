/*Time-Based Dark Mode Automation for websites
    This basic TypeScript module will automate the process of switching the web page's theme into dark mode according to the hour of the day as recognized by the system.
    Coded by Alper KUM, 2023-2024
*/

const htmlElement: HTMLElement | null = document.querySelector("html"); // goes straight to the HTML element

function checkNightTime(): boolean {
    const date: Date = new Date();
    const hour: number = date.getHours(); // gets the current hour of the day
    const season: number = Math.floor(((date.getMonth() + 1) % 12) / 4); // gets the season of the year

    if (season === 0) // if it's winter
        return hour >= 7 && hour < 19;
    else if (season === 1 || season === 3) // if it's spring or autumn/fall
        return hour >= 7 && hour < 20;
    else if (season === 2) // if it's summer
        return hour >= 6 && hour < 21;
    else // exception handling
        return hour >= 7 && hour < 19;
    

}

function autodark(): void {
    // if it's night time, change the page's theme to dark, else change it to light
    if(checkNightTime() == true)
        htmlElement!.dataset.bsTheme = "dark";
    else
        htmlElement!.dataset.bsTheme = "light";
}

window.onload = function (): void {
        setInterval(autodark, 60000); // runs once every minute
}