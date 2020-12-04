"use strict";
import Bash_Route from "./../bash/bash-spa-route.js";

export default class MainMenuView extends Bash_Route {
    constructor(slug, template) {
        super(slug, template);
        this.role = "knecht";
        this.date = new Date();
    }

    //OVERWRITE
    init() {
        if (!window.bash.utils.getCookie("user")) {
            window.location.hash = "/login";
        } else {
            try {
                this.role = JSON.parse(window.bash.utils.getCookie("user")).role;
            } catch (error) {
                console.error(error);
            }
            this.renderView();
            $("#logout").unbind("click").on("click", function () {
                window.bash.utils.deleteCookie("user");
                window.location.hash = "/login";
            });
        }
    }
    renderView() {
        if (this.role !== "superduperadmin") {
            $("#clubsettings").hide();
        }
        let self = this;
        window.bash.api.getClub(JSON.parse(window.bash.utils.getCookie("user")).clubname, function (clubResult) {
            if (clubResult) {
                let club = JSON.parse(clubResult);
                var date = new Date();
                for (let i = 0; i < club.daysBefore; i++) {
                    self.renderTable(date, club);
                    date.setDate(date.getDate() + 1);
                }
                self.renderReservations();
            }
        });
    }

    renderTable(date, club) {
        date = date.toLocaleDateString();
        window.bash.api.getCourtsOfClub(club.clubname, function (courtResult) {
            if (courtResult) {
                let courtArr = JSON.parse(courtResult);
                let startHour = Number(club.openFrom);
                let endHour = Number(club.openUntil);

                let table = "<table data-date='" + ((date.substring(0, date.indexOf('.')).length > 1)? '' : '0' )+ date + "'><tr>";
                // Creating tableheader (times)
                table += "<th>" + date + "</th>";
                for (let hour = startHour; hour <= endHour; hour++)
                    table += "<th>" + hour + "</th>";
                // Creating tabledata
                table += "</tr>";
                for (const [key, value] of Object.entries(courtArr)) {
                    table += "<tr class='court_" + value.courtid + "'><td>" + value.name + "</td>";
                    for (let hour = startHour; hour <= endHour; hour++)
                        table += "<td class='hour_"+ hour +"'>" + "free" + "</td>";
                }
                table += "</tr></table>";
                $(".maincontent").append(table);
            }
        });
    }

    renderReservations(){
        window.bash.api.getReservationOfClub(JSON.parse(window.bash.utils.getCookie("user")).clubname, function(result){
            console.log(JSON.parse(result));
            let reservations = JSON.parse(result);
            for (const [key, value] of Object.entries(reservations)){
                let EUdate = window.bash.utils.dateFormatter(value.date);
                console.log(value);
                for (let i = Number.parseInt(value.reservedFrom); i < Number.parseInt(value.reservedUntil); i++){
                    $('table[data-date="'+EUdate+'"] .court_'+value.courtid+' .hour_'+i).addClass('reserved');
                    console.log('table[data-date="'+EUdate+'] .court_'+value.courtid+' .hour_'+i);
                }
            }
        });
    }
}