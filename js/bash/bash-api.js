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
            clubname: clubname,
        };
        API.request("RegisterMember", JSON.stringify(memberInfo), callback);
    }

    addCourt(clubname, name, surface) {
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

    static request(purpose, json, callback) {
        $.ajax({
            url: "http://p452177.mittwaldserver.info/platzreservierung/api.php",
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