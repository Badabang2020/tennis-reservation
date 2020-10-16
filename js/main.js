//Gemeinsam: IMPORT
"use strict";
import Bash_PWA from './bash/bash-pwa.js';
import LoginView from "./views/view.login.js";
import MainMenuView from "./views/view.mainmenu.js";
import MichaelBView from './views/view.michaelB.js';

//Routen-Array anlegen
let routes = [
    new MainMenuView("/", "mainmenu"),
    new LoginView("/login", "login"),
    new MichaelBView("/michaelb", "michaelb"),
];

const Bash = new Bash_PWA("http://127.0.0.1/tennis-reservation/", "templates", routes);
// const Bash = new Bash_PWA("http://p452177.mittwaldserver.info/platzreservierung/", "templates", routes);
