//Quick Question 1

new Set([1,1,2,2,3,4])

//returns 1, 2, 3, 4

//Quick Question 2

[...new Set("referee")].join("")

//returns referee

//Quick Question 3

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//m looks like {[1, 2 ,3] => true, [1, 2 ,3] => false}

//hasDuplicate

const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCount 

function vowel(char) {
    return  "aeiou".includes(char);
}

function vowelCount (string) {
    const vowelMap = new Map();
    for (let char of string) {
        let lower = char.toLowerCase();
        if (vowel(lower)) {
            if (vowelMap.has(lower)) {
                vowelMap.set(lower, vowelMap.get(lower) + 1)
            } else {
                vowelMap.set(lower, 1)
            }
        }
    }
    return vowelMap;

}
