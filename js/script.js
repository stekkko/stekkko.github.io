let randArray = [];

for (let i = 0; i < 1000; i++){
    randArray.push(Math.random());
}

function printArray(array=randArray){
    console.log(randArray);
}

function min(array=randArray){
    let min = 1;
    for (let i = 0; i < array.length; i++)
        if (array[i] < min)
            min = array[i];
    console.log(min);
}

function max(array=randArray){
    let max = 0;
    for (let i = 0; i < array.length; i++)
        if (array[i] > max)
            max = array[i];
    console.log(max);
}

function med(array=randArray){
    let a = [];
    for (let i = 0; i < array.length; i++)
        a.push(array[i]);
    a.sort();
    console.log(a[~~(a.length / 2)]);
}

function merge(array=randArray, l = 0, r = randArray.length - 1){
    if (l >= r)
        return;

    let m = ~~((l + r) / 2);
    merge(array, l, m);
    merge(array, m + 1, r)

    let firstArray = [];
    for (let i = l; i < m + 1; i++)
        firstArray.push(array[i]);

    let secondArray = [];
    for (let i = m + 1; i < r + 1; i++)
        secondArray.push(array[i]);

    let i = 0, j = 0;
    for (let k = l; k <= r; k++)
        if ((i >= firstArray.length) || ((firstArray[i] > secondArray[j]) && (j < secondArray.length)))
            array[k] = secondArray[j++];
        else
            array[k] = firstArray[i++];
}

function countTag() {
    let tags = document.querySelectorAll("*");
    for (let i = 0; i < tags.length; i++) {
        console.log(tags[i].tagName, document.getElementsByTagName(tags[i].tagName).length);
    }
}

function clearConsole(){
    console.clear()
}

