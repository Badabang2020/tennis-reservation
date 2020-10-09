"use strict";
/*******************************************************
 *     Hash-based Routes for Single Page Applications.
 *     Routes can are treated like Views. Each Route is
 *     therefore bound to one single (unique) View.
 *******************************************************/

const app = document.getElementById("bash_app");
export default class Bash_Route{
    constructor(slug, template){
        this.slug = slug;
        this.template = template;

        //Dieses Event wird gefeuert, sobald die .tpl Datei fertig in das app-div geladen wurde.
        window.addEventListener("templateChanged", this.listen.bind(this));
    }

    listen(e){
        //Wenn das Event in seiner "Details"-Eigenschaft unter der Property "slug" denselben Wert
        // hat, wie die Slug dieser Route, dann führen wir die "INIT()" Function aus.
        if(e.detail.slug == this.slug)
            this.init();
    }

    init(){
        // TO BE OVERWRITTEN IN PARTICULAR ROUTE!!"!!!!!!11 elf
        console.log("INITED");
    }

    isActive(){
        //Diese Funktion überprüft zuerst, ob ein Fragezeichen in der URL ist, und vergleicht dann
        //entsprechend den ausgelesenen Slug der URL mit dem Slug der View.
        //Stimmen die Slugs überein, so ist diese Route dran. Return True.
        let index = window.location.hash.substr(1).indexOf("?");
        if(index)
            return(window.location.hash.substr(1,index).replace("#","") === this.slug);
        else
            return (window.location.hash.substr(1).replace("#", "") === this.slug);
    }

    renderMarkup(){
        //Wenn das Template eine Funktion ist, führe sie aus und spiele Ergebnis in app.innerHTML
        //Ansonsten führe .tpl() aus.
        if(typeof(template) === "function")
            app.innerHTML = this.template();
        else
            this.tpl();
    }

    tpl(){

        //Holt sich mit $.get() die Datei und spielt den Inhalt der Datei in app.innerHTML aus.
        //Feuert anschließend das Event "templateChanged" mit dem Slug als Detail ab.
        let slug = this.slug;
        $.get(window.Bash.system.webRoot + window.Bash.system.templatesPath +"/"+this.template+".tpl", function(tpl){
            app.innerHTML = tpl;
            window.dispatchEvent(new CustomEvent("templateChanged", {detail: {slug: slug}}));
        });
    }
}