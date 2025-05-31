const init = ({ lib, swLib }) => {
    const builders = {
        // Dependent on libs and utils
        columns: require('./columns').init({ lib, swLib }),
        walls: require('./walls').init({ lib, swLib }),
    }

    // Gotta do this stuff because of conflicts with the "builders" prop name
    builders.entryways = require('./entryways').init({
        lib,
        swLib: {
            ...swLib, builders: { ...swLib.builders, ...builders }
        }
    });
    builders.roofs = require('./roofs').init({
        lib,
        swLib: {
            ...swLib, builders: { ...swLib.builders, ...builders }
        }
    });
    builders.buttress = require('./buttress').init({
        lib,
        swLib: {
            ...swLib, builders: { ...swLib.builders, ...builders }
        }
    });

    return builders;
}

module.exports = { init };
