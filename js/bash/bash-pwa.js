"use strict";
//TODO: IMPORT model and api
import Bash_Utils from './bash-utils.js';
import Bash_SPA_Router from "./bash-spa-router.js";
import Bash_Translator from "./bash-translator.js";
import API from "./bash-api.js";
/********************************
 *   Class-Bundle for PWAs.
 *
 *
 *      @param:
 *      webRoot - Give me the root-URL of your App
 *      templatesPath - Give me the Path to your templates,
 *          relative to your webRoot.
 *      routes - Give me an Object with "slug" : "template" Routes
 *      ...languages - Give me all languages you want your App to support.
 *
 *      Coders.Bay - 2020-11-06
 ********************************/
export default class bash_pwa {
    constructor(webRoot, templatesPath, routes, ...languages) {
        //TODO Alle möglichen Properties.
        // this.model = new bash_model();
        this.api = new API();
        this.system = {
            webRoot : webRoot,
            templatesPath : templatesPath,
            defaultLanguage : "en",
            debugmode : true
        };
        this.translator = new Bash_Translator(...languages);
        window.bash = this;
        this.utils = new Bash_Utils();
        this.router = new Bash_SPA_Router(routes);
    }

    t(key){
        return(this.translator.t(key));
    }
}