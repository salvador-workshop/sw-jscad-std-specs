"use strict"

/**
 * Families
 * @namespace families
 */

const init = ({ lib }) => {
    const families = {
        trimAranea: require('./trim-aranea').init({ lib }),
    }

    return families;
}

module.exports = { init };
