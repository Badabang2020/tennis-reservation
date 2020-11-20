'use strict';

import Bash_Route from "./../bash/bash-spa-route.js";

export default class ClubSettingsView extends Bash_Route {
    constructor(slug, temaplate) {
        super(slug, temaplate);
    }

    // @Overwrite
    init() {
        //mögliche URL:
        //https://p1651651.mittwaldserver.info/platzreservierung/clubsettings?clubname=codersbaySV
        //Set this.club über die GET-Parameter
        initSettings();
        initMembers();
        initCourts();
    }


    initSettings(){

    }
    
    initMembers(){
        window.bash.model.getMembersOfClub(function(members){
            for(const member of members){
                //$("#memberstable").append("<tr><td>"+member.name+"</td></tr>");
                //Mit diesen Members foreach Memberzeile aufbauen.
            }
        })
    }

    initCourts(){

    }
}