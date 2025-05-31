const coreModule = require('./core');
const utilsModule = require('./utils');
const detailsModule = require('./details');
const familiesModule = require('./families');
const buildersModule = require('./builders');

const init = ({ lib }) => {
    const swJscad = {
        core: coreModule.init({ lib }),
    }

    swJscad.utils = utilsModule.init({ lib, swLib: swJscad });
    swJscad.details = detailsModule.init({ lib, swLib: swJscad });
    swJscad.families = familiesModule.init({ lib, swLib: swJscad });
    swJscad.builders = buildersModule.init({ lib, swLib: swJscad });

    return swJscad;
}

module.exports = { init };
