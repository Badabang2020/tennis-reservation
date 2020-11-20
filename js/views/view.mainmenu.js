"use strict";
import Bash_Route from "./../bash/bash-spa-route.js";

export default class MainMenuView extends Bash_Route{
    constructor(slug, template) {
        super(slug, template);
        this.role = "knecht";
        this.date = new Date();
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
        // window.bash.api.getClub(JSON.parse(window.bash.utils.getCookie("user")).clubname, function(clubResult){
        // if(!window.bash.utils.isEmpty(clubResult)){
        //     $("#clublogo").attr("src", JSON.parse(clubResult).logo);
        // }
        // });
        //let daysBefore = window.bash.model.club.daysBefore;
        let daysBefore = 14;
        for (let i = 0; i < daysBefore; i++){
            this.renderTable();
        }
    }

    renderTable() {
        let table = "<table><tr>";
        let startHour = 8.0;
        let startMin = 0;
        let endHour = 22.0;
        let endMin = 0;
        let minute = 0
        for (let hour = startHour; hour <= endHour; hour++){
            table += "<th>"+hour+"</th>";
        }

        $(".maincontent").html(table);
    }
}