"use strict";
/**********************************************************************
 *      Translation-Engine for Bash-PWA
 *      Just add your key:"value" Pairs down by.
 *
 *      Coders.Bay - 2020-11-06
 **********************************************************************/
export default class Bash_Translator{
    constructor(...languages){
        for(const lng of languages)
            this[lng] = Bash_Language[lng];
    }

    t(key, language = window.bash.system.defaultLanguage){
        return this[language][key];
    }
}

let Bash_Language = {};
Bash_Language.en = {
    //Settings
    language: "Language",
    german: "German",
    english: "English",

    //Login
    password: "Password",
    login: "Login",


    //General
    cancel: "Cancel",

    //Courts
    court: "Court",
};
Bash_Language.de = {
    //Settings
    language: "Sprache",
    german: "Deutsch",
    english: "Englisch",

    //Login
    password: "Passwort",
    login: "Einloggen",


    //General
    cancel: "Abbrechen",

    //Courts
    court : "Platz",
};
// Bash_Language.it = {
//     //Settings
//     language: "Lingua",
//     german: "Tedesco",
//     english: "Inglese",
//
//     //Courts
//     court : "Campo",
// };