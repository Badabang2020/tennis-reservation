"use strict";

export default class Bash_Model {
    constructor() {
        this.clubname = "myClub"; // das must geänderrt werden.
        this.members = undefined;
    }

    getMembersOfClub(callback){
        let self = this;
        window.bash.api.getMembersOfClub(this.clubname,function(members){
            self.members = members;
            console.log("Members:"+self.members);
            callback(members);
        })
    }

    // delete one member of your club

    deleteMembersOfClub(memberId, callback){
        let self = this;
        window.bash.api.deleteMember(memberId,function(members){
            console.log("Member with "+memberId+" was deleted.");
            callback(members);
        })
    }


    // get Courts of the club
    getCourtsOfClub(callback){
        let self = this;
        window.bash.api.getCourtsOfClub(this.clubname,function(courts){
            self.courts = courts;
            console.log("Courts:"+self.courts);
            callback(courts);
        })
    }


}