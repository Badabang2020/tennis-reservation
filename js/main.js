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

// const Bash = new Bash_PWA("http://127.0.0.1/tennis-reservation/", "templates", routes, "de", "en");
const Bash = new Bash_PWA("http://p452177.mittwaldserver.info/platzreservierung/", "templates", routes);
