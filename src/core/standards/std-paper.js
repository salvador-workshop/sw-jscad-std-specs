"use strict"

const paperStd = ({ lib, swLib }) => {
    const { constants, maths } = swLib.core

    // STANDARD: [width, height]
    const cards = {
        BUSINESS_CARD: [maths.inchesToMm(3 / 8), maths.inchesToMm(3 / 8)],
        CREDIT_CARD: [maths.inchesToMm(3 / 8), maths.inchesToMm(3 / 8)],
        POSTCARD: [maths.inchesToMm(6), maths.inchesToMm(4)],
    }

    const metric = {
        A4: [maths.inchesToMm(6), maths.inchesToMm(6)],
    }

    const imperial = {
        LETTER: [maths.inchesToMm(6), maths.inchesToMm(6)],
        TABLOID: [maths.inchesToMm(6), maths.inchesToMm(6)],
        LEDGER: [maths.inchesToMm(6), maths.inchesToMm(6)],
    }

    const bookmarks = {
        BOOKMARK: [maths.inchesToMm(6), maths.inchesToMm(4)],
    }

    const stock = {
        BOARD: [maths.inchesToMm(6), maths.inchesToMm(4)],
    }

    const photos = {
        EIGHT_BY_TEN: [maths.inchesToMm(8), maths.inchesToMm(10)],
    }

    return {
        cards,
        metric,
        imperial,
        bookmarks,
        stock,
        photos
    }
}

module.exports = { init: paperStd };
