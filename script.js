`use strict`;

// var numberOfBottles = 99;
// while (numberOfBottles >= 0) {
//     var bottleWord = 'bottles';
//     if (numberOfBottles === 1) {
//         bottleWord = 'bottle';
//     }
//     console.log(numberOfBottles + ' ' + bottleWord + ' of beer on the wall');
//     console.log(numberOfBottles + ' ' + bottleWord + ' of beer,');
//     console.log('Take one down, pass it around,');
//     numberOfBottles--;
//     console.log(numberOfBottles + ' ' + bottleWord + ' of beer on the wall.');
// }
let bottles = 99;
let newBottles = bottles - 1;
let bWord = ``;

const bottles99 = function () {
    while (bottles > 0 && newBottles > -1) {
        if (bottles === 1 && newBottles === 1) {
            bWord = `bottle`;
        } else {
            bWord = `bottles`;
        }
        console.log(
            `${bottles} ${bWord} of beer on the wall, ${bottles} ${bWord} of beer. Take one down and pass it around, ${newBottles} ${bWord} of beer on the wall.`
        );
        bottles--;
        newBottles--;
    }
};
bottles99();

// to be continued
