"use strict"

/**
 * Builders
 * @namespace builders
 */

const init = ({ lib, swLib }) => {
    const builders = {
        // Dependent on libs and utils
        columns: require('./columns').init({ lib, swLib }),
        walls: require('./walls').init({ lib, swLib }),
        arches: require('./arches').init({ lib, swLib }),
    }

    builders.entryways = require('./entryways').init({ lib, swLib: { ...swLib, builders } });
    builders.roofs = require('./roofs').init({ lib, swLib: { ...swLib, builders } });
    builders.buttress = require('./buttress').init({ lib, swLib: { ...swLib, builders } });

    return builders;
}

module.exports = { init };
