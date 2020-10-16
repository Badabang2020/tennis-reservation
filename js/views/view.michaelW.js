"use strict";
import Bash_Route from "../bash/bash-spa-route.js";

export default class michaelW extends Bash_Route{
    constructor(slug, template) {
        super(slug, template);
    }

    init(){
        $("#backToMain").unbind("click").on("click", function(){
            window.location.hash = "/michaelW";
        });
    }
}