'use strict';

import Bash_Route from "./../bash/bash-spa-route.js";

export default class SettingsView extends Bash_Route {
    constructor(slug, temaplate) {
        super(slug, temaplate);
    }

    init() {
        // checks if the use has a cookie
        if(window.bash.utils.getCookie("user")){
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
            this.initializesValue(firstname, lastname, email, phoneNumber, gender, birthdate, role);

            // edit Basic values
            $("#pSaveChanges").unbind("click").on("click", function(e){
                e.preventDefault();
                this.changeMemberBasic(role, clubname);
            });

            // change password
            $("#pChangePassword").unbind("click").on("click", function(e){
                e.preventDefault();
                this.changeMemberPassword(membernumber);
            });


            // delete user
            $("#pDeleteAccount").unbind("click").on("click", function(){
                this.deleteMember(membernumber);
            });
        }
        else
            window.location.hash = "/";
    }




    initializesValue(firstname, lastname, email, phoneNumber, gender, birthdate, role) {
        $("#pFirstname").val(firstname);
        $("#pLastname").val(lastname);
        $("#pEmail").val(email);
        $("#pPhoneNumber").val(phoneNumber);
        $("#pGender").val(gender);
        document.getElementById("pBirthday").value = birthdate; 
        $("#pRole").html(role);
    }

    changeMemberBasic() {
        firstname = $("#pFirstname").val();
        lastname = $("#pLastname").val();
        gender = $("#pGender").val();
        phoneNumber = $("#pPhoneNumber").val();
        email = $("#pEmail").val();
        birthdate = $("#pBirthday").val();
        window.bash.api.editMember(membernumber, email, firstname, lastname, gender, phoneNumber, birthdate, role, clubname, function(mysqlResult){
            console.log(mysqlResult);
        });
    }

    changeMemberPassword(membernumber) {
        let currentPassword = $("#pCurrentPassword").val();
        let newPassword = $("#pNewPassword").val();
        let newPassword2 = $("#pNewPassword2").val();

        window.bash.api.login(email, currentPassword, function(mysqlResult) {
            if(mysqlResult !== "noMatch") {
                if (newPassword === newPassword2) {
                    window.bash.api.changeMemberPassword(membernumber, newPassword, function(mysqlResult){
                        $("#pCurrentPassword").val("");
                        $("#pNewPassword").val("");
                        $("#pNewPassword2").val("");
                        console.log(mysqlResult);
                    });
                }
                else {
                    alert('new Pasword are not the same');
                }
            }
            else {
                alert('current Password is false');
            }
        });
    }

    deleteMember(membernumber) {
        window.bash.api.deleteMember(membernumber, function(mysqlResult) {
            window.bash.utils.setCookie("user", mysqlResult, -1);
            window.location.hash = "/";
        });
    }
}