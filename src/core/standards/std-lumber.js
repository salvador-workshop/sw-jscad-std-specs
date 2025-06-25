"use strict"

/**
 * These standards follow North American dimensional lumber sizes
 */

const numNames = {
    1: 'ONE',
    2: 'TWO',
    3: 'THREE',
    4: 'FOUR',
    6: 'SIX',
    8: 'EIGHT',
    10: 'TEN',
    12: 'TWELVE',
}

const widths = [1, 2, 3, 4, 6, 8, 10, 12]

const depths = [1, 2, 3, 4]

const lumberStd = ({ lib, swLib }) => {
    return {
        TYP_PEG_DIAM: 1,
        TYP_PEG_LENGTH: 1,
        TYP_BISCUIT_RADII: [1, 1],
    }
}

module.exports = { init: lumberStd };
