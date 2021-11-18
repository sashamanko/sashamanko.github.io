let input = {
    0: ['1', 'sdf'],
    1: ['2'],
    2: ['3'],
    3: ['4'],
    4: ['5'],
};

let shuffle = function(arr) {
    for (let key in arr) {
        let tmp = arr[key];
        let rnd = Math.floor(Math.random() * (arr[key]));

        arr[key] = arr[rnd];
        arr[rnd] = tmp;
    }
    return arr;
}


// Run
console.log(shuffle(input));