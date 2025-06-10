const coreModule = require('./core');

const init = ({ lib }) => {
    const swJscad = {
        core: coreModule.init({ lib }),
    }
    return swJscad;
}

module.exports = { init };
