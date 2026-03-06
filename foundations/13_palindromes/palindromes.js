const palindromes = function (word) {
    let newWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let reverse = ""
    for (let i=newWord.length-1;i>=0;i--){
        reverse += newWord[i]
    }
    if (newWord == reverse) return true
    else return false
};

// Do not edit below this line
module.exports = palindromes;
