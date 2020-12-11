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
                let today = 0;
                self.renderTable(date, club, self, today);
            }
        });
    }

    renderTable(date, club, self, today) {
        let nextDate = new Date(date);
        let dateString = new Date(date).toLocaleDateString();
        window.bash.api.getCourtsOfClub(club.clubname, function (courtResult) {
            if (courtResult) {
                let courtArr = JSON.parse(courtResult);
                let startHour = Number(club.openFrom);
                let endHour = Number(club.openUntil);

                let table = "<table data-date='" + nextDate.getFullYear() + '-' + (nextDate.getMonth()+1) + '-' + nextDate.getDate() + "'><tr>";
                // Creating tableheader (times)
                table += "<th>" + dateString + "</th>";
                for (let hour = startHour; hour <= endHour; hour++)
                    table += "<th>" + hour + "</th>";
                // Creating tabledata
                table += "</tr>";
                for (const [key, value] of Object.entries(courtArr)) {
                    table += "<tr class='court_" + value.courtid + "' data-id='"+ value.courtid +"'><td class='court'>" + value.name + "</td>";
                    for (let hour = startHour; hour <= endHour; hour++)
                        table += "<td class='hour_"+ hour +"' data-time='"+ ( hour < 10 ? '0' : '') + hour +"'>" + "free" + "</td>";
                }
                table += "</tr></table>";
                $(".maincontent").append(table);
            }
            if (today > club.daysBefore) {
                self.renderReservations(self);
                return;
            } else
                today++;
                nextDate = nextDate.setDate(nextDate.getDate() + 1);
                self.renderTable(nextDate, club, self, today);
        });
    }

    renderReservations(self){
        window.bash.api.getReservationOfClub(JSON.parse(window.bash.utils.getCookie("user")).clubname, function(result){
            console.log(JSON.parse(result));
            let reservations = JSON.parse(result);
            for (const [key, value] of Object.entries(reservations)){
                console.log(value);
                for (let i = Number.parseInt(value.reservedFrom); i < Number.parseInt(value.reservedUntil); i++){
                    let date = new Date(value.date);
                    $('table[data-date="'+date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()+'"] .court_'+value.courtid+' .hour_'+i).addClass('reserved').html('reserved');
                }
            }
            self.setClickEvents();
        });
    }

    setClickEvents() {
        $('td:not(".reserved"):not(".court")').unbind().on('click', function () {
            let self = this;
            window.bash.api.addReservation(
              $(this).data('time') + ':00:00',
              (parseInt($(this).data('time'))+1)+ ':00:00',
              $(this).closest('table').data('date'),
              'reserved',
              $(this).closest('tr').data('id'),
              JSON.parse(window.bash.utils.getCookie('user')).membernumber,
              true,
              function (response) {
                if (response !== "Could not add reservation") {
                    $(self).addClass('reserved').html('reserved');
                }
            });
        });
    }
}