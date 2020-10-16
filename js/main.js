//Gemeinsam: IMPORT
"use strict";
import Bash_PWA from './bash/bash-pwa.js';
import LoginView from "./views/view.login.js";
import MainMenuView from "./views/view.mainmenu.js";
<<<<<<< HEAD
<<<<<<< HEAD
import michaelW from "./views/view.michaelW.js";
=======
import BenView from "./views/view.ben.js";
>>>>>>> 25245d8a74d5e387ed6c25f0fa5615edd3f35215
=======
import MichaelBView from './views/view.michaelB.js';
>>>>>>> ab160266babcce7f925a316952f335c43385c9c9

//Routen-Array anlegen
let routes = [
    new MainMenuView("/", "mainmenu"),
    new LoginView("/login", "login"),
<<<<<<< HEAD
<<<<<<< HEAD
    new michaelW("/michaelw", "michaelW")
];

const Bash = new Bash_PWA("http://127.0.0.1/tennis-reservation/", "templates", routes);
=======
    new BenView("/ben", "ben")
];

const Bash = new Bash_PWA("http://127.0.0.1/tennis/", "templates", routes);
>>>>>>> 25245d8a74d5e387ed6c25f0fa5615edd3f35215
=======
    new MichaelBView("/michaelb", "michaelb"),
];

const Bash = new Bash_PWA("http://127.0.0.1/tennis-reservation/", "templates", routes);
>>>>>>> ab160266babcce7f925a316952f335c43385c9c9
// const Bash = new Bash_PWA("http://p452177.mittwaldserver.info/platzreservierung/", "templates", routes);
