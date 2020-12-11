'use strict';

import Bash_Route from "./../bash/bash-spa-route.js";

export default class SettingsView extends Bash_Route {

    constructor(slug, temaplate) {
        super(slug, temaplate);
    }

    init() {
        // checks if the use has a cookie
        if(window.bash.utils.getCookie("user")){
            let self = this;

            // gets default values from cookie
            let cookie = window.bash.utils.getCookie("user");
            let userData = JSON.parse(cookie);

            let membernumber = userData.membernumber;
            let firstname = userData.first_name;
            let lastname = userData.last_name;
            let gender = userData.gender;
            let birthdate = userData.birthday;
            let phoneNumber = userData.phonenumber;
            let email = userData.email;
            let role = userData.role;
            let clubname = userData.clubname;

            // sets values into the input fields
            self.initializesValue(firstname, lastname, email, phoneNumber, gender, birthdate, role);

            // loads listeners for password change
            self.newPasswordIsTheSameFeedback(self);

            // edit Basic values
            $("#pSaveChanges").unbind("click").on("click", function(e){
                e.preventDefault();
                self.changeMemberBasic(self, membernumber, role, clubname);
            });

            // change password
            $("#pChangePassword").unbind("click").on("click", function(e){
                e.preventDefault();
                self.changeMemberPassword(self, membernumber, email);
            });

            // opens modal window if you want to delete your profile
            $("#pDeleteAccount").unbind("click").on("click", function(e){
                e.preventDefault();
                console.log("open delete option");
                $('html,body').scrollTop(0); // go to the top of the browser
                window.bash.utils.confirm(window.bash.t("confirm_delete_of_user"),function(answer){
                    if (answer){
                        console.log("Action: delete member");
                        self.deleteMember(membernumber);
                    } else{
                        console.log("Action: delete aborted");
                    }
                })
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

    changeMemberBasic(self, membernumber, role, clubname) {
        let firstname = $("#pFirstname").val();
        let lastname = $("#pLastname").val();
        let gender = $("#pGender").val();
        let phoneNumber = $("#pPhoneNumber").val();
        let email = $("#pEmail").val();
        let birthdate = $("#pBirthday").val();
        window.bash.api.editMember(membernumber, email, firstname, lastname, gender, phoneNumber, birthdate, role, clubname, function(mysqlResult){
            console.log(mysqlResult);
            self.createMemberFeedback(mysqlResult);
        });
    }

    changeMemberPassword(self, membernumber, email) {
        let currentPassword = $("#pCurrentPassword").val();
        let newPassword = $("#pNewPassword").val();
        let newPassword2 = $("#pNewPassword2").val();

        window.bash.api.login(email, currentPassword, function(mysqlResult) {
            if(mysqlResult !== "noMatch" && newPassword.length >= 5 && newPassword === newPassword2) {
                window.bash.api.changeMemberPassword(membernumber, newPassword, function(mysqlResult){
                    $("#pCurrentPassword").val("");
                    $("#pNewPassword").val("");
                    $("#pNewPassword2").val("");
                    self.currentPasswordFeedback(mysqlResult);
                    console.log(mysqlResult);
                });
            } else {
                if (mysqlResult === "noMatch") {
                    self.currentPasswordFeedback(mysqlResult);
                }
                console.log("You passwords didn't match the requirements.");
            }
        });
    }

    deleteMember(membernumber) {
        window.bash.api.deleteMember(membernumber, function(mysqlResult) {
            window.bash.utils.setCookie("user", mysqlResult, -1);
            window.location.hash = "/";
        });
    }


    createMemberFeedback(mysqlResult) {
        $("#editMemberFeedback").remove();
        let editMemberBasicFeedback;

        if (mysqlResult === "Edit successfully :)") {
            editMemberBasicFeedback = '<p id="editMemberBasicFeedback" class="successfulEdit">Edit was successful :)</p>';
        } else {
            editMemberBasicFeedback = '<p id="editMemberBasicFeedback" class="failedEdit">Edit has failed :(</p>';
        }

        $(".basics").append(editMemberBasicFeedback);

        // text fades away
        $("#editMemberBasicFeedback").delay(3000).fadeOut(3000);
    }

    // red text under Button indicate that the currentPassword was wrong or successful
    currentPasswordFeedback(mysqlResult) {
        $("#editMemberPasswordFeedback").remove();
        let editMemberPasswordFeedback;

        if (mysqlResult === "noMatch") {
            editMemberPasswordFeedback = '<p id="editMemberPasswordFeedback" class="failedEdit">Current Password is false.</p>';
        } else {
            editMemberPasswordFeedback = '<p id="editMemberPasswordFeedback" class="successfulEdit">Edit Password was successful :).</p>';
            $("#pNewPassword").css("border-color", "#cccccc");
            $("#pNewPassword2").css("border-color", "#cccccc");
        }

        $(".password").append(editMemberPasswordFeedback);
        // text fades away
        $("#editMemberPasswordFeedback").delay(3000).fadeOut(3000);
    }

    // calls the function to indicate that the newPassword is to short or is not the same as re-newPassword
    newPasswordIsTheSameFeedback(self) {
        $("#pNewPassword").unbind().on("keyup", function(){
            self.checkIfNewPasswordMatchTheRequirements();
        });

        $("#pNewPassword2").unbind().on("keyup", function(){
            self.checkIfNewPasswordMatchTheRequirements();
        });
    }

    checkIfNewPasswordMatchTheRequirements() {
        $("#passwordIsToShort").remove();
        $("#passwordsAreNotTheSame").remove();

        let newPassword = $("#pNewPassword").val();
        let newPassword2 = $("#pNewPassword2").val();
        let error = false;

        // nothing is inside
        if (newPassword.length == 0 && newPassword2.length == 0) {
            error = true;
            $("#pNewPassword").css("border-color", "#cccccc");
            $("#pNewPassword2").css("border-color", "#cccccc");
            return;
        }

        // Error -> password is to short
        if (newPassword.length <= 4) {
            error = true;
            $("#pNewPassword").css("border-color", "red");
            $("#pNewPassword2").css("border-color", "red");

            let newPasswordFeedbackToShort = '<p id="passwordIsToShort" class="failedEdit">New Password has to be longer than 4 characters.</p>';
            $(".password").append(newPasswordFeedbackToShort);
        }

        // Error -> newPassword and newPassword2 are not the same
        if (newPassword != newPassword2) {
            error = true;
            $("#pNewPassword").css("border-color", "red");
            $("#pNewPassword2").css("border-color", "red");

            let passwordsAreNotTheSame = '<p id="passwordsAreNotTheSame" class="failedEdit">New Passwords have to be the same.</p>';
            $(".password").append(passwordsAreNotTheSame);
        }

        // matches the Requirements
        if (!error) {
            $("#pNewPassword").css("border-color", "limegreen");
            $("#pNewPassword2").css("border-color", "limegreen");
        }
    }
}