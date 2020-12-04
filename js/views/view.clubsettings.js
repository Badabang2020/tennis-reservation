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

                
                
                    


                $("#club-settings-members-table-body").append("<tr data-member-number='"+member.membernumber+"'>"+
                "<td>"+member.first_name+" "+member.last_name+"</td>"+
                "<td>"+member.email+"</td>"+
                "<td>"+member.adress+"</td>"+
                "<td>"+
                "  <button class='clubadmin__editmember'>"+window.bash.t("cEdit")+"</button>"+
                "  <button class='clubadmin__deletemember'>"+window.bash.t("cDelete")+"</button>"+
                "</td>"+
                "</tr>");
                //Mit diesen Members foreach Memberzeile aufbauen.

                $(".clubadmin__deletemember").unbind("click").on("click", function(e){
                    e.preventDefault();
                    console.log($(this).closest("tr").data("member-number"));
                    console.log($(this).parent().parent());
                    console.log("ACTION: Delete member");
                });

                $(".clubadmin__editmember").unbind("click").on("click", function(e){
                    e.preventDefault();
                    console.log($(this).closest("tr").data("member-number"));
                    console.log($(this).parent().parent());
                    console.log("ACTION: Edit member");
                    
                });


            }
        })
    }

    initCourts(){

    }
}