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

    core.standards = require('./standards').init({ lib, swLib: core });
    core.internals = require('./internals').init({ lib, swLib: core });
    core.specifications = require('./specifications');

    return core;
}

module.exports = { init };
