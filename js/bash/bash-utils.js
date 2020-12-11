"use strict";

/***************************************************
 *  A Collectorclass for several useful functions
 *
 *  ShaBy, 2020-10-16
 ***************************************************/

class Bash_Utils{
    constructor(){}

    isEmpty(variable) {
        if(typeof variable === "object")
            return (Object.entries(variable).length === 0 && variable.constructor === Object);
        else
            return (typeof variable === "undefined" || variable == null || variable == "");
    };

    //Name = programm ;)
    getIndexOfObjectInArrayByPropertyvalue(array, attr, value) {
        for(let i = 0; i < array.length; i++) {
            if(array[i][attr] === value)
                return i;
        }
        return -1;
    };

    setCookie(name,value,days){
        let expires;
        if (days) {
            let date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires="+date.toGMTString();
        }
        else
            expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    };

    getCookie(name){
        let nameEQ = name + "=",
            cookiesArray = document.cookie.split(';');
        for(let i=0;i < cookiesArray.length;i++) {
            let cookie = cookiesArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1,cookie.length);
            }
            if (cookie.indexOf(nameEQ) === 0)
                return cookie.substring(nameEQ.length,cookie.length);
        }
        return null;
    };

    deleteCookie(name){
        window.bash.utils.setCookie(name,"",-1);
    };

    monthOfDay(day){
        if (day <= 31)
            return 1;
        if ( day <= 59)
            return 2;
        if  (day <= 90)
            return 3;
        if  (day <= 120)
            return 4;
        if (day <= 151)
            return 5;
        if  (day <= 181)
            return 6;
        if (day <= 212)
            return 7;
        if ( day<=243)
            return 8;
        if (day <= 273)
            return 9;
        if  (day <= 304)
            return 10;
        if  (day <= 334)
            return 11;
        if (day <= 365)
            return 12;
        return -1;
    }

    roundUpTo(round, upto){
        return (round%upto)>0?(round-(round%upto)+upto): round;
    }

    roundDownTo(round, downto){
        return (round%downto)>0?(round-(round%downto)): round;
    }

    strMaxLength(string, maxlength){
        if(string.length > maxlength)
            return string.substring(0,maxlength)+"...";
        return string;
    }

    twoDigits(number){
        return Math.round((number + Number.EPSILON) * 100) / 100;
    }

    numberformat(number, maxFractionDigits = 2, minFractionDigits = 0){
        return number.toLocaleString('de-DE', { maximumFractionDigits: maxFractionDigits, minimumFractionDigits: minFractionDigits});
    }

    moneyformat(money, rounded = false){
        let options ={
            style: 'currency',
            currency: 'EUR'
        };
        if(rounded){
            options.minimumFractionDigits = 0;
            options.maximumFractionDigits = 0;
        }
        return money.toLocaleString('de-DE', options);
    };

    dateFormatter(dateUS) {
        let day = dateUS.substring(dateUS.length, dateUS.lastIndexOf('-')+1);
        if(day.length ==1){
            day = "0" + day;
        }
        let month = dateUS.substring(dateUS.lastIndexOf('-'), dateUS.indexOf('-')+1);
        if(month.length == 1){
            month = "0" + month;
        }
        let year = dateUS.substring(0, dateUS.indexOf('-'));
        return ''+day+'.'+month+'.'+year+'';
    }
}
export default Bash_Utils;