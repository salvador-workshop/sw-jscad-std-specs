const coreModule = require('./core');
const utilsModule = require('./utils');
const buildersCoreModule = require('./builders-core');
const buildersModule = require('./builders');

const init = ({ lib }) => {
    const swJscad = {
        core: coreModule.init({ lib }),
    }

    swJscad.utils = utilsModule.init({ lib, swLib: swJscad });

    const buildersCore = buildersCoreModule.init({ lib, swLib: swJscad });
    const builders = buildersModule.init({ lib, swLib: { ...swJscad, builders: buildersCore } });
    swJscad.builders = {
        ...buildersCore,
        ...builders,
    }

    return swJscad;
}

module.exports = { init };
