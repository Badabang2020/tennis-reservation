"use strict";
//TODO: IMPORT model and api
import Bash_Utils from './bash-utils.js';
import Bash_SPA_Router from "./bash-spa-router.js";
/********************************
 *   Class-Bundle for PWAs.
 *
 *
 *
 ********************************/
export default class bash_pwa {
    constructor(webRoot, templatesPath, routes) {
        //TODO Alle möglichen Properties.
        // this.model = new bash_model();
        // this.api = new api();
        this.system = {
            webRoot : webRoot,
            templatesPath : templatesPath,
            debugmode : true
        };


        window.bash = this;
        this.utils = new Bash_Utils();
        this.router = new Bash_SPA_Router(routes);
    }
}