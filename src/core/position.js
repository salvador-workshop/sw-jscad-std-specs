"use strict"

/**
 * ...
 * @namespace core.position
 */

const positionUtils = ({ lib }) => {
    /**
     * Measures key info, and presents it in a readable manner, like `{ size: { x: 99, y: 99, z: 99 }, min: { ... }, max: { ... } }`
     * @memberof core.position
     * @instance
     * @returns ...
     */
    const measure = (inputGeom) => {
        const {
            measureDimensions,
            measureBoundingBox,
        } = lib.measurements

        return {
            boundingBox: measureBoundingBox(inputGeom),
            dimensions: measureDimensions(inputGeom),
        }
    };

    return {
        measure,
        /**
         * Gets the keypoints for a given object
         * @memberof core.position
         * @instance
         * @returns ...
         */
        getKeypoints: (inputGeom) => {
            // keypoints: box corners, midpoints of edges, midpoints of box faces
            return null;
        }
    }
}

module.exports = { init: positionUtils };
