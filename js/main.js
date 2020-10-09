//Gemeinsam: IMPORT
"use strict";
import Bash_PWA from './bash/bash-pwa.js';


//Routen-Array anlegen
let routes = [
    new MainMenuRoute("/", "mainmenu"),
    new LoginRoute("/login", "login")
];

const Bash = new Bash_PWA();