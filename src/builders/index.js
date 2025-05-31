const init = ({ lib, swLib }) => {
    const builders = {
        // Dependent on libs and utils
        columns: require('./columns').init({ lib, swLib }),
        walls: require('./walls').init({ lib, swLib }),
    }

    // gotta do this because of "builders" prop name conflict :(
    const initBuilders = {
        ...builders,
        ...swLib.builders,
    }

    // Dependent on libs, utils, and first builders
    builders.entryways = require('./entryways').init({ lib, swLib: { ...swLib, builders: initBuilders } });
    builders.roofs = require('./roofs').init({ lib, swLib: { ...swLib, builders: initBuilders } });
    builders.buttress = require('./buttress').init({ lib, swLib: { ...swLib, builders: initBuilders } });

    return builders;
}

module.exports = { init };
