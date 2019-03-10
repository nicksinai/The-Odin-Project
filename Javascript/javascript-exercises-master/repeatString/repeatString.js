const repeatString = function(string, repeats) {
    if (repeats < 0 ? true : false) {
        return "ERROR";
    }

    let repeatedString = "";

    for (let count = 0; count < repeats; count++) {
        repeatedString += string;
    }

    return repeatedString;
}

module.exports = repeatString
