"use strict";
import Bash_Route from "./../bash/bash-spa-route.js";

export default class MainMenuView extends Bash_Route{
    constructor(slug, template) {
        super(slug, template);
        this.role = "knecht";
    }

    //OVERWRITE
    init(){
        if(!window.bash.utils.getCookie("user")) {
            window.location.hash = "/login";
        } else {
            this.role = JSON.parse(window.bash.utils.getCookie("user")).role;
            this.renderView();
            $("#logout").unbind("click").on("click", function(){
               window.bash.utils.deleteCookie("user");
               window.location.hash = "/login";
            });
        }
    }
    renderView() {
        if(this.role !== "superduperadmin") {
            $("#clubsettings").hide();
        }
        window.bash.api.getClub(JSON.parse(window.bash.utils.getCookie("user")).clubname, function(clubResult){
        if(!window.bash.utils.isEmpty(clubResult)){
            $("#clublogo").attr("src", JSON.parse(clubResult).logo);
        }
        });
    }
}