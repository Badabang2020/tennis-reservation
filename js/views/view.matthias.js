'use strict';

import Bash_Route from "./../bash/bash-spa-route.js";

export default class MatthiasView extends Bash_Route {
    constructor(slug, temaplate) {
        super(slug, temaplate);
    }

    init() {
        $('#back').unbind('click').on('click', function () {
            window.location.hash = "/";
        });
    }
}