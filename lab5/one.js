// <editor-fold desc="functions from jsfiddle">
const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 10;
})

function testB() {
    console.log("Expected output of multiply each elem of [1,3,5,3,3] by 10 is [10,30,50,30,30] "
        + "     TEST " + ((JSON.stringify(b) === "[10,30,50,30,30]") ? "" : "NOT ") + "SUCCEEDED");
}

const c = a.filter(function (elem, i, array) {
    return elem === 3;
});

function testC() {
    console.log("Expected output of filter 3 of [1,3,5,3,3] is [3,3,3] "
        + "     TEST " + ((JSON.stringify(c) === "[3,3,3]") ? "" : "NOT ") + "SUCCEEDED");
}

const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});

function testD() {
    console.log("Expected output of product of [1,3,5,3,3] is 135 "
        + "     TEST " + ((d === 135) ? "" : "NOT ") + "SUCCEEDED");
}

const d2 = a.find(function (elem) {
    return elem > 1;
}); //3
function testD2() {
    console.log("Expected output of find first elem bigger than 1 of [1,3,5,3,3] is 3 "
        + "     TEST " + ((d2 === 3) ? "" : "NOT ") + "SUCCEEDED");
}

const d3 = a.findIndex(function (elem) {
    return elem > 1;
}); //1
function testD3() {
    console.log("Expected output of find first elem's index bigger than 1 of [1,3,5,3,3] is 1 "
        + "     TEST " + ((d3 === 1) ? "" : "NOT ") + "SUCCEEDED");
}

testB();
testC();
testD();
testD2();
testD3();
// </editor-fold>

// <editor-fold desc="lab5 functions">

const max = function (a, b) {
    if (a > b) return a;
    else return b;
}

function testMax() {
    console.log("Expected output of max(5,3) is 5 "
        + "     TEST " + ((max(5, 3) === 5) ? "" : "NOT ") + "SUCCEEDED");
}

const maxOfThree = function (a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    if (c >= a && c >= b) return c;
    else return -1;
}

function testMaxOfThree() {
    console.log("Expected output of maxOfThree(5,3,10) is 10 "
        + "     TEST " + ((maxOfThree(5, 3, 10) === 10) ? "" : "NOT ") + "SUCCEEDED");
}

const isVowel = function (letter) {
    if (letter === 'a' || letter === 'e' || letter === 'o' || letter === 'u' || letter === 'i') return true;
    return false;
}

function testIsVowel() {
    console.log("Expected output of isVowel(a) is true "
        + "     TEST " + ((isVowel('a') === true) ? "" : "NOT ") + "SUCCEEDED");
    console.log("Expected output of isVowel(b) is false "
        + "     TEST " + ((isVowel('b') === false) ? "" : "NOT ") + "SUCCEEDED");
}

const sum = function (arr) {
    return arr.reduce(function (prev, elem, i, array) {
        return prev + elem;
    });
}

function testSum() {
    console.log("Expected output of sum([5,3,10]) is 18 "
        + "     TEST " + ((sum([5, 3, 10]) === 18) ? "" : "NOT ") + "SUCCEEDED");
}

const multiply = function (arr) {
    return arr.reduce(function (prev, elem, i, array) {
        return prev * elem;
    });
}

function testMultiply() {
    console.log("Expected output of multiply([5,3,10]) is 150 "
        + "     TEST " + ((multiply([5, 3, 10]) === 150) ? "" : "NOT ") + "SUCCEEDED");
}

const reverse = function (str) {
    return str.split("").reverse().join("");
}

function testReverse() {
    console.log("Expected output of reverse('abc') is cba "
        + "     TEST " + ((reverse("abc") === "cba") ? "" : "NOT ") + "SUCCEEDED");
}

const findLongestWord = function (arr) {
    let res = "";
    let longest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
            res = arr[i];
        }
    }
    return res;
}

function testFindLongestWord() {
    console.log("Expected output of findLongestWord([\"a\", \"abc\", \"good\", \"better\", \"at\"]) is better "
        + "     TEST " + ((findLongestWord(["a", "abc", "good", "better", "at"]) === "better") ? "" : "NOT ") + "SUCCEEDED");
}

const filterLongWords = function (arr, len) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= len) {
            res.push(arr[i]);
        }
    }
    return res;
}

function testFilterLongWords() {
    console.log("Expected output of filterLongWords([\"a\", \"abc\", \"good\", \"better\", \"at\"]) is [\"abc\", \"good\", \"better\"] "
        + "     TEST " + ((findLongestWord(["a", "abc", "good", "better", "at"]) === "[abc, good, better]") ? "" : "NOT ") + "SUCCEEDED");
}

testMax();
testMaxOfThree();
testIsVowel();
testSum();
testMultiply();
testReverse();
testFindLongestWord();
testFilterLongWords();

// </editor-fold>