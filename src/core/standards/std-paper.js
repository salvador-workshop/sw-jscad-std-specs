"use strict"

const paperStd = ({ lib, swLib }) => {
    return {
        A4: [999, 999],
        LETTER: [999, 999],
        TABLOID: [999, 999],
        LEDGER: [999, 999],
    }
}

module.exports = { init: paperStd };
