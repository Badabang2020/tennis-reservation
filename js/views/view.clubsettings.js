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
        let self = this;
        console.log("Init settings");
        $("#clubadmin__addmember").unbind("click").on("click", function(e){
            e.preventDefault();
            self.openMemberEditor();
            console.log("Action: Add member");
        });
        $("#clubadmin__addcourt").unbind("click").on("click", function(e){
            e.preventDefault();
            self.openCourtEditor();
            console.log("Action: Add court");
        });
    }
    
    initMembers(){
        let self = this;
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
                    window.bash.utils.confirm(window.bash.t("confirm_delete"),function(answer){
                        if (answer){
                            console.log("Action: delete member");
                        }else{
                            console.log("Action: delete aborted");
                        }
                    })
                });
                $(".clubadmin__editmember").unbind("click").on("click", function(e){
                    e.preventDefault();
                    self.openMemberEditor();
                    console.log($(this).closest("tr").data("member-number"));
                    console.log($(this).parent().parent());
                    console.log("ACTION: Edit member");
                });
            }
        })
    }

    initCourts(){
        console.log("Starting initCourts()");
        window.bash.model.getCourtsOfClub(function(courts){
            let jsonCourts = JSON.parse(courts);

            // console.log(jsonMembers);
            for(const court of jsonCourts){
                console.log(court);

                $("#club-settings-clourts-table-body").append(
                    "<tr data-courtid='"+court.courtid+"'>"+
                        "<td>"+ court.name + "</td>"+
                        "<td>"+ court.surface + "</td>"+
                        "<td>"+"<button class='clubadmin__editcourt'>"+window.bash.t("cEdit")+"</button>"+"</td>"+
                        "<td>"+"<button class='clubadmin__deletecourt'>"+window.bash.t("cDelete")+"</button>"+"</td>"+
                    "</tr>"
                );
            }

            $(".clubadmin__editcourt").unbind("click").on("click", function(e){
                e.preventDefault();
                console.log("ACTION:Edit  court"+ $(this).closest("tr").data("courtid"));
            });

            $(".clubadmin__deletecourt").unbind("click").on("click", function(e){
                e.preventDefault();
                window.bash.utils.confirm(window.bash.t("confirm_delete"),function(answer){
                    if (answer){
                        console.log("Action: delete court");
                    }else{
                        console.log("Action: delete court aborted");
                    }
                })
                console.log("ACTION: Delete court"+ $(this).closest("tr").data("courtid") );
            });
        });
    }

    openMemberEditor(){
        $("#editor_member_overlay").addClass("active");
    }

    openCourtEditor() {
        $("#editor_court_overlay").addClass("active");
    }
}