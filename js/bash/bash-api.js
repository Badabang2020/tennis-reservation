"use strict";
/*********************************************
 *  API-Class to connect to our super-duper API
 *  Transmition via JSON :)
 *  Wish you a great day!
 *********************************************/
export default class API {
    constructor() { }

    login(email, password, callback) {
        let credentials = {
            email: email,
            password: password
        };
        API.request("Login", JSON.stringify(credentials), callback);
    }

    /////////////////////// Club Functions ///////////////////////////////
    registerClub(clubname, adress, postcode, logo, hoursAtOnce, hoursPerWeek, openFrom, openUntil, daysBefore, email, first_name, last_name, gender, birthday, phonenumber, password, callback) {
        let clubInfo = {
            clubname: clubname,
            adress: adress,
            postcode: postcode,
            logo: logo,
            hoursAtOnce: hoursAtOnce,
            hoursPerWeek: hoursPerWeek,
            openFrom: openFrom,
            openUntil: openUntil,
            daysBefore: daysBefore
        };
        let self = this;
        API.request("RegisterClub", JSON.stringify(clubInfo), function (data) {
            if (data != "Could not register club")
                self.registerMember(email, first_name, last_name, gender, birthday, phonenumber, password, "admin", clubname, callback);
        });
    }

    editClub(clubname, adress, postcode, logo, hoursAtOnce, hoursPerWeek, openFrom, openUntil, daysBefore, callback) {
        let clubInfo = {
            clubname: clubname,
            adress: adress,
            postcode: postcode,
            logo: logo,
            hoursAtOnce: hoursAtOnce,
            hoursPerWeek: hoursPerWeek,
            openFrom: openFrom,
            openUntil: openUntil,
            daysBefore: daysBefore
        };
        API.request("EditClub", JSON.stringify(clubInfo), callback)
    }

    getClub(clubname, callback) {
        let club = {
            clubname: clubname
        };
        API.request("GetClub", JSON.stringify(club), callback);
    }
    /////////////////////// Member Functions ///////////////////////////////
    registerMember(email, first_name, last_name, gender, birthday, phonenumber, password, role, clubname, callback) {
        let memberInfo = {
            email: email,
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            birthday: birthday,
            phonenumber: phonenumber,
            password: password,
            role: role,
            clubname: clubname
        };
        API.request("RegisterMember", JSON.stringify(memberInfo), callback);
    }

    deleteMember(membernumber, callback) {
        let memberId = {
            membernumber: membernumber
        };
        API.request("DeleteMember", JSON.stringify(memberId), callback);
    }

    changeMemberPassword(membernumber, password) {
        let memberInfo = {
            membernumber: membernumber,
            password: password
        };
        API.request("ChangeMemberPassword", JSON.stringify(memberInfo), callback);
    }

    editMember(membernumber, email, first_name, last_name, gender, phonenumber, password, birthday, role, clubname, callback) {
        let memberInfo = {
            membernumber: membernumber,
            email: email,
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            birthday: birthday,
            phonenumber: phonenumber,
            password: password,
            role: role,
            clubname: clubname,
        }
        API.request("EditMember", JSON(memberInfo), callback)
    }

    getMembersOfClub(clubname, callback) {
        let clubInfo = {
            clubname: clubname
        };
        API.request("GetMembersOfClub", JSON.stringify(clubInfo), callback);
    }

    getMember(membernumber, callback) {
        let memberInfo = {
            membernumber: membernumber
        };
        API.request("GetMembersOfClub", JSON.stringify(memberInfo), callback);
    }

    /////////////////////// Court Functions ///////////////////////////////
    addCourt(clubname, name, surface, callback) {
        let courtInfo = {
            clubname: clubname,
            name: name,
            surface: surface
        };
        API.request("AddCourt", JSON.stringify(courtInfo), callback);
    }

    removeCourt(courtid, callback) {
        let courtInfo = {
            courtid: courtid
        };
        API.request("DeleteCourt", JSON.stringify(courtInfo), callback);
    }

    editCourt(clubname, name, surface, callback) {
        let courtInfo = {
            clubname: clubname,
            name: name,
            surface: surface
        };
        API.request("Court", JSON.stringify(courtInfo), callback);
    }

    getCourtsOfClub(clubname, callback) {
        let clubInfo = {
            clubname: clubname
        };
        API.request("getCourtsOfClub", JSON.stringify(clubInfo), callback);
    }

    getCourt(courtid, callback) {
        let courtInfo = {
            courtid: courtid
        };
        API.request("getCourt", JSON.stringify(courtInfo), callback);
    }

    /////////////////////// API request ///////////////////////////////
    static request(purpose, json, callback) {
        $.ajax({
            //url: "http://p452177.mittwaldserver.info/platzreservierung/api.php",
            // url: "http://127.0.0.1/tennis-reservation/api.php",
            url: "https://platzreservierung.neuwersch.eu/api.php",
            data: {
                purpose: purpose,
                data: json
            },
            method: 'POST'
        }).done(function (data) {
            callback(data);
        });
    }
}