/*
Group AnagramGiven an array of strings strs, group the anagrams together. You can return the answer in any order
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:
Input: strs = [""]Output: [[""]]
Example 3:
Input: strs = ["a"]Output: [["a"]]
*/

var groupAnagrams = function(strs) {
    let map = new Map();

    // Iterate through each string in the array
    for (let str of strs) {
        // Sort the string to create a common key for anagrams
        let key = str.split('').sort().join('');
        
        // Group strings by the sorted key
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    // Convert the map values to an array
    return Array.from(map.values());
};

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

console.log(groupAnagrams([""]));
// Output: [[""]]

console.log(groupAnagrams(["a"]));
// Output: [["a"]]