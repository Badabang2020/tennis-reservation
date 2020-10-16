"use strict";
import Bash_Route from "./../bash/bash-spa-route.js";

export default class SebastianView extends Bash_Route{
    constructor(slug, template) {
        super(slug, template);
    }

    //OVERWRITE
    init(){
        $("#hello-from-sebastian").unbind("click").on("click", function(){
          
           window.location.hash = "/";
        });
    }
}