//Gemeinsam: IMPORT
"use strict";
import Bash_PWA from './bash/bash-pwa.js';
import MainMenuView from "./views/view.mainmenu.js";
import RegisterView from './views/view.register.js';
import LoginView from "./views/view.login.js";
import SettingsView from './views/view.settings.js';

//Routen-Array anlegen
let routes = [
    new MainMenuView("/", "mainmenu"),
    new RegisterView("/register", "register"),
    new LoginView("/login", "login"),
    new SettingsView("/settings", "settings")
];

const Bash = new Bash_PWA("http://127.0.0.1/tennis-reservation/", "templates", routes, "de", "en");
// const Bash = new Bash_PWA("http://p452177.mittwaldserver.info/platzreservierung/", "templates", routes);


//////////////////////////////////////////////////////////////////////
//
//      Dropdown Nav-Bar
//
//////////////////////////////////////////////////////////////////////

$("#usersettings").unbind("click").on("click", function() {
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    document.getElementById("userDropdown").classList.toggle("show");
});
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#usersettings')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
    }
}
