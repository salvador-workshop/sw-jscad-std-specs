"use strict"

const craftStd = require('./std-crafts')
const lumberStd = require('./std-lumber')
const masonryStd = require('./std-masonry')
const paperStd = require('./std-paper')
const tileStd = require('./std-tiles')

/**
 * ...
 * @namespace core.standards
 */

const standards = ({ lib, swLib }) => {
    const { constants, maths } = swLib.core

    const pegboard = {
        PEGBOARD_SPACING: maths.inchesToMm(1),
        PEGBOARD_HOLE_DIAM: maths.inchesToMm(7 / 32),
        MICRO_PEGBOARD_SPACING: maths.inchesToMm(1 / 2),
        MICRO_PEGBOARD_HOLE_DIAM: maths.inchesToMm(1 / 8),
    }

    const gridfinity = {
        GRIDFINITY_SPACING: 42,
        GRIDFINITY_RAIL_WIDTH: 7,
    }

    return {
        pegboard,
        gridfinity,
        crafts: craftStd.init({ lib, swLib }),
        lumber: lumberStd.init({ lib, swLib }),
        masonry: masonryStd.init({ lib, swLib }),
        paper: paperStd.init({ lib, swLib }),
        tiles: tileStd.init({ lib, swLib }),
    }
}

module.exports = { init: standards };
