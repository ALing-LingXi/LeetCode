/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    for (str of strs){
        const SortStr = str.split("").sort().join("")
        if(!map.has(SortStr)){
            map.set(SortStr,[])
        }
        map.get(SortStr).push(str)
    }
    return Array.from(map.values())
};
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
