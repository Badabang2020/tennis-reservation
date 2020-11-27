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
    club: "Club",
    address: "Address",
    street: "Street",
    city: "City",
    postcode: "Postcode",
    contact: "Contact person",
    firstName: "Firstname",
    lastName: "Lastname",
    email: "Email",
    password: "Enter password",
    passwordCheck: "Repeat password",
    register: "Register",


    //General
    cancel: "Cancel",

    //Courts
    court: "Court",

    //Clubsettings
    cAdministration: "Administration",
    cYourSettings: "Settings",
    clubAddress: "Club Address",
    postalCode: "Post Code",
    openingHours: "Opening Hours",
    hoursPerWeek: "Hours per Week",
    maxReservations: "max. Reservations",

    cYourMembers: "Your Members",
    cName: "Name",
    cEmail: "E-Mail",
    cAdress: "Address",
    cActions: "Edit",
    cAddMember: "Add Member",

    cYourCourts: "Your Courts",
    cSurface: "Surface",
    cAddCourt: "Add Court",
    cClose: "Close",

    cEdit: "Edit",
    cDelete: "Delete",
    

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
    club: "Club",
    address: "Adresse",
    street: "Straße",
    city: "Stadt",
    postcode: "PLZ",
    contact: "Kontaktperson",
    firstName: "Vorname",
    lastName: "Nachname",
    email: "E-mail",
    password: "Passwort eingeben",
    passwordCheck: "Passwort wiederholen",
    register: "Registrieren",

    //General
    cancel: "Abbrechen",

    //Courts
    court : "Platz",

    //Clubsettings
    cAdministration: "Administration",
    cYourSettings: "Einstellungen",
    clubAddress: "Club Adresse",
    postalCode: "Postleitzahl",
    openingHours: "Öffnungszeiten",
    hoursPerWeek: "Stunden pro Woche",
    maxReservations: "max. Reservierungen",

    cYourMembers: "Deine Mitglieder",
    cName: "Name",
    cEmail: "E-Mail",
    cAdress: "Adresse",
    cActions: "Bearbeiten",
    cAddMember: "Mitglied hinzufügen",

    cYourCourts: "Deine Plätze",
    cSurface: "Oberfläche",
    cAddCourt: "Platz hinzufügen",
    cClose: "Beenden",

    cEdit: "Bearbeiten",
    cDelete: "Entfernen",

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