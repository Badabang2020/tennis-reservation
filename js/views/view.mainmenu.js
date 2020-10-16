"use strict";
import Bash_Route from "./../bash/bash-spa-route.js";

export default class MainMenuView extends Bash_Route{
    constructor(slug, template) {
        super(slug, template);
    }

    //OVERWRITE
    init(){
        $("#logout").unbind("click").on("click", function(){
           window.bash.utils.deleteCookie("user");
           window.location.hash = "/login";
        });

        $("li").unbind("click").on("click",function(){
            window.location.hash = "/"+$(this).data("slug");
        });
    }
}