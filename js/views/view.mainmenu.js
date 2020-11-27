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

                let table = "<table><tr>";
                // Creating tableheader (times)
                table += "<th>" + date + "</th>";
                for (let hour = startHour; hour <= endHour; hour++)
                    table += "<th>" + hour + "</th>";
                // Creating tabledata
                table += "</tr>";
                for (const [key, value] of Object.entries(courtArr)) {
                    table += "<tr><td>" + value.name + "</td>";
                    for (let hour = startHour; hour <= endHour; hour++)
                        table += "<td>" + "COVID" + "</td>";
                }
                table += "</tr></table>";
                $(".maincontent").append(table);
            }
        });
    }
}