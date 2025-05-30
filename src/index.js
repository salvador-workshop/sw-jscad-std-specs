const coreModule = require('./core');
const utilsModule = require('./utils');
const buildersCoreModule = require('./builders-core');
const buildersModule = require('./builders');

const init = ({ lib }) => {
    const swJscad = {
        core: coreModule.init({ lib }),
    }

    swJscad.utils = utilsModule.init({ lib, swLib: swJscad });
    swJscad.builders = buildersCoreModule.init({ lib, swLib: swJscad });

    swJscad.builders = {
        ...swJscad.builders,
        ...buildersModule.init({ lib, swLib: swJscad }),
    }

    return swJscad;
}

module.exports = { init };
