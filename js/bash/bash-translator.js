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

    //Main
    mainHeader: "Welcome to tennis-reservation",
    headerDesc: "Your favourite tennis-reservation-program",

    //Settings
    language: "Language",
    german: "German",
    english: "English",

    //Login
    password: "Password",
    login: "Login",

    //Register
    address: "Address",
    street: "Street",
    city: "City",
    postcode: "Postcode",
    contact: "Contact person",
    firstName: "Firstname",
    lastName: "Lastname",
    email: "Email",
    password2: "Repeat password",
    register: "Register",


    //General
    cancel: "Cancel",

    //Courts
    court: "Court",
};
Bash_Language.de = {
    //Main
    mainHeader: "Willkommen zur Tennis-Reservierung",
    headerDesc: "Deine beste Tennisplatz-Reservierungs Seite",

    //Settings
    language: "Sprache",
    german: "Deutsch",
    english: "Englisch",

    //Login
    password: "Passwort",
    login: "Einloggen",

    //Register
    address: "Adresse",
    street: "Straße",
    city: "Stadt",
    postcode: "PLZ",
    contact: "Kontaktperson",
    firstName: "Vorname",
    lastName: "Nachname",
    email: "E-mail",
    password2: "Passwort wiederholen",
    register: "Registrieren",

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