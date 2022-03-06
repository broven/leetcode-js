/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const waitValidate = {
        row: {},
        column: {},
        section: {}
    }
    for (let i = 0; i < 9; i++) {
        let arr = board[i];
        // 横向
        waitValidate.push(arr.filter(i => i !== '.'));
        // column
        waitValidate.push(board.map(item => item[i]).filter( i => i !== '.'));
        // section
        const section_x = '1.1.1.2.2.2.3.3.3'.split('.');
        const section_y = '1.2.3.1.2.3.1.2.3'.split('.');
        const xk = parseInt(i/3) * 3;
        const yk = i % 3 * 3;
        waitValidate.push(section_x.map((item_x, index)=> {
            const item_y = section_y[index];
            return board[+item_x + xk - 1][+item_y + yk - 1];
        }).filter(i => i !== '.'));
    }
    for (const validateArr of waitValidate) {
        const hashTable = {};
        for (item of validateArr) {
           if (hashTable[item] === 1) {
                return false;
           }
           if (!hashTable[item]) {
               hashTable[item] = 1;
           }
        }
    }
    return true;

};
// @lc code=end
console.log(isValidSudoku([["7",".",".",".","4",".",".",".","."],[".",".",".","8","6","5",".",".","."],[".","1",".","2",".",".",".",".","."],[".",".",".",".",".","9",".",".","."],[".",".",".",".","5",".","5",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".","2",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]))
