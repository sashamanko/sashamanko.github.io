const arr = [14, -3, 13, -6, 0, 1, 6, 7, 2, 8, 10, 3, 4, 5, 9];

function arraySortNum(Array) {
    let Out = []

    for (let i = 0; i < Array.length; i++) {
        for (let j = i; j < Array.length; j++) {
            if (Array[i] > Array[j]) {
                let temp = Array[i];
                Array[i] = Array[j];
                Array[j] = temp;
            }
        }
        Out.push(Array[i])
    }
    return Out;
}

console.log(arraySortNum(arr));