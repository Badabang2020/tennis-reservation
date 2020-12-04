"use strict";

import Bash_Route from "./../bash/bash-spa-route.js";

export default class RegisterView extends Bash_Route {
    constructor(slug, template) {
        super(slug, template);
    }

   init() {
    // register club
    $("#register").unbind("click").on("click", function(e) {
        e.preventDefault();
        if ($("#password").val() == $("#passwordCheck").val()){
            window.bash.api.registerClub($("#clubname").val(), $("#streetName").val(), $("#postcode").val(), $("#email").val(), 
            $("#firstName").val(), 
            $("#lastName").val(),
            $("#password").val(), function(mysqlResult) {
                //check if registerClub was correct ->
                if(mysqlResult != "Could not register club"){    
                    window.bash.api.login($("#email").val(), $("#password").val(), function(mysqlResult){
                        if(mysqlResult !== "noMatch") {
                            window.bash.utils.setCookie("user", mysqlResult, 40);
                            window.location.hash = "/";
                        }
                        else {
                            console.log("Login Error: " + mysqlResult);
                        }
                    });
                }
            });
        } else {
            //FIXME:
        }
    });
   }
}