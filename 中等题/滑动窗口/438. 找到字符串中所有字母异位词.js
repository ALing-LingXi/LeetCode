/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const arr = []
    const sarr = new Array(26).fill(0)
    const parr = new Array(26).fill(0)
    const a = "a".charCodeAt(0)
    // 如果p的长度比s长，那么不可能存在同素异形体
    if (s.length < p.length) return []
    // 通过(字母-a)的unicdoe的值作为判断储存了哪个字母
    for (let i = 0; i < p.length; i++) {
        parr[p[i].charCodeAt(0) - a]++
        sarr[s[i].charCodeAt(0) - a]++
    }
    // 判断两个数组字母出现次数频率是否相同
    const compare = (sarr, parr) => {
        for (let i = 0; i < parr.length; i++) {
            if (sarr[i] !== parr[i]) {
                return false
            }
        }
        return true

    }
    if (compare(sarr,parr)) arr.push(0)
    // 开始滑动
    for (let i = 0; i+p.length <= s.length; i++) {
        sarr[s[i].charCodeAt(0) - a]--
        sarr[s[i+p.length].charCodeAt(0) - a]++
        if (compare(sarr,parr)) arr.push(i+1)
    }
    return arr
};

// const a = "a".charCodeAt(0)
// const b = "b".charCodeAt(0)
// console.log(b-a)