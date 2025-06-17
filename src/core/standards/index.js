"use strict"

const craftStd = require('./std-crafts')
const lumberStd = require('./std-lumber')
const paperStd = require('./std-paper')
const tileStd = require('./std-tiles')

/**
 * ...
 * @namespace core.standards
 */

const standards = ({ lib, swLib }) => {
    const { constants } = swLib.core

    const pegboard = {
        PEGBOARD_SPACING: constants.INCHES_MM_FACTOR,
        PEGBOARD_HOLE_DIAM: constants.INCHES_MM_FACTOR * (7 / 32),
        MICRO_PEGBOARD_SPACING: constants.INCHES_MM_FACTOR / 2,
        MICRO_PEGBOARD_HOLE_DIAM: constants.INCHES_MM_FACTOR / 8,
    }

    const gridfinity = {
        GRIDFINITY_SPACING: 42,
        GRIDFINITY_RAIL_WIDTH: 7,
    }

    return {
        pegboard,
        gridfinity,
        crafts: craftStd,
        lumber: lumberStd,
        paper: paperStd,
        tiles: tileStd,
    }
}

module.exports = { init: standards };
