"use strict"

const masonryStd = ({ lib, swLib }) => {
    const { constants, maths } = swLib.core

    const baseStandards = {
        MORTAR_JOINT: maths.inchesToMm(3 / 8),
        MORTAR_JOINT_LG: maths.inchesToMm(1 / 2),
        US_BRICK_LENGTH_NOM: maths.inchesToMm(8),
        US_BRICK_WIDTH_NOM: maths.inchesToMm(4),
        US_BRICK_HEIGHT_NOM: maths.inchesToMm(2 + (2 / 3)),
        UK_BRICK_LENGTH_NOM: 215,
        UK_BRICK_WIDTH_NOM: 102.5,
        UK_BRICK_HEIGHT_NOM: 65,
    }

    const computedStandards = {
        US_BRICK_LENGTH: baseStandards.US_BRICK_LENGTH_NOM - baseStandards.MORTAR_JOINT,
        US_BRICK_WIDTH: baseStandards.US_BRICK_WIDTH_NOM - baseStandards.MORTAR_JOINT,
        US_BRICK_HEIGHT: baseStandards.US_BRICK_HEIGHT_NOM - baseStandards.MORTAR_JOINT,
        US_BRICK_LENGTH_LG_JOINT: baseStandards.US_BRICK_LENGTH_NOM - baseStandards.MORTAR_JOINT_LG,
        US_BRICK_WIDTH_LG_JOINT: baseStandards.US_BRICK_WIDTH_NOM - baseStandards.MORTAR_JOINT_LG,
        US_BRICK_HEIGHT_LG_JOINT: baseStandards.US_BRICK_HEIGHT_NOM - baseStandards.MORTAR_JOINT_LG,
    }

    return {
        ...baseStandards,
        ...computedStandards,
    }
}

module.exports = { init: masonryStd };
