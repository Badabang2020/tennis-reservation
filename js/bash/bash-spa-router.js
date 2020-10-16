"use strict";
/*******************************************************
 *     Hash-based router for Single Page Applications.
 *     Handles Routes behind a '/#/' to your convenience.
 *     First Route will be handled as homeRoute.
 *     Second Route will be handled as 404Route;
 *******************************************************/
export default  class Bash_SPA_Router{
    constructor(routes){
        this.routes = routes; //DEas ist das Array aus main.js
        this.route404 = undefined;
        this.homeRoute = this.routes[0]; //Das ist die erste Route in der Liste
        this.init();
    }

    init(){
        //Kümmert sich darum, dass die Änderungen in der URL ab dem # Zeichen behandelt werden.
        window.removeEventListener('hashchange', this.hasChanged);
        window.addEventListener('hashchange', this.hasChanged.bind(this));

        //Beim ersten Laden soll auch ein Tepmlate geladen werden, deshalb einmal direkt anstoßen.
        this.hasChanged();
    }

    hasChanged(){
        //Pürfe, ob überhaupt ein SLUG eingegeben wurde.
        if(window.location.hash.length > 2){
            //Frage jede Route, ob sie gerade dran ist.
            for(const route of this.routes){
                if(route.isActive()){
                    //Wenn die Route dran ist, dann gehe dorthin.
                    this.goToRoute(route);
                    return;
                }
            }
            if(this.route404)
                window.location.hash = this.route404.slug;
            else{
                //Es wurde keine passende Route gefunden, es ist aber auch nicht die startseite. ergo 404
                console.log("I have no Idea where "+window.location.hash+" should be, but hey - taste some startpage!");
                window.location.hash = this.homeRoute.slug;
            }
        } else{
            //Wenn nicht, dann lade Startseite.
            window.location.hash = this.homeRoute.slug; //Startseite wird geladen
            this.goToRoute(this.homeRoute);
        }
    }

    goToRoute(route){
        //Führe die Funkztion renderMarkup der jeweiligen Route aus.
        route.renderMarkup();
    }
}