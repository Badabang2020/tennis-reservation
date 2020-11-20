"use strict";

export default class bashModel {
    constructor() {
        this.club = {};
        this.members = undefined;
    }

    getMembersOfClub(callback){
        window.bash.api.getMembersOfClub(this.club, function(members){
            this.members = members;
            callback();
        }
    }
}