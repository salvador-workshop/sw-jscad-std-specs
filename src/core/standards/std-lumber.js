"use strict"

/**
 * These standards follow North American dimensional lumber sizes
 */


const lumberStd = ({ lib, swLib }) => {
    const { constants, maths } = swLib.core

    const baseLumberSizes = {
        '1': {
            name: 'ONE',
            nominal: maths.inchesToMm(1),
            actual: maths.inchesToMm(3 / 4)
        },
        '2': {
            name: 'TWO',
            nominal: maths.inchesToMm(2),
            actual: maths.inchesToMm(1.5)
        },
        '3': {
            name: 'THREE',
            nominal: maths.inchesToMm(3),
            actual: maths.inchesToMm(2.5)
        },
        '4': {
            name: 'FOUR',
            nominal: maths.inchesToMm(4),
            actual: maths.inchesToMm(3.5)
        },
        '6': {
            name: 'SIX',
            nominal: maths.inchesToMm(6),
            actual: maths.inchesToMm(5.5)
        },
        '8': {
            name: 'EIGHT',
            nominal: maths.inchesToMm(8),
            actual: maths.inchesToMm(7.25)
        },
        '10': {
            name: 'TEN',
            nominal: maths.inchesToMm(10),
            actual: maths.inchesToMm(9.25)
        },
        '12': {
            name: 'TWELVE',
            nominal: maths.inchesToMm(12),
            actual: maths.inchesToMm(11.25)
        },
    }

    const widths = [1, 2, 3, 4, 6, 8, 10, 12]
    const depths = [1, 2, 3, 4]

    const computedSizes = {}
    const lumberSizes = maths.arrayCartesianProduct(depths, widths)
    lumberSizes.array.forEach(lumberDims => {
        const newPropName = `${lumberDims[0]}_BY_${lumberDims[1]}`;
        const newVal = {
            depth: baseLumberSizes[`${lumberDims[0]}`].actual,
            width: baseLumberSizes[`${lumberDims[1]}`].actual,
        }
        computedSizes[newPropName] = newVal
    });
    console.log(lumberSizes)
    console.log(computedSizes)

    return {
        TYP_PEG_DIAM: 1,
        TYP_PEG_LENGTH: 1,
        TYP_BISCUIT_RADII: [1, 1],
        ...computedSizes,
    }
}

module.exports = { init: lumberStd };
