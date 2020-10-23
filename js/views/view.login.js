"use strict";
import Bash_Route from "./../bash/bash-spa-route.js";

export default class LoginView extends Bash_Route{
    constructor(slug, template) {
        super(slug, template);
    }

    init(){
        console.log("THIS IS LOGIN!!");
        if(!window.bash.utils.getCookie("user")){
            $("#button-login-ok").unbind("click").on("click", function(){
                window.bash.utils.setCookie("user", "asdf", 3);
                window.location.hash = "/";
            });
        }
        else
            window.location.hash = "/";
    }
}