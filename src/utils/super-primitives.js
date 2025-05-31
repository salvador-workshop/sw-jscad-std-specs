"use strict"

/**
 * ...
 * @namespace utils.superPrimitives
 */

//-----------
// TO-DO
//---------------------
// - Cylinders with rounded corners
// - Mesh shell primitives
//---------------------

const superPrimitivesInit = ({ lib }) => {
    const { cuboid } = lib.primitives
    const { expand } = lib.expansions
    const { translate } = lib.transforms

    return {
        /**
         * Frame cuboid
         * @memberof utils.superPrimitives
         * @param {*} param0 
         * @returns ...
         */
        frameCuboid: ({ size, frameWidth }) => {
            console.log(`frameCuboid() size = ${JSON.stringify(size)}, frameWidth = ${JSON.stringify(frameWidth)}`);
            const outerCuboid = cuboid({ size });

            return outerCuboid;
        }
    }
}

module.exports = { init: superPrimitivesInit };
