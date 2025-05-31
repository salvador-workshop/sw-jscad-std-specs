"use strict"

/**
 * Details
 * @namespace details
 */

const init = ({ lib }) => {
    const details = {
        foils: require('./foils').init({ lib }),
        moulds: require('./moulds').init({ lib }),
        profiles: require('./profiles').init({ lib }),
    }

    return details;
}

module.exports = { init };
