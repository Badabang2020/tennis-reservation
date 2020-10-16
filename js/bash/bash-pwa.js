"use strict";
//TODO: IMPORT model and api
import Bash_Utils from './bash-utils.js';
/********************************
 *   Class-Bundle for PWAs.
 *
 *
 *
 ********************************/
export default class bash_pwa {
    constructor() {
        //TODO Alle möglichen Properties.
        // this.model = new bash_model();
        // this.api = new api();
        window.bash = this;
        this.utils = new Bash_Utils();
    }
}