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
            try {
                this.role = JSON.parse(window.bash.utils.getCookie("user")).role;
            } catch (error) {
                console.error(error);                
            }
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
        var date = new Date();
        for (let i = 0; i < daysBefore; i++){
            this.renderTable(date);
            date.setDate(date.getDate() + 1);
        }
    }
    
    renderTable(date) {
        date = date.toLocaleDateString();
        let courtArr = ["Platz 1", "Platz 2", "Platz 3"];
        let table = "<table><tr>";
        let startHour = 8.0;
        let startMin = 0;
        let endHour = 22.0;
        let endMin = 0;
        let minute = 0;
        // Creating tableheader (times)
        table += "<th>" + date + "</th>";
        for (let hour = startHour; hour <= endHour; hour++)
            table += "<th>"+hour+"</th>";
        // Creating tabledata
        table += "</tr>";
        courtArr.forEach(court => {
            table += "<tr><td>" + court + "</td>";
            for (let hour = startHour; hour <= endHour; hour++)
                table += "<td>"+ "COVID" + "</td>";
        });
        table += "</tr></table>";
        
        $(".maincontent").append(table);
    }
}