'use strict';

import Bash_Route from "./../bash/bash-spa-route.js";

export default class ClubSettingsView extends Bash_Route {
    constructor(slug, template) {
        super(slug, template);
    }

    // @Overwrite
    init() {
        this.initSettings();
        this.initMembers();
        this.initCourts();
    }


    initSettings(){
        console.log("Init settings");
    }
    
    initMembers(){
        window.bash.model.getMembersOfClub(function(members){
            
            let jsonMembers = JSON.parse(members);

            // console.log(jsonMembers);
            for(const member of jsonMembers){
                console.log(member);
                
                $("#clubadmin__deletemember").unbind("click").on("click", function(){
                        console.log("ACTION: Delete member");
                    });

                    


                $("#club-settings-members-table-body").append("<tr>"+
                "<td>"+member.first_name+" "+member.last_name+"</td>"+
                "<td>"+member.email+"</td>"+
                "<td>"+member.adress+"</td>"+
                "<td>"+
                "  <button id=\"clubadmin__editmember\"><%>cEdit<%></button>"+
                "  <button id=\"clubadmin__deletemember\"><%>cDelete<%></button>"+
                "</td>"+
                "</tr>");
                //Mit diesen Members foreach Memberzeile aufbauen.
            }
        })
    }

    initCourts(){

    }
}