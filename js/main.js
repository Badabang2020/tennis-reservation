//Gemeinsam: IMPORT
"use strict";
import Bash_PWA from './bash/bash-pwa.js';
import MainMenuView from "./views/view.mainmenu.js";
import RegisterView from './views/view.register.js';
import LoginView from "./views/view.login.js";

import BenView from "./views/view.ben.js";
import FabianView from './views/view.fabian.js';
import MatthiasView from './views/view.matthias.js';
import MichaelBView from './views/view.michaelB.js';
import michaelW from './views/view.michaelW.js';
import RaphaelView from './views/view.raphael.js';
import SebastianView from './views/view.sebastian.js';

//Routen-Array anlegen
let routes = [
    new MainMenuView("/", "mainmenu"),
    new RegisterView("/register", "register"),
    new LoginView("/login", "login"),
    
    new BenView("/ben", "ben"),
    new FabianView("/fabian", "fabian"),
    new MatthiasView("/matthias", "matthias"),
    new MichaelBView("/michaelb", "michaelb"),
    new michaelW("/michaelw", "michaelw"),
    new RaphaelView("/raphael", "raphael"),
    new SebastianView("/sebastian", "sebastian")
];

const Bash = new Bash_PWA("http://127.0.0.1/tennis-reservation/", "templates", routes);
// const Bash = new Bash_PWA("http://p452177.mittwaldserver.info/platzreservierung/", "templates", routes);
