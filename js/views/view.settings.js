'use strict';

import Bash_Route from "./../bash/bash-spa-route.js";

export default class SettingsView extends Bash_Route {
    constructor(slug, temaplate) {
        super(slug, temaplate);
    }

    init() {
        // checks if the use has a cookie
        if(!window.bash.utils.getCookie("user")){
            // set default values
            let cookie = window.bash.utils.getCookie("user");
            let userData = JSON.parse(cookie);

            let membernumber = userData.membernumber;
            let firstname = userData.first_name;
            let lastname = userData.last_name;
            let gender = userData.gender;
            let birthdate = userData.birthdate;
            let phoneNumber = userData.phonenumber;
            let email = userData.email;
            let role = userData.role;
            let clubname = userData.clubname;

            // set initial values into the input fields
            $("#pFirstname").val(firstname);
            $("#pLastname").val(lastname);
            $("#pEmail").val(email);
            $("#pPhoneNumber").val(phoneNumber);
            $("#pGender").val(gender);
            document.getElementById("pBirthday").value = birthdate; 
            $("#pRole").html(role);

            // edit Basic values
            $("#pSaveChanges").unbind("click").on("click", function(){
                window.bash.api.editMember(membernumber, email, firstname, lastname, gender, phoneNumber, password, birthdate, role, clubname, function(mysqlResult){
                    console.log(mysqlResult);
                });
            });

            // change password
            $("#pChangePassword").unbind("click").on("click", function(){
                let currentPassword = $("#pCurrentPassword").val();
                let newPassword = $("#pNewPassword").val();
                let newPassword2 = $("#pNewPassword2").val();

                window.bash.api.login(email, currentPassword, function(mysqlResult) {
                    if(mysqlResult !== "noMatch") {
                        if (newPassword === newPassword2) {
                            window.bash.api.changeMemberPassword(membernumber, newPassword, function(mysqlResult){
                                console.log(mysqlResult);
                            });
                        }
                    }
                });
            });


            // delete user
            $("#pDeleteAccount").unbind("click").on("click", function(){
                window.bash.api.deleteMember(membernumber, function(mysqlResult) {
                    window.bash.utils.setCookie("user", mysqlResult, -1);
                        window.location.hash = "/";
                });
            });
        }
        else
            window.location.hash = "/";

    }
}