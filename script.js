function extractCurrencyValue(str) {
    let i = 0;

    //for (let char of str) {

    for (; i < str.length; i++) {

        let char = str[i];

        // Проверка на число
        if (!( +char )) {
            alert(`Не число: ${char}`);
            continue; // если не число, пропускаем один шаг цикла
        }       
        str = str.slice(i);
        break; // если число, заканчиваем цикл целиком
    }

    return Number(str);
}

alert(extractCurrencyValue('$120') === 120);
