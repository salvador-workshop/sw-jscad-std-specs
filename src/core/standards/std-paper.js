"use strict"

const paperStd = ({ lib, swLib }) => {
    return {
        A4: {},
        LETTER: {},
        TABLOID: {},
        LEDGER: {},
    }
}

module.exports = { init: paperStd };
