const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (let l of horizontalJoin) {
        if (l.includes(word) || l.includes(word.split("").reverse().join(""))) {
            return true;
        }

        let verticalJoin = transpose(letters).map((ls) => ls.join(""));
        for (let l of verticalJoin) {
            if (l.includes(word) || l.includes(word.split("").reverse().join(""))) {
                return true;
            }
        }
    }
        return false;
    };

    const transpose = function(matrix) {
        let output = [];
        for (let i = 0; i < matrix[0].length; i++) {
            const subOutput = [];  
            for (let j = 0; j < matrix.length; j++) {
                subOutput.push(matrix[j][i]);
            }
            output.push(subOutput);
        }
        return output;
    };

    ////////////////////////////////////////

module.exports = wordSearch