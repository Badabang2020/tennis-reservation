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
                let email = $("#username").val();
                let password = $("#password").val();
                window.bash.api.login(email, password, function(mysqlResult){
                    console.log(mysqlResult);
                    if(mysqlResult !== "noMatch") {
                        window.bash.utils.setCookie("user", mysqlResult, 40);
                        window.location.hash = "/";
                    }
                    else {
                        console.log("Login Error: " + mysqlResult);
                    }

                });


                // window.bash.utils.setCookie("user", "asdf", 3);
            });
        }
        else
            window.location.hash = "/";
    }
}