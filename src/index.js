const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = Array.from(expr);
    let result = [];
    while (arr.length >= 10) {
        let arr1 = arr.splice(0, 10);
        let b = [];
        while (arr1.length >= 2) {
            if (arr1[0] == '1' && arr1[1] == '1')
                b.push('-');
            else if (arr1[0] == '1' && arr1[1] == '0')
                b.push('.');
            else if (arr1.every(el => el == '*') === true)
                b.push(' ');
            arr1.splice(0, 2);
        }
        result.push((b.join('')));
    }
    return result.map(item => {
        if (MORSE_TABLE[item] == undefined)
            return ' ';
        return MORSE_TABLE[item];
    }).join('');
}

module.exports = {
    decode
}