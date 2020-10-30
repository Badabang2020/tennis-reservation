"use strict";
/*********************************************
 *  API-Class to connect to our super-duper API
 *  Transmition via JSON :)
 *  Wish you a great day!
 *********************************************/
export default class API{
    constructor() {}

    login(email, password, callback){
        let credentials = {
            email: email,
            password : password
        };
        API.request("Login", JSON.stringify(credentials), callback);
    }

    static request(purpose, json, callback){
        $.ajax({
            url: "http://p452177.mittwaldserver.info/platzreservierung/api.php",
            data: {
                purpose : purpose,
                data : json
            },
            method: 'POST'
        }).done(function(data){
            callback(data);
        });
    }
}