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
                console.log("ACTION:Edit  court"+ $(this).closest("tr").data("courtid") );
            });

            $(".clubadmin__deletecourt").unbind("click").on("click", function(e){
                e.preventDefault();
                console.log("ACTION: Delete court"+ $(this).closest("tr").data("courtid") );
            });


            // <tr>
            // <td>cell1_1</td>
            // <td>cell2_1</td>
            // <td>cell3_1</td>
            // <td>
            // <button id="clubadmin__addcourt"><%>cEdit<%></button>
            // <button id="clubadmin__deletecourt"><%>cDelete<%></button>
            // </td>
            // </tr>


        });
    }
}