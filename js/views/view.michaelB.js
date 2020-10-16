"use strict";
// const { default: Bash_Route } = require("../bash/bash-spa-route");

import Bash_Route from "./../bash/bash-spa-route.js";

export default class MichaelBView extends Bash_Route{
    constructor(slug, template) {
        super(slug, template);
    }

    //OVERWRITE
    init(){
        $("#backToHome").unbind("click").on("click", function(){
            window.location.hash = "/";
        });
    }
}