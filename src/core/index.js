"use strict"

/**
 * Core
 * @namespace core
 */

const init = ({ lib }) => {
    const core = {
        constants: require('./constants'),
        errors: require('./errors'),
    }

    core.internals = require('./internals').init({ lib, swLib: core });

    return core;
}

module.exports = { init };
