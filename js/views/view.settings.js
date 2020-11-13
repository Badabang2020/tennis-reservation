'use strict';

import Bash_Route from "./../bash/bash-spa-route.js";

export default class SettingsView extends Bash_Route {
    constructor(slug, temaplate) {
        super(slug, temaplate);
    }

    init() {
        // Button doesn't exist anymore
        // $('#back').unbind('click').on('click', function () {
        //     window.location.hash = "/"; // go to Route
        // });
    }
}