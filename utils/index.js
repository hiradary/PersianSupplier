const putZero = number => {
    if (number < 10) return `0${number}`;
    return number;
};

const toPersian = value => {
    const charCodeZero = "۰".charCodeAt(0);
    return String(value).replace(/[0-9]/g, w =>
        String.fromCharCode(w.charCodeAt(0) + charCodeZero - 48)
    );
};

const shuffle = array => {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

const getRndBoolean = () => {
    const number = Math.floor(Math.random() * 100) + 1;

    if (number % 2 === 0) return number;
    return 0;
};

const sample = array => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
};

const getRndInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = {
    putZero,
    toPersian,
    shuffle,
    getRndInteger,
    getRndBoolean,
    sample
};
