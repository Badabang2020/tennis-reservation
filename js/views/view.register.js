"use strict";
import Bash_Route from "./../bash/bash-spa-route.js";

export default class RegisterView extends Bash_Route{
    constructor(slug, template) {
        super(slug, template);
    }

    init(){
        console.log("THIS IS Register!!");
        $("#registerBtnCancel").unbind("click").on("click", function(){
            window.bash.utils.deleteCookie("user");
            window.location.hash = "/";
         });
        if(!window.bash.utils.getCookie("user")){
            $("#registerBtn").unbind("click").on("click", function(){
                window.bash.utils.setCookie("user", "asdf", 3);
                window.location.hash = "/login";
            });
        }
        else
            window.location.hash = "/";
    }
    

}