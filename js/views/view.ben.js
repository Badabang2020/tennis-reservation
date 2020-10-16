"use strict";
import Bash_Route from "./../bash/bash-spa-route.js";

export default class BenView extends Bash_Route{
    constructor(slug, template) {
        super(slug, template);
    }

    init(){
        console.log("ben was here");
        $("li").unbind("click").on("click",function(){
            window.location.hash = "/";
        });
        
    }
}