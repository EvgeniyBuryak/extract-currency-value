function extractCurrencyValue(str) {
    let i = 0;

    //for (let char of str) {

    for (; i < str.length; i++) {

        let char = str[i];

        if (!(+char)) {
            alert(`Не число: ${char}`);
            continue;
        } else {
            alert(char);
            str = str.slice(i);
            break;
        }
    }

    return Number(str);
}

alert(extractCurrencyValue('$120') === 120);
